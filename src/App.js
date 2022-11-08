import Navbar from './components/Navbar/Navbar';
import AddContact from "./components/contacts/Addcontacts";
import Contacts from "./components/contacts/Contacts";
import EditContact from './components/contacts/EditContact';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles/App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="py-3">
            <Routes>
              <Route path="/" element={<Contacts />} />
              <Route path="/contacts/add" element={<AddContact />} />
              <Route path="/contacts/edit/:id" element={<EditContact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
