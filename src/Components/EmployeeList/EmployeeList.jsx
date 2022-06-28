import EmployeeListItem from '../EmployeeListItem/EmployeeListItem'

export default function EmployeeList(props){
   
    return (
        <div>
            {props.employees.map((employee)=>{
                return  <EmployeeListItem 
                            employee={employee}
                            firstName={employee.firstName} 
                            lastName={employee.lastName} 
                            salary={employee.salary}
                            deleteOne={props.deleteOne}
                            />
            })}
        </div>
    )
}