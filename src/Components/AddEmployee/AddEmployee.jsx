import "./AddEmployee.css";
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
    <div className="add-employee-wrapper">
      {isAdding ? (
        <form onSubmit={(e) => submitForm(e)}>
          <input
            onChange={(event) =>
              setEmployee({ ...employee, firstName: event.target.value })
            }
            type="text"
            required
          />
          <input
            onChange={(event) =>
              setEmployee({ ...employee, lastName: event.target.value })
            }
            type="text"
            required
          />
          <input
            onChange={(event) =>
              setEmployee({ ...employee, salary: event.target.value })
            }
            type="number"
            required
          />
          <button type="submit" className="btn primary">
            Submit
          </button>
        </form>
      ) : null}
      <button
        onClick={() => setIsAdding(!isAdding)}
        className={isAdding ? "btn secondary" : "btn primary"}
      >
        {isAdding ? "Cancel" : "Add Employee"}
      </button>
    </div>
  );
}
