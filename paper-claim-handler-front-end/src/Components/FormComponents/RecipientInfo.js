import React from 'react'
import TextField from 'material-ui/TextField';
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import DatePicker from 'material-ui/DatePicker'
import { getFormInputData } from '../../dataLists.js'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';


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
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 700,
  },
});



const RecipientInfo = ({ classes, page1, mainState, handleChange, handleChangeDate, getformatedDate, handleOpenPatGender,handleClosePatGender, open, handleChangeDropDown  }) =>  {
    console.log("inside Rinfo render",open)
    return (
        <React.Fragment>
          <TextField
            hintText="Please type..."
            floatingLabelText={page1[0].label}
            onChange={handleChange}
            data-category={page1[0].category}
            defaultValue={mainState[`${page1[0].name}`]}
            name={page1[0].name}
            style={{width:700}}
            margin="normal"
          />
          < br />
          <TextField
            hintText="Please type..."
            floatingLabelText={page1[1].label}
            onChange={handleChange}
            data-category={page1[1].category}
            defaultValue={mainState[`${page1[1].name}`]}
            name={page1[1].name}
            style={{width:700}}
            margin="normal"
            type="boolean"
            autoFocus = {true}
            required = {true}

          />
          < br />
          <TextField
            hintText="Please type..."
            floatingLabelText={page1[2].label}
            onChange={handleChange}
            data-category={page1[2].category}
            defaultValue={mainState[`${page1[2].name}`]}
            name={page1[2].name}
            style={{width:700}}
            margin="normal"
          />
          < br />
          <form autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="demo-controlled-open-select">Gender</InputLabel>
            <Select
              data-category={"recipient"}
              open={open}
              onClose={handleClosePatGender}
              onOpen={handleOpenPatGender}
              value={mainState["3_sex"]}
              onChange={handleChangeDropDown}
              inputProps={{
                name: '3_sex',
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
          < br/ >
          <DatePicker
            hintText={page1[3].label}
            value={getformatedDate(page1[3].yyyy, page1[3].mm, page1[3].dd, page1[3].formatDate )}
            onChange={handleChangeDate}
            style={{width:757}}
          />

      </React.Fragment>
    )

  }
  RecipientInfo.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(RecipientInfo)
