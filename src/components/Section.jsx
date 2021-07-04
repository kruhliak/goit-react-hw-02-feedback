function Section(props) {
  const { title, children } = props;
  return (
    <section>
      <p>{title}</p>
      {children}
    </section>
  );
}

export default Section;
