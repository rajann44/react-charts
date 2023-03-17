const Dropdown = ({dropdownData, dropDownSelectionHandler}) => {

    return(
        <div className="d-flex flex-row justify-content-center">
        {dropdownData != null && (
          <div className="dropdown p-2">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              X-Axis
            </button>
            <ul className="dropdown-menu">
              {dropdownData.map((c) => {
                return (
                  <li key={c}>
                    <a onClick={() => dropDownSelectionHandler(c)} className="dropdown-item">
                      {c}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );

}
export default Dropdown;