import { useState } from "react";

const App = () => {
  const [values, setValues] = useState({ good: 0, neutral: 0, bad: 0 });

  const updateGood = () => setValues({ ...values, good: values.good + 1 });
  const updateNeutral = () => setValues({ ...values, neutral: values.neutral + 1 });
  const updateBad = () => setValues({ ...values, bad: values.bad + 1 });


  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <button onClick={updateGood}>Good</button>
      <button onClick={updateNeutral}>Neutral</button>
      <button onClick={updateBad}>Bad</button>
      <p>good: {values.good}</p>
      <p>neutral: {values.neutral}</p>
      <p>bad: {values.bad}</p>
      <p>total: {values.good + values.neutral + values.bad}</p>
      <p>positive: </p>
    </div>
  );
};

export default App
