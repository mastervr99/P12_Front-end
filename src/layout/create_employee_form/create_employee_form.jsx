import './create_employee_form.scss'
import React, { useState } from 'react';
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css'; 
import Select from 'react-select'

const states = [
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
];
function CreateEmployeeForm({ onSave }) {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: 'Sales'
  });
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleDateChange = (date, field) => { 
    setFormValues({ ...formValues, [field]: date }); 
  }; 
  const handleSelectChange = (selectedOption, field) => { 
    setFormValues({ ...formValues, [field]: selectedOption.value }); 
  };

  
  const saveEmployee = () => {
    console.log(formValues)
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(formValues);
    localStorage.setItem('employees', JSON.stringify(employees));
    onSave();
  };



  return (
    <form id="create-employee">
      <label htmlFor="first-name">First Name</label>
      <input type="text" id="firstName" value={formValues.firstName} onChange={handleChange} />

      <label htmlFor="last-name">Last Name</label>
      <input type="text" id="lastName" value={formValues.lastName} onChange={handleChange} />

      <label htmlFor="date-of-birth">Date of Birth</label>
      <DatePicker 
        selected={formValues.dateOfBirth} 
        onChange={(date) => handleDateChange(date, 'dateOfBirth')} 
        dateFormat="MM/dd/yyyy" 
      />
      
      <label htmlFor="start-date">Start Date</label>
      <DatePicker 
        selected={formValues.startDate} 
        onChange={(date) => handleDateChange(date, 'startDate')} 
        dateFormat="MM/dd/yyyy" 
      />

      <fieldset className="address">
        <legend>Address</legend>

        <label htmlFor="street">Street</label>
        <input id="street" type="text" value={formValues.street} onChange={handleChange} />

        <label htmlFor="city">City</label>
        <input id="city" type="text" value={formValues.city} onChange={handleChange} />

        <label htmlFor="state">State</label>
        <select id="state" value={formValues.state} onChange={handleChange}> 
          {states.map((state) => ( 
            <option key={state.abbreviation} value={state.abbreviation}> 
              {state.name} 
            </option> 
          ))} 
        </select>

        <label htmlFor="zip-code">Zip Code</label>
        <input id="zipCode" type="number" value={formValues.zipCode} onChange={handleChange} />
      </fieldset>

      <label htmlFor="department">Department</label>
      <select id="department" value={formValues.department} onChange={handleChange}>
        <option>Sales</option>
        <option>Marketing</option>
        <option>Engineering</option>
        <option>Human Resources</option>
        <option>Legal</option>
      </select>

      <button type="button" onClick={saveEmployee}>Save</button>
    </form>
  );
}

export default CreateEmployeeForm;
