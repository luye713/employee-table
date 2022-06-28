import { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import CategoryList from './Components/CategoryList/CategoryList';
import EmployeeList from './Components/EmployeeList/EmployeeList';
import AddEmployee from './Components/AddEmployee/AddEmployee';
import employeeData from './mock-employees.json';

export default function App(props){
  const [employees, setEmployees] = useState([])

  function deleteOne(employee){
    setEmployees(employees.filter((e) => e != employee))
  }

  useEffect( () => {
     setEmployees(employeeData.employees)
  }, [])

    return (
      <div className="App">
        <Header />
        <CategoryList />
        <EmployeeList employees={employees} deleteOne={deleteOne}/>
        <AddEmployee />
      </div>
    );
}

