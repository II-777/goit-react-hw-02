import { useState, useEffect } from "react";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";
import Feedback from "./Feedback/Feedback";
import './Description/Description.css';
import './Options/Options.css';
import './Notification/Notification.css';
import './Feedback/Feedback.css';


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
  const totalPositive = totalFeedback ? `${Math.round((values.good / totalFeedback) * 100)}%` : `0%`;

  return (
    <div className='app'>
      <div className='description'>
        <Description />
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
      <div className='feedback'>
        {totalFeedback > 0 && (
          <Feedback
            valuesGood={values.good}
            valuesNeutral={values.neutral}
            valuesBad={values.bad}
            totalFeedback={totalFeedback}
            totalPositive={totalPositive}
          />
        )}
      </div>
    </div>
  );
};

export default App;
