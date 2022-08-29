import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Infos } from "./components/Infos";
import { Search } from "./components/Search";
import { Zips } from "./components/Zips";

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Search />

        <Infos />

        <Zips />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
