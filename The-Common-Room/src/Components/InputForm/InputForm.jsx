import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./InputForm.css";

function InputForm() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  let handleSelectChange = (e) => {
    setValue(e.target.value);
  };

  let handleOnclick = () => {
    switch (value) {
      case "1":
        navigate("/gryffindor");
        break;
      case "2":
        navigate("/hufflepuff");
        break;
      case "3":
        navigate("/ravenclaw");
        break;
      case "4":
        navigate("/slytherin");
        break;
      default:
        navigate("/gryffindor");
        break;
    }
  };

  return (
    <>
      <div id="form">
        <div className="form-floating mb-3">
          <div>
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Name"
            />
          </div>
        </div>

        <div className="input-group mb-3">
          <label className="form-control" htmlFor="inputGroupSelect01">
            What is most important to you?
          </label>
          <select
            className="form-select"
            id="inputGroupSelect01"
            onChange={handleSelectChange}
          >
            <option defaultValue>Choose...</option>
            <option value="1">Love</option>
            <option value="2">Peace</option>
            <option value="3">Knowledge</option>
            <option value="4">Evil</option>
          </select>
        </div>
        <input
          className="btn btn-primary"
          type="submit"
          value="Sort Me!"
          onClick={handleOnclick}
        ></input>
      </div>
    </>
  );
}

export default InputForm;
