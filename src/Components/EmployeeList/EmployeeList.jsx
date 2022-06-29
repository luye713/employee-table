import { useState } from "react";
import EmployeeListItem from "../EmployeeListItem/EmployeeListItem";
import AddEmployee from "../AddEmployee/AddEmployee";
import employeeData from "../../mock-employees.json";

export default function EmployeeList() {
  const [employees, setEmployees] = useState(employeeData.employees);

  function deleteOne(index) {
    let newArray = [...employees];
    console.log(index);
    newArray.splice(index, 1);
    console.log(newArray);
    setEmployees(newArray);
  }

  function handleEdit(employee, index) {
    let newArray = [...employees];
    newArray[index] = employee;
    setEmployees(newArray);
  }

  function handleAdd(employee) {
    let newArray = [...employees, employee];
    setEmployees(newArray);
  }

  return (
    <div>
      {employees.map((employee, index) => (
        <EmployeeListItem
          employee={employee}
          deleteOne={deleteOne}
          index={index}
          handleEdit={handleEdit}
        />
      ))}
      <AddEmployee handleAdd={handleAdd}/>
    </div>
  );
}
