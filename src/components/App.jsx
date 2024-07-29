import { useState, useEffect } from "react";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";
import Stats from "./Stats/Stats";
import './Options/Options.css';
import './Notification/Notification.css';
import './Stats/Stats.css';

const App = () => {
  const [values, setValues] = useState(() => {
    const savedValues = JSON.parse(window.localStorage.getItem("feedback-values"));
    return savedValues ? savedValues : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("feedback-values", JSON.stringify(values));
  }, [values]);

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
          <Stats
            valuesGood={values.good}
            valuesNeutral={values.neutral}
            valuesBad={values.bad}
            totalFeedback={totalFeedback}
          />
        )}
      </div>
    </div>
  );
};

export default App;
