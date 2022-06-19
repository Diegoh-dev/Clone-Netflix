import categories from "./Api";
import "./App.css";
import Banner from "./componets/Banner";
import Nav from "./componets/Nav";
import Row from "./componets/Row";

function App() {
  return (
    <div className="App">
      {/* Navbar |  destaque (Banner) | em alta (ok)| filmes de cada categoria(ROW)*/}
      <Nav />
      <Banner />

      {categories.map((category) => {
        return (
          <>
            <Row
              key={category.name}
              title={category.title}
              path={category.path}
              isLarge={category.isLarge}
            />
          </>
        );
      })}
    </div>
  );
}

export default App;
