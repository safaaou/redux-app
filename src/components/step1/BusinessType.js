import "./businessType.scss";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { chooseType } from "../../rootSlice";

function BusinessType(props) {
  const { name, options } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSave = (e) => {
    e.preventDefault();
    const data = e.target.elements[name].value;

    dispatch(chooseType(data));
    history.push("./step2");
    props.next();
  };

  return (
    <>
      <form onSubmit={handleSave}>
        <div className="wrapper_type">
          {options.map((op, index) => (
            <div key={index}>
              <input type="radio" name={name} id={op.value} value={op.value} />
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

export default BusinessType;
