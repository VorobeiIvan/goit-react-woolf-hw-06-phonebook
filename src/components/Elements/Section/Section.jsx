import './Section.css';
const Section = ({ children, title }) => {
  return (
    <section className="section">
      <h2 className="title">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
