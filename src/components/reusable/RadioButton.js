const RadioButton = ({onRadioChangeHandler, radioText}) => {
  return (
    <div className="input-group w-50 my-3 mx-auto">
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          onChange={()=>onRadioChangeHandler(radioText)}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          {radioText}
        </label>
      </div>
    </div>
  );
};

export default RadioButton;
