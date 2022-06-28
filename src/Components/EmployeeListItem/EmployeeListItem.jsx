export default function EmployeeListItem(props){
    return (
        <div>
            <p>{props.firstName}</p>
            <p>{props.lastName}</p>
            <p>{props.salary}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}