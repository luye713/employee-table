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
    <div>
      {isEditing ? (
        <form onSubmit={(e) => submitForm(e)}>
          <input
            onChange={(event) =>
              setEmployee({ ...employee, firstName: event.target.value })
            }
            name="firstName"
            type="text"
            value={employee.firstName}
            required
          />
          <input
            onChange={(event) =>
              setEmployee({ ...employee, lastName: event.target.value })
            }
            name="lastName"
            type="text"
            value={employee.lastName}
            required
          />
          <input
            onChange={(event) =>
              setEmployee({ ...employee, salary: event.target.value })
            }
            name="salary"
            type="number"
            value={employee.salary}
            required
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
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
      <button onClick={() => setIsEditing(!isEditing)}>
        {" "}
        {isEditing ? "Cancel" : "Edit"}
      </button>
      <button onClick={() => props.deleteOne(props.index)}>Delete</button>
    </div>
  );
}
