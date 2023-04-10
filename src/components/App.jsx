import { useState } from 'react';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import css from 'components/App.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickButton = type => {
    switch (type) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    const goods = good;

    const result = Math.ceil((goods / totalFeedback) * 100) || 0;

    return `${result}%`;
  };

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={('good', 'neutral', 'bad')}
            onLeaveFeedback={handleClickButton}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    </div>
  );
}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClickButton = e => {
//     const option = e.target.name;

//     if (option) {
//       this.setState(prevState => ({ [option]: prevState[option] + 1 }));
//     }
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedback = () => {
//     const totalFeedback = this.countTotalFeedback();
//     const { good } = this.state;
//     const result = Math.ceil((good / totalFeedback) * 100) || 0;

//     return `${result}%`;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const countTotalFeedback = this.countTotalFeedback();
//     const countPositiveFeedbackPercentage = this.countPositiveFeedback();
//     const options = Object.keys(this.state);
//     const handleClickButton = this.handleClickButton;

//     return (
//       <div className={css.container}>
//         <div className={css.wrapper}>
//           <Section title="Please leave feedback">
//             <FeedbackOptions
//               options={options}
//               onLeaveFeedback={handleClickButton}
//             />
//           </Section>

//           <Section title="Statistics">
//             {countTotalFeedback > 0 ? (
//               <Statistics
//                 good={good}
//                 neutral={neutral}
//                 bad={bad}
//                 total={countTotalFeedback}
//                 positivePercentage={countPositiveFeedbackPercentage}
//               />
//             ) : (
//               <Notification message="There is no feedback" />
//             )}
//           </Section>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
