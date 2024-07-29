import './Stats.css';

function Stats({ valuesGood, valuesNeutral, valuesBad, totalFeedback }) {
  return (
    <>
      <ul>
        <li>good: {valuesGood}</li>
        <li>neutral: {valuesNeutral}</li>
        <li>bad: {valuesBad}</li>
        <li>total: {totalFeedback}</li>
        <li>positive: {Math.round((valuesGood / totalFeedback) * 100)}%</li>
      </ul>
    </>
  );
}

export default Stats;
