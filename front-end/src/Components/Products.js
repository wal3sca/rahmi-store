import { Link } from "react-router-dom";

function Holistics({ holistic, index }) {
  return (
    <div className="product">
      <div className="item"></div>
      <div>${holistic.name}</div>
      <p>${holistic.price.toFixed(2)}</p>
      <p>
        <Link to={`/holistics/${index}`}>Details</Link>
      </p>
    </div>
  );
}

export default Holistics;
