import "./App.css";
import Header from "./Components/Header/Header";
import CategoryList from "./Components/CategoryList/CategoryList";
import EmployeeList from "./Components/EmployeeList/EmployeeList";

export default function App() {
  return (
    <div className="App">
      <Header />
      <CategoryList />
      <EmployeeList />
    </div>
  );
}
