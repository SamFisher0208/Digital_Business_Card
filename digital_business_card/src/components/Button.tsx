import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";

interface TitleText {
  titleText: string;
}

export default function Button({ titleText }: TitleText) {
  let buttonClass = "btn";
  let icon = null;

  // Determine the appropriate class and icon based on the titleText
  if (titleText === "Email") {
    buttonClass += " email-button";
    icon = <MdEmail />;
  } else if (titleText === "LinkedIn") {
    buttonClass += " linkedin-button";
    icon = <AiFillLinkedin />;
  }

  return (
    <button className={buttonClass}>
      {icon}
      {titleText}
    </button>
  );
}
