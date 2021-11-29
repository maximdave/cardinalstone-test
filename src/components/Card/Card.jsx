import styles from "./Card.module.css";

const Card = ({ text }) => {
  return (
    <div className={styles.requestCard}>
      <p className={styles.cardText}>{text}</p>
    </div>
  );
};

export default Card;
