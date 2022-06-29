import { useEffect, useState } from "react";

export default function EmployeeListItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    salary: "",
  });

  function submitForm(e) {
    e.preventDefault();
    props.handleEdit(employee, props.index);
    setIsEditing(false);
  }

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
      ) : (
        <div>
          <p>{employee.firstName}</p>
          <p>{employee.lastName}</p>
          <p>${employee.salary.toLocaleString()}</p>
        </div>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
      <button onClick={() => props.deleteOne(props.index)}>Delete</button>
    </div>
  );
}
