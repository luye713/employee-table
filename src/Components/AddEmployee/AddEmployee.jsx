import { useState } from "react";

export default function AddEmployee(props) {
  const [isAdding, setIsAdding] = useState(false);
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    salary: 0,
  });

  const submitForm = (e) => {
    e.preventDefault();
    props.handleAdd(employee);
    setIsAdding(false);
  };

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
            required
          />
          <input
            onChange={(event) =>
              setEmployee({ ...employee, lastName: event.target.value })
            }
            name="lastName"
            type="text"
            placeholder={employee.lastName}
            required
          />
          <input
            onChange={(event) =>
              setEmployee({ ...employee, salary: event.target.value })
            }
            name="salary"
            type="number"
            placeholder={employee.salary}
            required
          />
          <button type="submit">Submit</button>
        </form>
      ) : null}
      <button onClick={() => setIsAdding(!isAdding)}>
        {isAdding ? "Cancel" : "Add Employee"}
      </button>
    </div>
  );
}
