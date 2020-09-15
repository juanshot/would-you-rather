import React, { useRef, useState } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';
import WithNavbar from './hoc/WithNavbar';
import { handleSaveQuestion } from './../store/actions/questions'

const useStyles = makeStyles((theme) => ({
  form: {
    '& .MuiTextField-root': {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    }
  },
  formElements: {
    display: 'flex'
  }
}))

const NewQuestion = (props) => {
  const classes = useStyles();
  const [isFormValid, setFormValid] = useState(false)
  const optionOneInput = useRef(null);
  const optionTwoInput = useRef(null);
  const handleSubmit = () => {
    const { dispatch } = props;
    dispatch(handleSaveQuestion({
      optionOneText: optionOneInput.current.value,
      optionTwoText: optionTwoInput.current.value,
      author: props.authedUser
    }));
    props.history.push('/dashboard')
  }
  const handleChange = () => {
    const formValidation = !!((optionOneInput.current && optionOneInput.current.value) && (optionTwoInput.current && optionTwoInput.current.value));
    setFormValid(formValidation)
  }
  return (
    <WithNavbar>
      <form noValidate autoComplete="off" className={classes.form}>
        <div className={classes.formElements}>
          <TextField
            id="first-option"
            inputRef={optionOneInput}
            label="First Option"
            required
            variant="filled"
            onChange={handleChange}
          />
          <TextField
            id="first-option"
            inputRef={optionTwoInput}
            label="Second Option"
            required
            variant="filled"
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="default"
            endIcon={<SaveIcon />}
            onClick={handleSubmit}
            disabled={!isFormValid}
          >
            Save Question
          </Button>
        </div>
      </form>
    </WithNavbar>
  )
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser
});

export default connect(mapStateToProps)(withRouter(NewQuestion));