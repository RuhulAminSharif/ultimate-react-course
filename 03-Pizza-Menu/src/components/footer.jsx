import "../index.css";
import Order from "./Order";

function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (isOpen) {
  //   alert("we are open");
  // } else {
  //   alert("we are closed");
  // }

  // if (!isOpen) {
  //   return (
  //     <p>
  //       We're happy to welcome you between {openHour}:00 and {closeHour}:00.{" "}
  //     </p>
  //   );
  // }
  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

export default Footer;
