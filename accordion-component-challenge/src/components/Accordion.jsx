import AccordionItem from "./AccordionItem";

function Accordion({ data }) {
  return (
    <div className="accordion">      
    {
      data.map((faq, index) => (
        <AccordionItem key={index} id={index} faq={faq} />
      ))
    }
    </div>
  )
}
export default Accordion;
