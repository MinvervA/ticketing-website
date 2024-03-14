import CategorySection from "../../Components/CategorySection";
import Jumbotron from "../../Components/Jumbotron";

const Home = () => {
  return (
    <div className="Home">
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
