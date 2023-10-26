import { Navbar } from "./components/Navbar";
import "./App.css"
import { Home } from "./pages/Home";
import {Books } from "./pages/Books";
import {AddBooks} from "./pages/AddBooks";
import { BrowserRouter as Router,Route, Routes} from "react-router-dom";
import { Footer } from "./components/Footer";
import { BookDetails } from "./components/BookDetails";
import { Register } from "./pages/Register";
import { AllUsers } from "./pages/AllUsers";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route  path="/books" element={<Books/>}></Route>
        <Route  path="/addBook" element={<AddBooks/>}></Route>
        <Route  path="/register" element={<Register/>}></Route>
        <Route  path="/allusers" element={<AllUsers/>}></Route>
        <Route  path="/bookDetails/:id" element={<BookDetails/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  
  );
}

export default App;
