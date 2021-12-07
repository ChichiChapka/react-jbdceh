//MedicalTreatmentPanel
import React from 'react';





function MedicalTreatmentPanel() {
  const [treatId, setTreatId]= React.useState ('');
  
    return (

      <div>
       
        <input placeholder = "treatId"/>
        <input placeholder = "treatCourseId" />
        <input placeholder = "type" />
        <input placeholder = "category"/>
        <input placeholder = "name"/>
        <input placeholder = "startDate" />
        
      </div>
      
    );
    
  }

  export default MedicalTreatmentPanel;
  
 
  

