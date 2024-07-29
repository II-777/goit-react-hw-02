import { useState } from "react";
import Options from "./Options/Options";
import './Options/Options.css';

const App = () => {
  const [values, setValues] = useState({ good: 0, neutral: 0, bad: 0 });

  const updateFeedback = (feedbackType) => {
    setValues((prevValues) => ({
      ...prevValues, [feedbackType]: prevValues[feedbackType] + 1,
    }));
  };

  const totalFeedback = values.good + values.neutral + values.bad;

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={() => setValues({ good: 0, neutral: 0, bad: 0 })}
      />
      {totalFeedback == 0 && (
        <p>No feedback yet.</p>
      )}
      {totalFeedback > 0 && (
        <ul>
          <li>good: {values.good}</li>
          <li>neutral: {values.neutral}</li>
          <li>bad: {values.bad}</li>
          <li>total: {totalFeedback}</li>
          <li>positive: {Math.round((values.good / totalFeedback) * 100)}%</li>
        </ul>
      )}
    </div>
  );
};

export default App;