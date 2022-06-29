import { useState } from "react";

export default function AddEmployee(props) {
  const [isAdding, setIsAdding] = useState(false);
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    salary: "",
  });

  function submitForm(e) {
    e.preventDefault();
    props.handleAdd(employee);
    setIsAdding(false);
  }

  return (
    <div>
      {isAdding ? (
        <form onSubmit={(e) => submitForm(e)}>
          <input
            onChange={(event) =>
              setEmployee({ ...employee, firstName: event.target.value })
            }
            name="firstName"
            type="text"
            placeholder={employee.firstName}
          />
          <input
            onChange={(event) =>
              setEmployee({ ...employee, lastName: event.target.value })
            }
            name="lastName"
            type="text"
            placeholder={employee.lastName}
          />
          <input
            onChange={(event) =>
              setEmployee({ ...employee, salary: event.target.value })
            }
            name="salary"
            type="text"
            placeholder={employee.salary}
          />
          <button type="submit">Submit</button>
        </form>
      ) : null}
      <button onClick={() => setIsAdding(true)}>Add Employee</button>
    </div>
  );
}
