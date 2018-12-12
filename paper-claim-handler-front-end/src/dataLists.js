import * as jsPDF from 'jspdf'
import imgData from './imgData'

export function handleToPdf(state) {
  let doc = new jsPDF()
  doc.addImage(imgData, 'JPEG',0,0,210,297)
  doc.setFontSize(12);
  doc.setTextColor(92, 76, 76);

  const fullName = `${state[`2_lname`]},  ${state[`2_fname`]}, ${state[`2_mi`]}`
  doc.text(9, 52, fullName);
  doc.text(9, 61, state[`5_street`]);
  doc.text(9, 70, state[`5_city`]);
  doc.text(70, 70, state[`5_state`]);
  doc.text(9, 80, state[`5_zip_code`]);
  doc.text(41.7, 80, state[`5_tel`]);

  const fullNameOtherIns = `${state[`9_lname`]},  ${state[`9_fname`]}, ${state[`9_mi`]}`
  doc.text(9, 88, fullNameOtherIns);
  doc.text(9, 97, state[`9_a`])
  doc.text(9, 125, state[`9_d`])

  let insurance = state[`1`]
  switch (insurance) {
    case "medicaid":
       doc.text(24, 44, "X");
       break;
    case "medicare":
       doc.text(7.4, 44, "X");
       break;
    case "tricare":
        doc.text(41.5, 44, "X");
        break;
    case "champva":
        doc.text(63.8, 44, "X");
        break;
    case "grouphp":
       doc.text(81, 44, "X");
       break;
    case "feca":
        doc.text(101, 44, "X");
        break;
    case "other":
        doc.text(115.5, 44, "X");
        break;
  }

  let gender = state[`3_sex`]
  switch (gender) {
    case "m":
       doc.text(108, 53, "X");
       break;
    case "f":
       doc.text(120.3, 53, "X");
       break;
  }

// patients dob
doc.text(81, 53.5, `${state[`3_mm`]}`);
doc.text(89.3, 53.5, `${state[`3_dd`]}`);
doc.text(95.5, 53.5, `${state[`3_yy`]}`);
doc.text(130, 44, state[`1_a`]);

const fullNameInsured = `${state[`4_lname`]},  ${state[`4_fname`]}, ${state[`4_mi`]}`
doc.text(130, 53, fullNameInsured);
doc.text(130, 62, state[`7_street`]);

let relationship = state[`6`]
switch (relationship) {
  case "self":
     doc.text(86, 62, "X");
     break;
  case "spouse":
     doc.text(98.4, 62, "X");
     break;
  case "child":
      doc.text(108.3, 62, "X");
      break;
  case "other":
      doc.text(120.6, 62, "X");
      break;

}
doc.text(130, 70, state[`7_city`]);
doc.text(187, 70, state[`7_state`]);
doc.text(130, 80, state[`7_zip_code`]);
doc.text(165.5, 80, state[`7_tel`]);
doc.text(130, 88, state[`11`]);
// insured dob
doc.text(137, 98.5, `${state[`11_a_mm`]}`);
doc.text(144, 98.5, `${state[`11_a_dd`]}`);//8.3
doc.text(150, 98.5, `${state[`11_a_yy`]}`);//6.2

let genderIns = state[`11_a_sex`]
switch (genderIns) {
  case "m":
     doc.text(172.5, 97.7, "X");
     break;
  case "f":
     doc.text(190, 98, "X");
     break;
}

doc.text(128.3, 107, "Y4");
doc.text(135, 107, state[`11_b_num`]);
doc.text(130, 116, state[`11_c`]);

let anotherPlan = state[`11_d`]
switch (anotherPlan) {
  case "yes":
     doc.text(133, 125, "X");
     break;
  case "no":
     doc.text(145.4, 125, "X")
     break;
}

let employment = state[`10_a`]
switch (employment) {
  case "yes":
     doc.text(91.2, 98.2, "X");
     break;
  case "no":
     doc.text(106, 98, "X")
     break;
}

let autoAccident = state[`10_b`]
switch (autoAccident) {
  case "yes":
     doc.text(91.2, 107, "X")
     break;
  case "no":
     doc.text(106, 107, "X")
     break;
}

let otherAccident = state[`10_c`]
switch (otherAccident) {
  case "yes":
     doc.text(91.2, 116, "X")
     break;
  case "no":
     doc.text(106, 116, "X")
     break;
}

doc.text(115.4, 107, state[`10_b_state`])
doc.text(80, 125, state[`10_d`])
doc.text(22, 141.5, state[`12_sign`])

let dateSign = `${state[`12_mm`]} - ${state[`12_dd`]}- ${state[`12_yy`]}`
doc.text(95, 141.5, dateSign)
doc.text(143.3, 141.5, state[`13`])

doc.save('test.pdf');





}

