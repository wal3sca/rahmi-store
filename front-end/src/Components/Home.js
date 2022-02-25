import img from "../../src/assets/VeveDamballah.png";

const Home = () => {
  return (
    <div className="home">
      <h1 style={{ textAlign: "center", fontfamily: "Satisfy" }}>
        Holistic Health and Wellness
      </h1>
      <section>
        <img src={img} className="w-100" />
      </section>
    </div>
  );
};

export default Home;
