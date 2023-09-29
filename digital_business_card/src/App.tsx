import "./App.css";
import Button from "./components/Button";
import Info from "./components/Info";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";

function App() {
  return (
    <div className="container">
      <div className="card-container">
        <Info></Info>

        <div className="btn-container">
          <Button
            titleText={"Email"}
            icon={<MdEmail size={20} />}
            link="mailto:samanthajfisher.cs@gmail.com"
          />
          <Button
            titleText={"LinkedIn"}
            icon={<AiFillLinkedin />}
            link="https://www.linkedin.com/in/sam-j-fisher"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
