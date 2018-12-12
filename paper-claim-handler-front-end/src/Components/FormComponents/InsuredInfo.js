import React from 'react'
import TextField from 'material-ui/TextField';
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import { usStates,  } from '../../dataLists';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import DatePicker from 'material-ui/DatePicker'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 700,
  }

});


class PatientConditions extends React.Component {
  state = {
    insOpen:false,
    genderOpen:false,
    insuranceOpen:false
  }

  handleCloseIns = () => {
    this.setState({ insOpen: false });
  };

  handleOpenIns = () => {
    this.setState({ insOpen: true });
  };
  handleCloseInsurance = () => {
    this.setState({ insuranceOpen: false });
  };

  handleOpenInsurance = () => {
    this.setState({ insuranceOpen: true });
  };
  handleCloseGender = () => {
    this.setState({ genderOpen: false });
  };

  handleOpenGender = () => {
    this.setState({ genderOpen: true });
  };

  render(){
    const { classes, page4, handleChange, handleChangeDropDown,  mainState, handleChangeDateInsured, getformatedDate } = this.props

    console.log("inside Raddress render")
    // debugger

    return (
        <React.Fragment>
        <form autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="demo-controlled-open-select">Choose health insurance </InputLabel>
            <Select
              data-category={"recipient"}
              open={this.state.insuranceOpen}
              onClose={this.handleCloseInsurance}
              onOpen={this.handleOpenInsurance}
              value={mainState["1"]}
              onChange={handleChangeDropDown}
              inputProps={{
                name: '1',
                id: 'demo-controlled-open-select',
                category:"recipient"
              }}
            >
              <MenuItem value="">
                <em>Please select ...</em>
              </MenuItem>
              <MenuItem value="medicare">Medicare</MenuItem>
              <MenuItem value="medicaid">Medicaid</MenuItem>
              <MenuItem value="tricare">TRICARE</MenuItem>
              <MenuItem value="champva">CHAMPVA</MenuItem>
              <MenuItem value="grouphp">Group Health Plan</MenuItem>
              <MenuItem value="feca">FECA</MenuItem>
              <MenuItem value="blcklung">Black Lung</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
        </form>
          <form autoComplete="off">
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-controlled-open-select">Patient Relationship to Insured</InputLabel>
              <Select
                data-category={"recipient"}
                open={this.state.insOpen}
                onClose={this.handleCloseIns}
                onOpen={this.handleOpenIns}
                value={mainState["6"]}
                onChange={handleChangeDropDown}
                inputProps={{
                  name: '6',
                  id: 'demo-controlled-open-select',
                  category:"recipient"
                }}
              >
                <MenuItem value="">
                  <em>Please select ...</em>
                </MenuItem>
                <MenuItem value={page4[0].value1}>{page4[0].value1}</MenuItem>
                <MenuItem value={page4[0].value2}>{page4[0].value2}</MenuItem>
                <MenuItem value={page4[0].value3}>{page4[0].value3}</MenuItem>
                <MenuItem value={page4[0].value4}>{page4[0].value4}</MenuItem>

              </Select>
            </FormControl>
          </form>
          <TextField
            hintText="Please type..."
            floatingLabelText={page4[1].label}
            onChange={handleChange}
            data-category={page4[1].category}
            defaultValue={mainState[`${page4[1].name}`]}
            name={page4[1].name}
            style={{width:700}}
            margin="normal"
          />
          < br />
          <TextField
            hintText="Please type..."
            floatingLabelText={page4[2].label}
            onChange={handleChange}
            data-category={page4[2].category}
            defaultValue={mainState[`${page4[2].name}`]}
            name={page4[2].name}
            style={{width:700}}
            margin="normal"
            type="boolean"
            autoFocus = {true}
            required = {true}

          />
          < br />
          <TextField
            hintText="Please type..."
            floatingLabelText={page4[3].label}
            onChange={handleChange}
            data-category={page4[3].category}
            defaultValue={mainState[`${page4[3].name}`]}
            name={page4[3].name}
            style={{width:700}}
            margin="normal"
          />
          < br />
          <form autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="demo-controlled-open-select">Gender</InputLabel>
            <Select
              data-category={"recipient"}
              open={this.state.genderOpen}
              onClose={this.handleCloseGender}
              onOpen={this.handleOpenGender}
              value={mainState["11_a_sex"]}
              onChange={handleChangeDropDown}
              inputProps={{
                name: '11_a_sex',
                id: 'demo-controlled-open-select',
                category:"recipient"
              }}
            >
              <MenuItem value="">
                <em>Please select ...</em>
              </MenuItem>
              <MenuItem value={"m"}>Male</MenuItem>
              <MenuItem value={"f"}>Female</MenuItem>
            </Select>
          </FormControl>
          </form>
          < br />
          <DatePicker
            hintText={page4[4].label}
            value={getformatedDate(page4[4].yyyy, page4[4].mm, page4[4].dd, page4[4].formatDate )}
            onChange={handleChangeDateInsured}
            style={{width:757}}
          />
        </React.Fragment>

    )
   }
  }
  PatientConditions.propTypes = {
    classes: PropTypes.object.isRequired,
  };



export default withStyles(styles)(PatientConditions)
