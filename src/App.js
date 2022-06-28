import { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import CategoryList from './Components/CategoryList/CategoryList';
import EmployeeList from './Components/EmployeeList/EmployeeList';
import AddEmployee from './Components/AddEmployee/AddEmployee';

class App extends Component{
  render() {
    return (
    <div className="App">
      <Header />
      <CategoryList />
      <EmployeeList />
      <AddEmployee />
    </div>
  );
  }
}

export default App;
