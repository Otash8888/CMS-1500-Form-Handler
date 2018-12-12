import React from 'react'
import { Form, Input } from 'semantic-ui-react'
// import testChildComponent   from './testChildComponent'

class PaperForm extends React.Component {
  state = {


  }
  handlerChange = (e) => {
    let key = [e.target.name]
    this.setState({
      key:e.target.value
    })
    console.log(this.state);
  }
  render() {
    return (
      <div>
      <h2>CM 1500 PaperForm</h2>
      <form>


         <div className="checkboxes1">
          <label> 1. </label>
          <input type="checkbox" name="medicare" value="MEDICARE" onChange={this.handlerChange} value={this.state.medicare}/> MEDICARE
          <input type="checkbox" name="medicaid" value="MEDICAID" onChange={this.handlerChange} value={this.state.medicaid}/> MEDICAID
          <input type="checkbox" name="tricape" value="TRICAPE" onChange={this.handlerChange} value={this.state.tricape}/> TRICAPE
          <input type="checkbox" name="champva" value="CHAMPVA" onChange={this.handlerChange} value={this.state.champva}/> CHAMPVA
          <input type="checkbox" name="grouphealthplan" value="GROUPHEALTHPLAN" onChange={this.handlerChange} value={this.state.grouphealthplan}/> GROUP HEALTH PLAN
          <input type="checkbox" name="fecaBlkLung" value="FECA BLK LUNG" onChange={this.handlerChange} value={this.state.fecaBlkLung}/> I FECA BLK LUNG
          <input type="checkbox" name="other" value="OTHER" onChange={this.handlerChange} value={this.state.other}/> OTHER
        </div>
        <div>
          <label> PATIENT'S NAME (Last Name, First Name, Middle Initial) </label><br></br>
          <input type="text" name="firstName" onChange={this.handlerChange} value={this.state.firstName}/>
          <input type="text" name="lastName" onChange={this.handlerChange} value={this.state.lastName}/>

          <input type="text" name="mi" onChange={this.handlerChange} value={this.state.mi}/><br></br>
          <label> PATIENT'S ADDRESS (No., Street) </label>
          <input type="text" name="address" onChange={this.handlerChange} value={this.state.address}/><br></br>
          <label> CITY </label>
          <input type="text" name="city" onChange={this.handlerChange} value={this.state.city}/>
          <label> STATE </label>
          <input type="text" name="state" onChange={this.handlerChange} value={this.state.state}/><br></br>
          <label> ZIP CODE </label>
          <input type="text" name="zipCode" onChange={this.handlerChange} value={this.state.zipCode}/>
          <label> TELEPHONE </label>
          <input type="text" name="telephone" onChange={this.handlerChange} value={this.state.telephone}/><br></br>
          <label> OTHER INSURED'S NAME (Last Name, First Name, Middle Initial) </label><br></br>
          <input type="text" name="otherInsFirstName" onChange={this.handlerChange} value={this.state.otherInsFirstName}/>
          <input type="text" name="otherInsLastName" onChange={this.handlerChange} value={this.state.otherInsLastName}/>
          <input type="text" name="otherInsMi" onChange={this.handlerChange} value={this.state.otherInsMi}/><br></br>
          <label> a. OTHER INSURED'S POLICY OR GROUP NUMBER </label><br></br>
          <input type="text" name="othrPolNumber" onChange={this.handlerChange} value={this.state.othrPolNumber}/><br></br>
          <label> b. RESERVED FOR NUCC USE </label><br></br>
          <input type="text" name="bReserForN" onChange={this.handlerChange} value={this.state.bReserForN}/><br></br>
          <label> c. RESERVED FOR NUCC USE </label><br></br>
          <input type="text" name="cReserForN" onChange={this.handlerChange} value={this.state.cReserForN}/><br></br>
          <label> d. INSURANCE PLAN NAME OR PROGRAM NAME </label>
          <input type="text" name="insPlanName" onChange={this.handlerChange} value={this.state.insPlanName}/><br></br>
        </div>
        <div>
        <label> PATIENT'S BIRTH DATE </label>
          <input type="text" name="patientDOB" onChange={this.handlerChange} value={this.state.patientDOB}/><br></br>
        </div>
      </form>


      </div>
    )
    }
  }

export default PaperForm
