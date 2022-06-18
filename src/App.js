import categories from "./Api";
import "./App.css";
import Row from "./componets/Row";

function App() {
  return (
    <div className="App">
      {/* Navbar |  destaque | em alta | filmes de cada categoria*/}
      {categories.map((category) => {
        return (
          <Row
            key={category.name}
            title={category.title}
            path={category.path}
            isLarge={category.isLarge}
          />
        );
      })}
    </div>
  );
}

export default App;
