import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from 'material-ui/TextField';
import RecipientInfo   from './RecipientInfo'
import PatientConditions   from './PatientConditions'
import RecipientsAddress   from './RecipientsAddress'
import InsuredsAddress   from './InsuredsAddress'
import ClaimInfo   from './ClaimInfo'
import ClaimInfoContinue   from './ClaimInfoContinue'
import Signatures   from './Signatures'
import InsuredInfo   from './InsuredInfo'
import Test   from './Test'
import { usStates, getFormInputData, handleToPdf } from '../../dataLists'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

// import InsuredInfo   from './InsuredInfo'
import { connect } from 'react-redux'
import { saveRecipientInfo } from '../../actions/LoginAndSignUpActions.js'
import RaisedButton from 'material-ui/RaisedButton';
import * as jsPDF from 'jspdf'

const page1 = getFormInputData().page1
const styles = theme => ({
  root: {
    width: "90%"
  },
  backButton: {
    marginRight: theme.spacing.unit
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
});



function getSteps() {
  return [
    "Patient's Info",
    "Patient's Address",
    "Patient's Conditions",
    "Insured's Info",
    "Insured's Address",
    "Claim info",
    "Claim info part 2",
    "Signatures",

  ];
}




class MainForm1 extends React.Component {
  state = {
    activeStep: 0,
    recipient:{},
    claim:{},
    recpInfoGenderOpen:false
  }

  handleChangeDate = (e,date) => {
    console.log(date)
    let newState = {...this.state, recipient : {...this.state.recipient, ["3_mm"]:date.getMonth(),["3_dd"]:date.getDate(),["3_yy"]:date.getFullYear()} }
    this.setState({...newState})
      console.log(this.state);
  }
  handleChangeDateInsured = (e,date) => {
    console.log(date)
    let newState = {...this.state, recipient : {...this.state.recipient, ["11_a_mm"]:date.getMonth(),["11_a_dd"]:date.getDate(),["11_a_yy"]:date.getFullYear()} }
    this.setState({...newState})
      console.log(this.state);
  }
  handleChangeDateSign = (e,date) => {
    console.log(date)
    let newState = {...this.state, recipient : {...this.state.recipient, ["12_mm"]:date.getMonth(),["12_dd"]:date.getDate(),["12_yy"]:date.getFullYear()} }
    this.setState({...newState})
      console.log(this.state);
  }
  handleChangeDropDown = (e) => {
    let newState = {...this.state, recipient : {...this.state.recipient, [e.target.name]:e.target.value}}
    this.setState({...newState},() => {
      console.log(this.state);
    })
  }

  handleChange = (e) => {

    if (e){
      console.log(e.target,e.target.name,e.target.value);
      let categoryName = e.target.dataset.category
      let newState = {...this.state, [categoryName]: {...this.state[categoryName], [e.target.name]:e.target.value}}
      this.setState({...newState})
      console.log(this.state);
    }

  }


  getformatedDate = (year, month, day, fFn) => {

    console.log(this.state.recipient[`${year}`]);

    const yyyy = this.state.recipient[`${year}`]
    const mm = this.state.recipient[`${month}`]
    const dd = this.state.recipient[`${day}`]
    let fd;
    if (yyyy && mm && dd){
      fd = fFn(yyyy,mm,dd)

    }

    return fd
  }

  handleClosePatGender = () => {
    this.setState({ recpInfoGenderOpen: false });
  };

  handleOpenPatGender = () => {
    this.setState({ recpInfoGenderOpen: true });
  };

   getStepContent=(stepIndex)=> {
    switch (stepIndex) {
      // case 0:
      //   return (
      //     < Test
      //     handleNext={this.handleNext}
      //     />
      //
      //   )
      case 0:
        return (
          < RecipientInfo page1={page1} mainState={this.state.recipient} open={this.state.recpInfoGenderOpen} handleClosePatGender={this.handleClosePatGender} handleOpenPatGender={this.handleOpenPatGender} handleChangeDropDown={this.handleChangeDropDown} handleChange={this.handleChange}
          handleChangeDate={this.handleChangeDate} getformatedDate={this.getformatedDate}
          />

        )
      case 1:
        return (
          < RecipientsAddress page2={getFormInputData().page2} mainState={this.state.recipient}
          handleChange={this.handleChange}
          handleChangeDropDown={this.handleChangeDropDown
          }
          />
        )
      case 2:
        return (
          < PatientConditions page3={getFormInputData().page3} mainState={this.state.recipient}
          handleChange={this.handleChange}
          handleChangeDropDown={this.handleChangeDropDown
          }
          />
        )
      case 3:
        return (
          < InsuredInfo page4={getFormInputData().page4} mainState={this.state.recipient}
          handleChange={this.handleChange}
          handleChangeDropDown={this.handleChangeDropDown}
          handleChangeDateInsured={this.handleChangeDateInsured}
          getformatedDate={this.getformatedDate}
          />
        )
      case 4:
        return (
          < InsuredsAddress page5={getFormInputData().page5} mainState={this.state.recipient}
          handleChange={this.handleChange}
          handleChangeDropDown={this.handleChangeDropDown}
          />
        )
      case 5:
        return (
          < ClaimInfo page6={getFormInputData().page6} mainState={this.state.recipient}
          handleChange={this.handleChange}
          handleChangeDropDown={this.handleChangeDropDown}
          />
        )
      case 6:
        return (
          < ClaimInfoContinue page7={getFormInputData().page7} mainState={this.state.recipient}
          handleChange={this.handleChange}
          handleChangeDropDown={this.handleChangeDropDown}
          />
        )
      case 7:
      return (
        < Signatures page8={getFormInputData().page8} mainState={this.state.recipient}
        handleChangeDropDown={this.handleChangeDropDown}
        handleChange={this.handleChange}
        handleChangeDateSign={this.handleChangeDateSign}
        getformatedDate={this.getformatedDate}
        />
      )
      default:
        return "Uknown stepIndex";
    }
  }



  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
   handleToPdf(this.state.recipient)

  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
    console.log("inside Main render", this.state)
    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {this.state.activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed!
              </Typography>
              <Button onClick={this.handleReset}>Download CM 1500 pdf</Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {this.getStepContent(activeStep)}
              </Typography>
              <div>
              <RaisedButton
                disabled={activeStep === 0}
                label="Back"
                primary={false}
                style={stylesButton.button}
                onClick={this.handleBack}
                className={classes.backButton}
              />
              <RaisedButton

                label={activeStep === steps.length - 1 ? "Finish" : "Next"}
                primary={true}
                style={stylesButton.button}
                onClick={this.handleNext}
                className={classes.backButton}
              />



              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
const stylesButton = {
  button: {
    margin: 15
  }
};


MainForm1.propTypes = {
  classes: PropTypes.object
};




export default withStyles(styles)(MainForm1);
