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


class ClaimInfoContinue extends React.Component {
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
    const { classes, page7, handleChange, handleChangeDropDown,  mainState } = this.props
    console.log("inside Raddress render")
    // debugger

    return (
        <React.Fragment>
          {page7.map(dataObj =>
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
        </React.Fragment>

    )
   }
  }
  ClaimInfoContinue.propTypes = {
    classes: PropTypes.object.isRequired,
  };



export default withStyles(styles)(ClaimInfoContinue)
