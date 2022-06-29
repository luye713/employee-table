import "./EmployeeListItem.css";
import { useEffect, useState } from "react";

export default function EmployeeListItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    salary: 0,
  });

  const submitForm = (e) => {
    e.preventDefault();
    props.handleEdit(employee, props.index);
    setIsEditing(false);
  };

  useEffect(() => {
    setEmployee({
      ...employee,
      firstName: props.employee.firstName,
      lastName: props.employee.lastName,
      salary: props.employee.salary,
    });
  }, [props.employee]);

  return (
    <div className="employee-wrapper">
      {isEditing ? (
        <form onSubmit={(e) => submitForm(e)}>
          <input
            onChange={(event) =>
              setEmployee({ ...employee, firstName: event.target.value })
            }
            type="text"
            value={employee.firstName}
            required
          />
          <input
            onChange={(event) =>
              setEmployee({ ...employee, lastName: event.target.value })
            }
            type="text"
            value={employee.lastName}
            required
          />
          <input
            onChange={(event) =>
              setEmployee({ ...employee, salary: event.target.value })
            }
            type="number"
            value={employee.salary}
            required
          />
          <button type="submit" className="btn primary">
            Submit
          </button>
        </form>
      ) : (
        <div className="employee">
          <p>{employee.firstName}</p>
          <p>{employee.lastName}</p>
          <p>
            {Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(employee.salary)}
          </p>
        </div>
      )}
      <button
        onClick={() => setIsEditing(!isEditing)}
        className="btn secondary"
      >
        {isEditing ? "Cancel" : "Edit"}
      </button>
      <button
        onClick={() => props.deleteOne(props.index)}
        className="btn tertiary"
      >
        Delete
      </button>
    </div>
  );
}
