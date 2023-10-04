import { FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  const link = "https://github.com/SamFisher0208";

  const handleIconClick = () => {
    link ? window.open(link, "_blank") : null;
  };

  return (
    <footer className="footer">
      <FaGithubSquare size={42} onClick={handleIconClick} className="github" />
    </footer>
  );
}
