import React from "react";
import { connect } from "react-redux";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import WithNavBar from "./hoc/WithNavbar";
import TabPanel from "./parts/TabPanel";
import QuestionList from "./parts/QuestionList";

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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <WithNavBar>
      <div className={classes.root}>
        <AppBar elevation={0} position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Answered" {...a11yProps(0)} />
            <Tab label="Not Answered" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <QuestionList questions={props.answeredQuestions} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <QuestionList questions={props.unAnsweredQuestions} />
        </TabPanel>
      </div>
    </WithNavBar>
  );
};

const mapStateToProps = ({ questions, users }) => {
  const mappedQuestionsWithUsers = Object.keys(questions).map(
    (questionKey) => ({
      ...questions[questionKey],
      id: questionKey,
      author: users[questions[questionKey].author],
    })
  );
  return {
    answeredQuestions: mappedQuestionsWithUsers,
    unAnsweredQuestions: mappedQuestionsWithUsers,
  };
};

export default connect(mapStateToProps)(Dashboard);
