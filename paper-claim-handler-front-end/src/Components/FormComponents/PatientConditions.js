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
    empOpen:false,
    autoOpen:false,
    otherOpen:false,
    autoStateOpen:false
  }

  handleCloseEmp = () => {
    this.setState({ empOpen: false });
  };

  handleOpenEmp = () => {
    this.setState({ empOpen: true });
  };
  handleCloseAuto = () => {
    this.setState({ autoOpen: false });
  };

  handleOpenAuto = () => {
    this.setState({ autoOpen: true });
  };
  handleCloseOther = () => {
    this.setState({ otherOpen: false });
  };

  handleOpenOther = () => {
    this.setState({ otherOpen: true });
  };
  handleCloseAccidentState = () => {
    this.setState({ autoStateOpen: false });
  };

  handleOpenAccidentState = () => {
    this.setState({ autoStateOpen: true });
  };
  render(){
    const { classes, page3, handleChange, handleChangeDropDown,  mainState } = this.props
    const usaStates = usStates()
    console.log("inside Raddress render")
    // debugger

    return (
        <React.Fragment>
          <form autoComplete="off">
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="demo-controlled-open-select">Employment? (Current or Privious)</InputLabel>
                <Select
                  data-category={"recipient"}
                  open={this.state.empOpen}
                  onClose={this.handleCloseEmp}
                  onOpen={this.handleOpenEmp}
                  value={mainState["10_a"]}
                  onChange={handleChangeDropDown}
                  inputProps={{
                    name: '10_a',
                    id: 'demo-controlled-open-select',
                    category:"recipient"
                  }}
                >
                  <MenuItem value="">
                    <em>Please select ...</em>
                  </MenuItem>
                  <MenuItem value={"yes"}>Yes</MenuItem>
                  <MenuItem value={"no"}>No</MenuItem>
                </Select>
              </FormControl>
              </form>
              <form autoComplete="off">
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="demo-controlled-open-select">Auto accident?</InputLabel>
                <Select
                  data-category={"recipient"}
                  open={this.state.autoOpen}
                  onClose={this.handleCloseAuto}
                  onOpen={this.handleOpenAuto}
                  value={mainState["10_b"]}
                  onChange={handleChangeDropDown}
                  inputProps={{
                    name: '10_b',
                    id: 'demo-controlled-open-select',
                    category:"recipient"
                  }}
                >
                  <MenuItem value="">
                    <em>Please select ...</em>
                  </MenuItem>
                  <MenuItem value={"yes"}>Yes</MenuItem>
                  <MenuItem value={"no"}>No</MenuItem>
                </Select>
              </FormControl>
            </form>
            < br />
              <form autoComplete="off">
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="demo-controlled-open-select">Auto accident State</InputLabel>
                  <Select
                    data-category={"recipient"}
                    open={this.state.autoStateOpen}
                    onClose={this.handleCloseAccidentState}
                    onOpen={this.handleOpenAccidentState}
                    value={mainState["10_b_state"]}
                    onChange={handleChangeDropDown}
                    inputProps={{
                      name: '10_b_state',
                      id: 'demo-controlled-open-select',
                      category:"recipient"
                    }}
                  >
                    <MenuItem value="">
                      <em>Please select ...</em>
                    </MenuItem>
                    {
                      usaStates.map(dataObj=><MenuItem key={dataObj.abbreviation} value={dataObj.abbreviation}>{dataObj.name}</MenuItem>)
                    }
                  </Select>
                </FormControl>
              </form>
              < br/ >
            <form autoComplete="off">
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-controlled-open-select">Other accidents?</InputLabel>
              <Select
                data-category={"recipient"}
                open={this.state.otherOpen}
                onClose={this.handleCloseOther}
                onOpen={this.handleOpenOther}
                value={mainState["10_c"]}
                onChange={handleChangeDropDown}
                inputProps={{
                  name: '10_c',
                  id: 'demo-controlled-open-select',
                  category:"recipient"
                }}
              >
                <MenuItem value="">
                  <em>Please select ...</em>
                </MenuItem>
                <MenuItem value={"yes"}>Yes</MenuItem>
                <MenuItem value={"no"}>No</MenuItem>
              </Select>
            </FormControl>
          </form>
          <TextField
            hintText="Please type..."
            floatingLabelText={page3[3].label}
            onChange={handleChange}
            data-category={page3[3].category}
            defaultValue={mainState[`${page3[3].name}`]}
            name={page3[3].name}
            style={{width:700}}
            margin="normal"
          />
          < br />
        </React.Fragment>

    )
   }
  }
  PatientConditions.propTypes = {
    classes: PropTypes.object.isRequired,
  };



export default withStyles(styles)(PatientConditions)
