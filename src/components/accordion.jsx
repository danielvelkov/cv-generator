import '../styles/accordion.css';
import '../styles/card.css';

export default function Accordion({
  title = '',
  children,
  isExpanded = false,
  handleSelect,
}) {
  const id = crypto.randomUUID();
  return (
    <div className="accordion">
      <input
        id={id}
        type="checkbox"
        checked={isExpanded}
        onChange={handleSelect}
      ></input>
      <label className="accordion-header" htmlFor={id}>
        <h2 className="card-title">{title}</h2>
        {/* basically arrows */}
        {isExpanded ? <span>&#11206;</span> : <span>&#11205;</span>}
      </label>
      <div className="content">{children}</div>
    </div>
  );
}
