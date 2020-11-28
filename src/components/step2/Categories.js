import "./categories.scss";
import {useState} from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { chooseCategory } from "../../rootSlice";

function Categories(props) {
  const [isChecked, setIsChecked] = useState(false);
  const { name, options } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  

  const handleSave = (e) => {
    e.preventDefault();
    let res = [];

    const data = e.target.elements[name];
    for (const column of data) {
      if (column.checked === true) {
        res.push(column.value);
      }
    }
    
if (res.length !== 0){
    dispatch(chooseCategory(res));
    history.push("./step3");
    props.next();
}else{
  alert('choose something');
  console.log('choose something');
}
  };

  return (
    <>
      <form onSubmit={handleSave}>
        <div className="wrapper_categories">
          {options.map((op, index) => (
            <div key={index}>
              <input
                type="checkbox"
                name={name}
                id={op.value}
                value={op.value}
                onChange={(e)=>{setIsChecked(e.target.checked)}}
              />
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

export default Categories;
