import { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import CategoryList from './Components/CategoryList/CategoryList';
import EmployeeList from './Components/EmployeeList/EmployeeList';
import AddEmployee from './Components/AddEmployee/AddEmployee';
import employeeData from './mock-employees.json';

class App extends Component{
  state = {employees: []}

  async componentDidMount(){
    this.setState({employees: employeeData.employees}) 
    console.log(this.state.employees)
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <CategoryList />
        <EmployeeList employees={this.state.employees}/>
        <AddEmployee />
      </div>
    );
  }
}

export default App;
