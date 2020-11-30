import "./businessInfo.scss";
import React from "react";
import { connect } from "react-redux";
//import { useHistory } from 'react-router-dom'
import { chooseName, chooseEmail, choosePhone } from "../../redux/actions";


function BusinessInfo(props) {
  //const dispatch = useDispatch();

  const onSaveData = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;

    props.chooseName(name);
    props.chooseEmail(email);
    props.choosePhone(phone);

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

const mapStateToProps = (state) => {
  return {
    name: state.name,
    email: state.email,
    phone: state.phone
  }
}

const mapDispatcherToProps = (dispatch) => {
  return {
    chooseName: (data) => dispatch(chooseName(data)),
    chooseEmail: (data) => dispatch(chooseEmail(data)),
    choosePhone: (data) => dispatch(choosePhone(data))
  }
}

export default connect(mapStateToProps, mapDispatcherToProps)(BusinessInfo);
