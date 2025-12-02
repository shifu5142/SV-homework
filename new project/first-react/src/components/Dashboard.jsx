import React from 'react'
import students from '../student'

function Dashboard() {
   
  return (
    <section class="student-section">
    <table>
        
      <caption class="table-caption">Student List</caption>
      <tr class="header-row">
        <th>Name</th>
        <th>Age</th>
        <th>Grade</th>
      </tr>
      
      {students.map((data)=>{
        return(
        <tr class="student-row">
        <td>{data.name}</td>
        <td>{data.age}</td>
        <td>{data.grade}</td>
      </tr>
        )
      })}
    </table>
  </section>
  )
}

export default Dashboard