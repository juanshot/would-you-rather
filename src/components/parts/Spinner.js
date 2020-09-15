import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
  spinnerWrapper: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  }
}))

const Spinner = () => {
  const classes = useStyles();

  return (
    <div className={classes.spinnerWrapper}>
      <LinearProgress />
    </div>
  )
}

export default Spinner;