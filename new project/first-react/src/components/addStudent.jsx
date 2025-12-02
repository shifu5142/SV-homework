import React from 'react'
import { useState } from 'react'
import students from '../student';
///////////////////////////////////////////////////////////
function AddStudent() {
  return (
    <div class="add-student-form">
  <h2>Add Student</h2>
  <form id="studentForm">
    <div class="form-group">
      <label for="name">Student Name</label>
      <input type="text" id="name" name="name" placeholder="Enter student name" required/>
    </div>

    <div class="form-group">
      <label for="age">Age</label>
      <input type="number" id="age" name="age" placeholder="Enter age" required/>
    </div>

    <div class="form-group">
      <label for="grade">Grade</label>
      <input type="number" id="grade" name="grade" placeholder="Enter grade" required/>
    </div>

    <button type="submit" onClick={()=>{
      const userName=document.getElementById('name').value;
      const userAge=document.getElementById('age').value;
      const userGrade=document.getElementById('grade').value;
      // if(students.find((value)=>value===userName)){
      //   alert(`the student ${userName} already exist`)
      // }
      // else{
      //   addCount(
      //   <tr class="student-row">
      //   <td>{userName}</td>
      //   <td>{userAge}</td>
      //   <td>{userGrade}</td>
      // </tr>)
      // }
      // addCount()
    }}>Add Student</button>
  </form>
</div>

  )
}

export default AddStudent