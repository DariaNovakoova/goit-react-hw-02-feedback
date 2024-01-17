import styles from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p className={styles.good}>Good: {good}</p>
      <p className={styles.neutral}>Neutral: {neutral}</p>
      <p className={styles.bad}>Bad: {bad}</p>
      <p className={styles.total}>Total: {total}</p>
      <p className={styles.percentage}>
        Positive feedback: {positivePercentage}%
      </p>
    </>
  );
};

export default Statistics;
