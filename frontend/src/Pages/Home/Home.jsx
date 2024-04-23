import Posts from "../../Components/Home/posts/Posts";
import Share from "../../Components/Home/share/Share";
import Recherche from "../../Components/Home/Recherche/Recherche";
import "./home.scss";
import Navbar from "../../Components/Home/navbar/Navbar";
const Home = () => {
  return (
    <div className="home">
    <Navbar />
      <Share />
      <Posts />
    </div>
  );
};

export default Home;
