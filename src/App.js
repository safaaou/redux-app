import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import BusinessInfo from "./components/step3/BusinessInfo";
import BusinessType from "./components/step1/BusinessType";
import Categories from "./components/step2/Categories";
import { useSelector } from "react-redux";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Business Type", "Categories", "Business Information"];
}

function getStepContent(stepIndex, handleNext) {
  switch (stepIndex) {
    case 0:
      return (
        <>
          <Router>
            <Route
              exact
              path="/"
              render={() => (
                <BusinessType
                  name="type"
                  next={handleNext}
                  options={[
                    { texte: "Grocery", value: "Grocery" },
                    { texte: "Restaurants", value: "Restaurants" },
                    { texte: "Café", value: "Café" },
                    { texte: "Hotel", value: "Hotel" },
                    { texte: "Hall", value: "Hall" },
                    { texte: "School", value: "School" },
                    { texte: "Office", value: "Office" },
                  ]}
                />
              )}
            />
          </Router>
        </>
      );
    case 1:
      return (
        <>
          <Router>
            <Route
              path="/step2"
              render={() => (
                <Categories
                  name="category"
                  next={handleNext}
                  options={[
                    { texte: "Home Care", value: "Home Care" },
                    { texte: "stationery", value: "stationery" },
                    { texte: "Personal Care", value: "Personal Care" },
                    { texte: "Paper Products", value: "Paper Products" },
                    { texte: "Coffee", value: "Coffee" },
                    { texte: "Plastic Products", value: "Plastic Products" },
                    { texte: "Food", value: "Food" },
                    { texte: "Health Care", value: "Health Care" },
                  ]}
                />
              )}
            />
          </Router>
        </>
      );
    case 2:
      return (
        <>
          <Router>
            <Route
              path="/step3"
              render={() => <BusinessInfo next={handleNext} />}
            />
          </Router>
        </>
      );
    default:
      return "Unknown stepIndex";
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const state = useSelector((state) => state);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography component={"div"} className={classes.instructions}>
              {
                <>
                  <div>
                    <span>Business Type : {state.btn_radio}</span>
                  </div>
                  <div>
                    <span>Categories : {state.check}</span>
                  </div>
                  <div>
                    <span>Personal Information : </span> <br />
                    <span>Name : {state.name}</span>
                    <br />
                    <span>Email : {state.email}</span>
                    <br />
                    <span>Phone : {state.phone}</span>
                    <br />
                  </div>
                </>
              }
            </Typography>
          </div>
        ) : (
          <div>
            <Typography component={"div"} className={classes.instructions}>
              {getStepContent(activeStep, handleNext)}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
}
