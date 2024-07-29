import { useState } from "react";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";
import './Options/Options.css';
import './Notification/Notification.css';

const App = () => {
  const [values, setValues] = useState({ good: 0, neutral: 0, bad: 0 });

  const updateFeedback = (feedbackType) => {
    setValues((prevValues) => ({
      ...prevValues, [feedbackType]: prevValues[feedbackType] + 1,
    }));
  };

  const totalFeedback = values.good + values.neutral + values.bad;

  return (
    <div className='app'>
      <div className='description'>
        <h1>Sip Happens Café</h1>
        <p>Please leave your feedback about our service by selecting one of the options below.</p>
      </div>
      <div className='options'>
        <Options
          updateFeedback={updateFeedback}
          totalFeedback={totalFeedback}
          resetFeedback={() => setValues({ good: 0, neutral: 0, bad: 0 })}
        />
      </div>
      <div className='notification'>
        {totalFeedback == 0 && (
          <Notification />
        )}
      </div>
      <div className='stats'>
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
    </div>
  );
};

export default App;