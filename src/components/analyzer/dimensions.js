export default function Dimensions({columnValues}) {
  return (
    <div>
      <ul className="list-group">
      {columnValues.map((column) => (
        <li className="list-group-item" key={column}>{column}</li>
      ))}
      </ul>
    </div>
  );
}
