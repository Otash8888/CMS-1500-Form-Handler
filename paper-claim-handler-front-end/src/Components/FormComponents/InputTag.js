import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Input, Label, Divider } from 'semantic-ui-react'
import TextField from 'material-ui/TextField';

const InputTag = ({ dataObj, handleChange, state }) => {

const stateKey = dataObj.category.name
  console.log(state.category);
    return (
      <React.Fragment>
        <TextField
          hintText="Please type..."
          floatingLabelText={dataObj.label}
          onChange={handleChange}
          defaultValue={state.stateKey}
          data-category={dataObj.category}
          name={dataObj.name}
        />
        <br />
      </React.Fragment>
    )

  }

export default InputTag
