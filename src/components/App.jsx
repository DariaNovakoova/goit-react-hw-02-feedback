import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

class App extends Component {
  static options = ['good', 'neutral', 'bad'];

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const totalResult = this.countTotalFeedback();
    return totalResult === 0 ? 0 : Math.round((good / totalResult) * 100);
  }

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalCount = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div
        style={{
          width: 400,
          margin: '50px auto',
          backgroundColor: 'wheat',
          padding: 30,
          display: 'flex',
          flexDirection: 'column',
          gap: 30,
          alignItems: 'center',
        }}
      >
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={App.options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        {totalCount === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalCount}
              positivePercentage={positivePercentage}
            />
          </Section>
        )}
      </div>
    );
  }
}

export default App;
