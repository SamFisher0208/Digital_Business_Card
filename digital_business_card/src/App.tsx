import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <div className="card-container">
        <Header></Header>

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

        <div className="info-container">
          <Info></Info>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
