import "./businessInfo.scss";
import React from "react";
import { useDispatch } from "react-redux";
//import { useHistory } from 'react-router-dom'
import { chooseName } from "../../rootSlice";
import { chooseEmail } from "../../rootSlice";
import { choosePhone } from "../../rootSlice";

function BusinessInfo(props) {
  const dispatch = useDispatch();

  const onSaveData = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;

    dispatch(chooseName(name));
    dispatch(chooseEmail(email));
    dispatch(choosePhone(phone));

    props.next();

    //return props.onSaveData(name,email,phone);
  };

  return (
    <>
      <div className="wrapper_Info">
        <h4>Contact Person Information</h4>
        <form onSubmit={onSaveData}>
          <div>
            <input
              className="fields"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              className="fields"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className="fields"
              type="text"
              name="phone"
              placeholder="Phone number"
            />
          </div>

          <div>
            <button className="save" type="submit">
              save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default BusinessInfo;
