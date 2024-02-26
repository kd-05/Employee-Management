import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmployee from "../features/feature-add-employee/addEmployee";
import EditEmployee from "../features/feature-edit-employee/editEmployee";
import ListEmployee from "../features/feature-list-employee/listEmployee";
import DefaultPage from "../features/default/defaultPage";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultPage />} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/edit/:id" element={<EditEmployee />} />
          <Route path="/list" element={<ListEmployee />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
