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


class Signatures extends React.Component {
  state = {
    open:false,
    insOpen:false
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleCloseIns = () => {
    this.setState({ insOpen: false });
  };

  handleOpenIns = () => {
    this.setState({ insOpen: true });
  };


  render(){
    const { classes, page8, handleChange, handleChangeDropDown,  mainState, handleChangeDateSign, getformatedDate } = this.props

    console.log("inside Raddress render")
    // debugger

    return (
        <React.Fragment>
          <form autoComplete="off">
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-controlled-open-select">Insured’s or Authorized Person’s Signature</InputLabel>
              <Select
                data-category={"recipient"}
                open={this.state.insOpen}
                onClose={this.handleCloseIns}
                onOpen={this.handleOpenIns}
                value={mainState["13"]}
                onChange={handleChangeDropDown}
                inputProps={{
                  name: '13',
                  id: 'demo-controlled-open-select',
                  category:"recipient"
                }}
              >
                <MenuItem value="">
                  <em>Please select ...</em>
                </MenuItem>
                <MenuItem value="SOF">Signature on File</MenuItem>
                <MenuItem value="No Signature on File">No Signature on File</MenuItem>
                <MenuItem value=""> Leave blank for legal signature</MenuItem>
              </Select>
            </FormControl>
          </form>
          < br />
          <form autoComplete="off">
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-controlled-open-select">Patient’s or Authorized Person’s Signature</InputLabel>
              <Select
                data-category={"recipient"}
                open={this.state.open}
                onClose={this.handleClose}
                onOpen={this.handleOpen}
                value={mainState["12_sign"]}
                onChange={handleChangeDropDown}
                inputProps={{
                  name: '12_sign',
                  id: 'demo-controlled-open-select',
                  category:"recipient"
                }}
              >
                <MenuItem value="">
                  <em>Please select ...</em>
                </MenuItem>
                <MenuItem value="SOF">Signature on File</MenuItem>
                <MenuItem value="No Signature on File">No Signature on File</MenuItem>
                <MenuItem value=""> Leave blank for legal signature</MenuItem>
              </Select>
            </FormControl>
          </form>

          < br />
          <DatePicker
            hintText={page8[1].label}
            value={getformatedDate(page8[1].yyyy, page8[1].mm, page8[1].dd, page8[1].formatDate )}
            onChange={handleChangeDateSign}
            style={{width:757}}
          />
        </React.Fragment>

    )
   }
  }
  Signatures.propTypes = {
    classes: PropTypes.object.isRequired,
  };



export default withStyles(styles)(Signatures)