export function usStates () {
  return [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "American Samoa",
        "abbreviation": "AS"
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ"
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR"
    },
    {
        "name": "California",
        "abbreviation": "CA"
    },
    {
        "name": "Colorado",
        "abbreviation": "CO"
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT"
    },
    {
        "name": "Delaware",
        "abbreviation": "DE"
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC"
    },
    {
        "name": "Federated States Of Micronesia",
        "abbreviation": "FM"
    },
    {
        "name": "Florida",
        "abbreviation": "FL"
    },
    {
        "name": "Georgia",
        "abbreviation": "GA"
    },
    {
        "name": "Guam",
        "abbreviation": "GU"
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI"
    },
    {
        "name": "Idaho",
        "abbreviation": "ID"
    },
    {
        "name": "Illinois",
        "abbreviation": "IL"
    },
    {
        "name": "Indiana",
        "abbreviation": "IN"
    },
    {
        "name": "Iowa",
        "abbreviation": "IA"
    },
    {
        "name": "Kansas",
        "abbreviation": "KS"
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY"
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA"
    },
    {
        "name": "Maine",
        "abbreviation": "ME"
    },
    {
        "name": "Marshall Islands",
        "abbreviation": "MH"
    },
    {
        "name": "Maryland",
        "abbreviation": "MD"
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA"
    },
    {
        "name": "Michigan",
        "abbreviation": "MI"
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN"
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS"
    },
    {
        "name": "Missouri",
        "abbreviation": "MO"
    },
    {
        "name": "Montana",
        "abbreviation": "MT"
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE"
    },
    {
        "name": "Nevada",
        "abbreviation": "NV"
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH"
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ"
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM"
    },
    {
        "name": "New York",
        "abbreviation": "NY"
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC"
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND"
    },
    {
        "name": "Northern Mariana Islands",
        "abbreviation": "MP"
    },
    {
        "name": "Ohio",
        "abbreviation": "OH"
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK"
    },
    {
        "name": "Oregon",
        "abbreviation": "OR"
    },
    {
        "name": "Palau",
        "abbreviation": "PW"
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },
    {
        "name": "Puerto Rico",
        "abbreviation": "PR"
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI"
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC"
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD"
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN"
    },
    {
        "name": "Texas",
        "abbreviation": "TX"
    },
    {
        "name": "Utah",
        "abbreviation": "UT"
    },
    {
        "name": "Vermont",
        "abbreviation": "VT"
    },
    {
        "name": "Virgin Islands",
        "abbreviation": "VI"
    },
    {
        "name": "Virginia",
        "abbreviation": "VA"
    },
    {
        "name": "Washington",
        "abbreviation": "WA"
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV"
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
    }
]
}

