import React, { useState } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { setAuthedUser } from "./../../store/actions/authedUser";
import Spinner from '../parts/Spinner';
import NAVIGATION from '../../constants/navigation';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    backgroundColor: theme.palette.info.dark
  },
}));

function WithNavBar(props) {
  const classes = useStyles();
  const [redirect, setRedirect] = useState(false)
  const handleChange = (_, value) => {
    props.history.push(value);
  };
  const handleLogout = () => {
    const { dispatch } = props;
    dispatch(setAuthedUser(null))
    setRedirect(true);
  }

  return (
    redirect ? <Redirect to={'/'} /> :
      <section className={classes.root}>
        {/* App Bar */}
        <AppBar className={classes.appBar} position="static">
          <Tabs value={props.history.location.pathname} onChange={handleChange} aria-label="option tabs">
            {
              NAVIGATION.map((navigation, index) => (
                <Tab label={navigation.label} value={navigation.path} key={index} {...a11yProps(index)} >
                </Tab>
              ))
            }
            {/* Logout tab */}
            <Tab label="Logout" value="/" onClick={handleLogout} />
          </Tabs>
        </AppBar>
        {/* Loading Spinner */}
        {props.isLoading && <Spinner />}
        {/* Content */}
        <Box m={4}>
          {props.children}
        </Box>
      </section>
  );
}
const mapStateToProps = ({ system }) => ({
  isLoading: system.isLoading
})
export default connect(mapStateToProps)(withRouter(WithNavBar));