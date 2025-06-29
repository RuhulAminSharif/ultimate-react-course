import { useState } from "react";

const AccordionItem = ({ id, faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleClick}>
      <p className="number">{id + 1}</p>
      <p className="title">{faq.title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{faq.text}</div>}
    </div>
  );
};

export default AccordionItem;
