import './Feedback.css';

function Feedback({ valuesGood, valuesNeutral, valuesBad, totalFeedback, totalPositive }) {
  return (
    <>
      <ul>
        <li>good: {valuesGood}</li>
        <li>neutral: {valuesNeutral}</li>
        <li>bad: {valuesBad}</li>
        <li>total: {totalFeedback}</li>
        <li>positive: {totalPositive}</li>
      </ul>
    </>
  );
}

export default Feedback;
