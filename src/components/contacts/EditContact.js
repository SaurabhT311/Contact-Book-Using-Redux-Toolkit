import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactSelector, editContact } from "./ContactSlice";
import { useNavigate, useParams } from "react-router-dom";

const EditContact = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const contact = useSelector(contactSelector);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");


  const existingUser = (contact.contacts).filter((contact) => contact.id === id)
  existingUser = existingUser.values()
  for(let val of existingUser){
    existingUser = val;
  }

  console.log("existing_user", existingUser);

  // useEffect(() => {  
  //   if (existingUser[0] != null) {
  //     setName(existingUser[0].name);
  //     setPhone(existingUser[0].phone);
  //     setEmail(existingUser[0].email);
  //   }
  // }, []);

  useEffect(() => {  
    if (existingUser != null) {
      setName(existingUser.name);
      setPhone(existingUser.phone);
      setEmail(existingUser.email);
    }
  }, []);


  const onUpdateContact = (e) => {
    e.preventDefault();
    const edit_contact = {
      id: id,
      name: name,
      phone: phone,
      email: email,
    };
    console.log("edit_contact", edit_contact);
    dispatch(editContact(edit_contact));
    navigate("/")
  };


  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => onUpdateContact(e)}>
          <div className="form-group"
            style={{
              marginBottom: "1em"
            }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group"
            style={{
              marginBottom: "1em"
            }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group"
            style={{
              marginBottom: "1em"
            }}>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your E-mail Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-warning" type="submit">
            Update Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