export function getFormInputData (){
 return (
   {
      "page1": [
        {
          label:"Patient's last name",
          name:"2_lname",
          category:"recipient",
          inputType:"text"
        },
        {
          label:"Patient's first name",
          name:"2_fname",
          category:"recipient"
        },
        {
          label:"Patient's middle initial",
          name:"2_mi",
          category:"recipient"
        },
        {
          label:"Patient's Date of Birth",
          formatDate: function (yyyy,mm,dd){let d = new     Date(`${yyyy}-${mm+1}-${dd}`)
          return d},yyyy:"3_yy",mm:"3_mm",dd:"3_dd"
        },
        {
          label:"Gender",
          name:"3_sex",
          value1:"m",
          value2:"f",
          category:"recipient",
          inputType:"checkbox"
        },
      ],

      "page2": [
        {
          label:"Patient's street address",
          name:"5_street",
          category:"recipient",
          inputType:"text"
        },
        {
          label:"City",
          name:"5_city",
          category:"recipient",
          inputType:"text"
        },
        {
          label:"Zip Code",
          name:"5_zip_code",
          category:"recipient",
          inputType:"text"
        },
        {
          label:"Telephone",
          name:"5_tel",
          category:"recipient",
          inputType:"text"
        },
        {
          label:"State",
          name:"5_state",
          category:"recipient",
          inputType:"dropbox"
        }
      ],

      "page3":[
        {
          title:"Is Patient’s Condition Related To:",
          label:"Employment? (Current or Privious)",
          name:"10_a",
          value1:"yes",
          value2:"no",
          category:"recipient",
          inputType:"checkbox"
        },
        {
          label:"Auto accident?",
          name:"10_b",
          value1:"Yes",
          value2:"No",
          value3:"Place (State)",
          nameSt:"10_b_state",
          category:"recipient",
          inputType:"checkbox"
        },
        {
          label:"Other accidents?",
          name:"10_c",
          value1:"Yes",
          value2:"No",
          category:"recipient",
          inputType:"checkbox"
        },
        {
          label:"Claim Codes (Designated by NUCC)?",
          name:"10_d",
          category:"recipient",
          inputType:"text"
        },
        {
          label:"Indicate the type of health insurance coverage applicable to this claim",
          name:"1",
          value1:"medicare",
          value2:"medicaid",
          value3:"tricare",
          value4:"champva",
          value5:"grouphp",
          value6:"feca",
          value7:"blcklung",
          value8:"other",
          category:"recipient",
          inputType:"dropdown"
        }
      ],

      "page4": [
        {
          label:"Patient Relationship to Insured",
          name:"6",
          value1:"self",
          value2:"spouse",
          value3:"child",
          value4:"other",
          category:"recipient",
          inputType:"checkbox"
        },
        {
          label:"Insured's last name",
          name:"4_lname",
          category:"recipient",
          inputType:"text"
        },
        {
          label:"Insured's first name",
          name:"4_fname",
          category:"recipient",
          inputType:"text"
        },
        {
          label:"Insured's middle initial",
          name:"4_mi",
          category:"recipient",
          inputType:"text"
        },
        {
          label:"Insured's Date of Birth",
          formatDate:
            function (yyyy,mm,dd){
              let d = new
              Date(`${yyyy}-${mm+1}-${dd}`)
              return d
            },
          yyyy:"11_a_yy",
          mm:"11_a_mm",
          dd:"11_a_dd"
        },
        {
          label:"Gender",
          name:"11_a_sex",
          value1:"m",
          value2:"f",
          category:"recipient",
          inputType:"checkbox"
        },
      ],

      "page5": [
        {
          label:"Insured's street address",
          name:"7_street",
          category:"recipient",
          inputType:"text"
        },
        {
          label:"City",
          name:"7_city",
          category:"recipient",
          inputType:"text"
        },
        {
          label:"Zip Code",
          name:"7_zip_code",
          category:"recipient",
          inputType:"text"
        },
        {
          label:"Telephone",
          name:"7_tel",
          category:"recipient",
          inputType:"text"
        },
        {
          label:"State",
          name:"7_state",
          category:"recipient",
          inputType:"dropbox"
        }
      ],
      "page6": [

        {
          label:"Insured's ID number",
          name:"1_a",
          category:"recipient",
          inputType:"text"
        },
        {
          label:"Insurance Plan Name or Program Name",
          name:"11_c",
          category:"recipient",
          inputType:"text"
        },
        {
          label:"Insured's policy group or FECA number",
          name:"11",
          category:"recipient",
          inputType:"text"
        },
        {
          label:"Other claim ID (Designated by NUCC)",
          name:"11_b_num",
          category:"recipient",
          inputType:"text"
        },
        {
          label:"Is there another Health Benefit Plan?",
          name:"11_d",
          value1:"Yes",
          value2:"No",
          category:"recipient",
          inputType:"checkbox"
        },
        {
          label:"Other claim ID qualifier",
          name:"11_b_idf",
          category:"recipient",
          inputType:"dropdown"
        },
      ],
      "page7": [
        {
          label:"Other insured's last name",
          name:"9_lname",
          category:"recipient",
          inputType:"text"
        },
        {
          label:"Other insured's first name",
          name:"9_fname",
          category:"recipient",
          inputType:"text"
        },
        {
          label:"Other insured's middle initial",
          name:"9_mi",
          category:"recipient",
          inputType:"text"
        },
        {
          label:"Other insured's policy or group number",
          name:"9_a",
          category:"recipient",
          inputType:"text"
        },
        {
          label:"Insurance plan name or program name (Other insured's)",
          name:"9_d",
          category:"recipient",
          inputType:"text"
        },
      ],
      "page8": [
        {
          label:"Patient’s or Authorized person’s signature",
          name:"12",
          category:"recipient",
          inputType:"text"
        },
        {
          label:"Patient’s or Authorized person’s signature date",
          formatDate:
            function (yyyy,mm,dd){
              let d = new
              Date(`${yyyy}-${mm+1}-${dd}`)
              return d
            },
            yyyy:"12_yy",
            mm:"12_mm",
            dd:"12_dd"
        },
        {
          label:"Insured’s or authorized person’s signature",
          name:"13",
          category:"recipient",
          inputType:"text"
        },
      ],
      "claim": [
        {
          label:"Date of Current Illness, Injury, or Pregnancy (LMP)",
          formatDate:
            function (yyyy,mm,dd){
              let d = new
              Date(`${yyyy}-${mm+1}-${dd}`)
              return d
            },
          yyyy:"14_yy",
          mm:"14_mm",
          dd:"14_dd"
        },
        {
          label:"Choose the applicable qualifier to identify which date is being reported.",
          name:"14_qual",
          valu1:{text:"Onset of Current Symptoms or Illness","qual":"431"},
          valu2:{text:"Last Menstrual Period","qual":"484"},
          category:"claim",
          inputType:"dropdown"
        },
        {
          label:"Other Date",
          formatDate:
            function (yyyy,mm,dd){
              let d = new
              Date(`${yyyy}-${mm+1}-${dd}`)
              return d
            },
          yyyy:"15_yy",
          mm:"15_mm",
          dd:"15_dd"
        },
        {
          label:"Choose the applicable qualifier to identify which date is being reported.",
          name:"15_qual",
          value1:{text:"Initial Treatment",
                 qual:"454"},
          value2:{text:"Latest Visit or Consultation",
                qual:"304"},
          value3:{text:"Acute Manifestation of a Chronic Condition",
                 qual:"453"},
          value4:{text:"Accident",
                qual:"439"},
          value5:{text:"Last X-ray",
                 qual:"455"},
          value6:{text:"Prescription",
                qual:"471"},
          value7:{text:"Report Start (Assumed Care Date)",
                 qual:"090"},
          value8:{text:"Report End (Relinquished Care Date)",
                qual:"091"},
          value9:{text:"First Visit or Consultation",
                  qual:"444"},
          category:"claim",
          inputType:"dropdown"
        },
        {
          title:"Dates Patient Unable to Work in Current Occupation",
          label:"From Date",
          formatDate:
            function (yyyy,mm,dd){
              let d = new
              Date(`${yyyy}-${mm+1}-${dd}`)
              return d
            },
          yyyy:"16_from_yy",
          mm:"16_from_mm",
          dd:"16_from_dd"
        },
        {
          label:"To Date",
          formatDate:
            function (yyyy,mm,dd){
              let d = new
              Date(`${yyyy}-${mm+1}-${dd}`)
              return d
            },
          yyyy:"16_to_yy",
          mm:"16_to_mm",
          dd:"16_to_dd"
        },
        { title:"Name of Referring Provider or Other Source",
          label:"Last Name",
          name:"17_lname",
          category:"claim",
          inputType:"text"
        },
        {
          label:"First Name",
          name:"17_fname",
          category:"claim"
        },
        {
          label:"Middle Initial",
          name:"17_mi",
          category:"claim"
        },
        {
          label:"Credentials",
          name:"17_crd",
          category:"claim"
        },
        {
          label:"Choose the applicable qualifier to identify which provider is being reported.",
          name:"17_qual",
          value1:{text:"Referring Provider",
                 qual:"DN"},
          value2:{text:"Ordering Provider",
                qual:"DK"},
          value3:{text:"Supervising Provider",
                 qual:"DQ"},
          category:"claim",
          inputType:"dropdown"
        },
        {
          label:"Other ID Number qualifier",
          name:"17_a_qual",
          value1:{
                text:"State License Number",
                qual:"0B"
                },
          value2:{text:"Provider UPIN Number",
                  qual:"1G"},
          value3:{text:"Provider Commercial Number",
                 qual:"G2"},
          value3:{text:"Location Number (This qualifier is used for Supervising Provider only.)",
                  qual:"LU"},
          category:"claim",
          inputType:"dropdown"
        },
        {
          label:"Other ID Number",
          name:"17_a",
          category:"claim"
        },
        {
          label:"NPI number",
          name:"17_b",
          category:"claim"
        },
        {
          title:"Hospitalization Dates Related to Current Services",
          label:"From Date",
          formatDate:
            function (yyyy,mm,dd){
              let d = new
              Date(`${yyyy}-${mm+1}-${dd}`)
              return d
            },
          yyyy:"18_from_yy",
          mm:"18_from_mm",
          dd:"18_from_dd"
        },
        {
          label:"To Date",
          formatDate:
            function (yyyy,mm,dd){
              let d = new
              Date(`${yyyy}-${mm+1}-${dd}`)
              return d
            },
          yyyy:"18_to_yy",
          mm:"18_to_mm",
          dd:"18_to_dd"
        },
        {
          label:"Additional Claim Information (Designated by NUCC)",
          name:"19",
          category:"claim"
        },
        {
          label:"Outside Lab?",
          name:"20",
          value1:"Yes",
          value2:"No",
          category:"claim",
          inputType:"checkbox"
        },
        {
          label:"Charges",
          name:"20_charg",
          category:"claim",
          inputType:"text"
        },
        {
          label:"Choose the applicable ICD indicator to identify which version of ICD codes is being reported.",
          name:"21_icd",
          value1:{
                text:"ICD-10-CM",
                qual:"0"
                },
          value2:{
                text:"ICD-9-CM",
                qual:"9"
                },
          category:"claim",
          inputType:"checkbox"
        },

        {
          label:"Diagnosis or Nature of Illness or Injury",
          name1:"21_a",
          name2:"21_b",
          name3:"21_c",
          name4:"21_d",
          name5:"21_e",
          name6:"21_f",
          name7:"21_g",
          name8:"21_h",
          name9:"21_i",
          name10:"21_j",
          name11:"21_k",
          name12:"21_l",
          category:"claim",
          inputType:"text"
        },
        {
          label:"Resubmission Code",
          name:"22_rcode",
          value1:{
                text:"Replacement of prior claim",
                qual:"7"
                },
          value2:{
                text:"Void/cancel of prior claim",
                qual:"8"
                },
          category:"claim",
          inputType:"checkbox"
        },
        {
          label:"Original Reference Number",
          name:"22_orgref",
          category:"claim",
          inputType:"text"
        },
        {
          label:"Prior Authorization Number",
          name:"23",
          category:"claim",
          inputType:"text"
        },
      ],
    }
 )
}
