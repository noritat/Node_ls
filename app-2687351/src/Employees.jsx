import React, { useState } from "react";

const Employees = () => {
  const [employees, setEmployees] = useState([
    {
        id:1,
        fullname:'Nora Estrada',
        designation:'Alumno',
        gender:'Female',
        teamname:'TeamA'
    },
    {
        id:2,
        fullname:'Maria Cordoba',
        designation:'Alumno',
        gender:'Female',
        teamname:'TeamB'
    },    
    {
        id:3,
        fullname:'Leidy Parra',
        designation:'Alumno',
        gender:'Female',
        teamname:'TeamA'

    },   
     {
        id:4,
        fullname:'Luis perez',
        designation:'Alumno',
        gender:'Male',
        teamname:'TeamB'

    },   
     {
        id:5,
        fullname:'Pepe Alvarez',
        designation:'Alumno',
        gender:'Male',
        teamname:'TeamA'

    },   
     {
        id:6,
        fullname:'Manuela Moreno',
        designation:'Alumno',
        gender:'Female',
        teamname:'TeamB'

    },   
     {
        id:7,
        fullname:'Erlin Cordoba',
        designation:'Alumno',
        gender:'Male',
        teamname:'TeamA'

    },    
    {
        id:8,
        fullname:'Luz Damaris',
        designation:'Alumno',
        gender:'Female',
        teamname:'TeamB'

    },    
    {
        id:9,
        fullname:'Fabian Chala',
        designation:'Alumno',
        gender:'Male',
        teamname:'TeambA'

    }, 
    {
        id:10,
        fullname:'Sandra Cordoba',
        designation:'Alumno',
        gender:'Female',
        teamname:'TeamB'

    },
    {
        id:11,
        fullname:'Adrian Chala',
        designation:'Alumno',
        gender:'Male',
        teamname:'TeamA'

    },
    {
        id:12,
        fullname:'Luis Rodrigez',
        designation:'Alumno',
        gender:'Male',
        teamname:'TeamB'

    }
  ]);

  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Designation</th>
            <th>Gender</th>
            <th>Team Name</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.fullname}</td>
              <td>{employee.designation}</td>
              <td>{employee.gender}</td>
              <td>{employee.teamname}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Employees;
