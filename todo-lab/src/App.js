import './App.css';
import AddTodo from "./component/AddTodo";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path="/"  element={<AddTodo />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
