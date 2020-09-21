import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Dialog from "@material-ui/core/Dialog";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import WithNavBar from "./hoc/WithNavbar";
import TabPanel from "./parts/TabPanel";
import QuestionList from "./parts/QuestionList";
import QuestionDetail from "./QuestionDetail";

import { checkIfUserHasAnswered } from "./../utilities/validators";
import { sortByTimestamp } from "./../utilities/formatters";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "none",
    width: "100%",
  },
}));

const Dashboard = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [tabValue, setTabValue] = React.useState(0);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [currentQuestionId, setCurrentQuestionId] = React.useState(null);

  const handleTabChange = (_, newValue) => {
    setTabValue(newValue);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleSelect = (id) => {
    setCurrentQuestionId(id);
    setDialogOpen(true);
  };

  return (
    <WithNavBar>
      <div className={classes.root}>
        <AppBar elevation={0} position="static" color="default">
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Not Answered" {...a11yProps(1)} />
            <Tab label="Answered" {...a11yProps(0)} />
          </Tabs>
        </AppBar>
        <TabPanel value={tabValue} index={0} dir={theme.direction}>
          <QuestionList
            questions={props.unAnsweredQuestions}
            onSelect={handleSelect}
          />
        </TabPanel>
        <TabPanel value={tabValue} index={1} dir={theme.direction}>
          <QuestionList
            questions={props.answeredQuestions}
            onSelect={handleSelect}
          />
        </TabPanel>
      </div>
      {/* Question Detail */}
      <Dialog
        onClose={handleDialogClose}
        aria-labelledby="simple-dialog-title"
        open={dialogOpen}
      >
        <QuestionDetail questionId={currentQuestionId} />
      </Dialog>
    </WithNavBar>
  );
};

const mapStateToProps = ({ authedUser, questions, users }) => {
  const mappedQuestionsWithUsers = Object.keys(questions).map(
    (questionKey) => ({
      ...questions[questionKey],
      id: questionKey,
      author: users[questions[questionKey].author],
    })
  );
  return {
    answeredQuestions: mappedQuestionsWithUsers
      .filter(checkIfUserHasAnswered(authedUser))
      .sort(sortByTimestamp),
    unAnsweredQuestions: mappedQuestionsWithUsers
      .filter((question) => {
        return !checkIfUserHasAnswered(authedUser)(question);
      })
      .sort(sortByTimestamp),
  };
};

export default connect(mapStateToProps)(withRouter(Dashboard));
