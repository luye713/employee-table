export default function EmployeeListItem(props){
    return (
        <div>
            <p>{props.firstName}</p>
            <p>{props.lastName}</p>
            <p>${props.salary.toLocaleString()}</p>
            <button>Edit</button>
            <button onClick={() => props.deleteOne(props.employee)}>Delete</button>
        </div>
    )
}