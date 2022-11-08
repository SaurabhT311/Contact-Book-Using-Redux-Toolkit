import React from "react";
import { useSelector } from "react-redux";
import { contactSelector } from "./ContactSlice";
import Contact from "./Contact";


const Contacts = () => {
 
  const {contacts} = useSelector(contactSelector);
  // console.log("contact",contacts);


  return (
    <div>
      <table className="table shadow">
        <thead>
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
              </div>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 && contacts.map((contact) => (
            <Contact contact={contact} key={contact.id} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
