//MedicalTreatmentPanel
import React from 'react';



function MedicalTreatmentPanel() {

  //code below is using 'useState' to assign initial state to variables.

  const [treatId, setTreatId]= React.useState ('');
  const [treatCourseId, setTreatCourseId] = React.useState ('');
  const [type, setType] = React.useState ('');
  const [category, setCategory] = React.useState ('');
  const [name, setName] =React.useState ('');
  const [startDate, setStartDate] = React.useState ('');

//below is to get treatId when needed
  const display = (e) => {getTreatId()};

    return (
  //data entry fields are created here with variables assigned to them and onchange handler passes the value of the input under e.target.value 
      <div>
  
        <input placeholder = "treatId" value = {treatId} onChange = {e => setTreatId (e.target.value) }/>
        <input placeholder = "treatCourseId" value = {treatCourseId} onChange = {e => setTreatCourseId (e.target.value)} />
        <input placeholder = "type" value = {type} onChange = {e=> setType (e.target.value)}/>
        <input placeholder = "category" value ={category} onChange = {e=> setCategory (e.target.value)}/>
        <input placeholder = "name" value ={name} onChange = {e=> setName (e.target.value)}/>
        <input placeholder = "startDate" value ={startDate} onChange = {e=> setStartDate (e.target.value)} />
        
      
       <button onClick ={e => display()}> display records</button>
      </div> 
// button should display treatId records

    );
  
  }

  export default MedicalTreatmentPanel;
  
 
  

