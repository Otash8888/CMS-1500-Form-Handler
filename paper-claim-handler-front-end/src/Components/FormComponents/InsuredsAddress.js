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


class InsuredsAddress extends React.Component {
  state = {
    open:false
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };


  render(){
    const { classes, page5, handleChange, handleChangeDropDown,  mainState } = this.props
    const usaStates = usStates()
    console.log("inside Raddress render")
    // debugger

    return (
        <React.Fragment>
          {page5.map(dataObj =>
            { if(dataObj.inputType == "text"){
                const name1 = dataObj.name
                return (
                  < React.Fragment>
                    <TextField
                    hintText="Please type..."
                    floatingLabelText={dataObj.label}
                    onChange={handleChange}
                    data-category={dataObj.category}
                    defaultValue={mainState[name1]}
                    name={name1}
                    style={{width:700}}
                    />
                    < br />
                  < /React.Fragment>
                )
              }
            }
          )}
          < br />
            <form autoComplete="off">
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="demo-controlled-open-select">State</InputLabel>
                <Select
                  data-category={"recipient"}
                  open={this.state.open}
                  onClose={this.handleClose}
                  onOpen={this.handleOpen}
                  value={mainState["7_state"]}
                  onChange={handleChangeDropDown}
                  inputProps={{
                    name: '7_state',
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
        </React.Fragment>

    )
   }
  }
  InsuredsAddress.propTypes = {
    classes: PropTypes.object.isRequired,
  };



export default withStyles(styles)(InsuredsAddress)
