import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function Cart() {
  const { index } = useParams();
  const [holistic, setHolistics] = useState([]);
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  console.log(holistic);

  // use axios to connect backend
  // request, response

  useEffect(() => {
    axios
      .get(`${API}/holistics/${index}`)
      .then((res) => setHolistics(res.data))
      .catch((error) => console.warn(`Error: ${error}`));
  }, [API, index]);

  const handleDelete = () => {
    axios.delete(`${API}/holistics/${index}`).then(() => {
      navigate("/holistics");
    });
  };

  return (
    <div className="cart">
      <p>
        <Link to={`/holistics/${index}/edit`}>
          <button>Edit</button>
        </Link>
      </p>

      <p>
        <button onClick={handleDelete}>Delete</button>
      </p>
      <p>
        <Link to="/holistics/edit">
          <button>Back</button>
        </Link>
      </p>
    </div>
  );
}

export default Cart;
