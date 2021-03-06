import "./businessType.scss";
import {useState} from 'react';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { chooseType } from "../../redux/actions";

function BusinessType(props) {
  const [isChecked, setIsChecked] = useState(false);
  const { name, options } = props;
  //const dispatch = useDispatch();
  const history = useHistory();



  const handleSave = (e) => {
    e.preventDefault();
    const data = e.target.elements[name].value;
    if(data !== ''){
        props.chooseType(data);
        history.push("./step2");
        props.next();
    }else{
      alert('choose something');
      console.log('choose something');
    }
  };

  return (
    <>
      <form onSubmit={handleSave}>
        <div className="wrapper_type">
          {options.map((op, index) => (
            <div key={index}>
              <input type="radio" 
              name={name} 
              id={op.value} 
              value={op.value} 
              onChange={(e)=>{setIsChecked(e.target.checked)}}/>
              <label htmlFor={op.value}>{op.texte}</label>
            </div>
          ))}
        </div>


        <div>
          <button className="next" type="submit">
            Next
          </button>
        </div>
        
      </form>
    </>
  );
}

const mapStateToProps = state => {
  return {
    btn_radio: state.btn_radio
  }
}

const mapDispatcherToProps = dispatch => {
  return {
    chooseType: (data) => dispatch(chooseType(data))
  }
}

export default connect(mapStateToProps, mapDispatcherToProps)(BusinessType);
