import EmployeeListItem from '../EmployeeListItem/EmployeeListItem'

export default function EmployeeList(props){
   
    return (
        <div>
            {props.employees.map((employee)=>{
                return  <EmployeeListItem 
                            firstName={employee.firstName} 
                            lastName={employee.lastName} 
                            salary={employee.salary}/>
            })}
        </div>
    )
}