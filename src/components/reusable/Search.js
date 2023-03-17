const Search = ({handleOnChange, handleText, handleClick}) => {

    return(
        <div className="input-group w-50 my-3 mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Gsheet ID"
          onChange={(e) => handleOnChange(e)}
          value={handleText}
        />
        <button
          className="btn btn-success"
          type="button"
          id="button-addon2"
          onClick={() => handleClick()}
        >
          Fetch Now
        </button>
      </div>
    );

}

export default Search;