interface TitleText {
  titleText: string;
  icon: React.ReactNode;
  link: string;
}

export default function Button({ titleText, icon, link }: TitleText) {
  let buttonClass = "btn";

  // Determine the appropriate class, icon, and link based on the titleText
  if (titleText === "Email") {
    buttonClass += " email-button";
  } else if (titleText === "LinkedIn") {
    buttonClass += " linkedin-button";
  }

  const handleButtonClick = () => {
    link ? window.open(link, "_blank") : null;
  };

  return (
    <button onClick={handleButtonClick} className={buttonClass}>
      {icon}
      {titleText}
    </button>
  );
}
