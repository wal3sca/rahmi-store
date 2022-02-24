// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const About = () => {
  // let navigate = useNavigate();
  const [holistics, setHolistics] = useState({});

  const URL = process.env.REACT_APP_API_URL;

  console.log(holistics);

  useEffect(() => {
    axios
      .get(`${URL}/holistics`)
      .then((res) => {
        setHolistics(res.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }, [URL]);

  return (
    <p className="mx-4 mt-4">
      RahMi is a wellness space which honors Indigenous healing practices,
      including those of African and Indigenous roots. We find importance in
      expanding these healing modalities to culturally aligned under-resourced
      low-income communities. This space works with trained and experienced
      professionals of Eastern and Western practices.
      <br />
    </p>
  );
};
export default About;
