import React from "react";
import Avatar from "react-avatar";
import { deleteContact } from "./ContactSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


const Contact = React.memo(({ contact }) => {
  const dispatch = useDispatch();
  const { name, phone, email, id } = contact;


  const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
  }

  return (
    <tr>
      <td>
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
          />
          <label className="custom-control-label"></label>
        </div>
      </td>
      <td>
        <Avatar className="mr-2" name={name} size="30" round={true} /> {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className="actions">
        <Link to={`/contacts/edit/${id}`}>
          <span className="material-icons mr-2">edit</span>
        </Link>
        <span
          className="material-icons mr-2 text-danger "
          onClick={() => onDeleteContact(id)}
        >
          remove_circle
        </span>

      </td>
    </tr>
  );
});

export default Contact;
