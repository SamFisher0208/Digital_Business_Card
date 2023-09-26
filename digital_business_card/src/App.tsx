import "./App.css";
import Button from "./components/Button";
import Info from "./components/Info";

function App() {
  return (
    <div className="container">
      <div className="card-container">
        <Info></Info>

        <div className="btn-container">
          <Button titleText={"Email"}></Button>
          <Button titleText={"LinkedIn"}></Button>
        </div>
      </div>
    </div>
  );
}

export default App;
