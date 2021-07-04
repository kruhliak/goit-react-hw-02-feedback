function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(name => (
        <button type="button" key={name} name={name} onClick={onLeaveFeedback}>
          {name.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;
