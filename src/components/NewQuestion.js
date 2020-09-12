import React, { useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import WithNavbar from './hoc/WithNavbar';

const NewQuestion = () => {
  const optionOneInput = useRef(null);
  const optionTwoInput = useRef(null);

  return (
    <WithNavbar>
      <React.Fragment>
        <TextField ref={optionOneInput} />
        <TextField ref={optionTwoInput} />
      </React.Fragment>
    </WithNavbar>
  )
};

export default NewQuestion;