import CategorySection from "../../Components/CategorySection";
import Jumbotron from "../../Components/Jumbotron";
import Navbar from "../../Components/Navbar";

const Home = () => {
  return (
    <div className="Home">
      <div className="">
        <Navbar />
      </div>
      <header className="Jumbotron">
        <Jumbotron />
      </header>
      <main>
        <section>
          <CategorySection />
        </section>
      </main>
    </div>
  );
};

export default Home;
