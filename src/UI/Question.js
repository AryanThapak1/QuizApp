import React from "react";
import styles from "./Question.module.css";


const Question = (props) => {


    return (
        <div className={styles.questionContainer}>
            <div className={styles.question}>{props.Question}</div>
            <div className={styles.optionsContainer}>
                <label className={styles.optionLabel}>
                    <input type="radio" name={props.name} className={styles.radioInput} />
                    {props.Option1}
                </label>
                <label className={styles.optionLabel}>
                    <input type="radio" name={props.name} className={styles.radioInput} />
                    {props.Option2}
                </label>
                <label className={styles.optionLabel}>
                    <input type="radio" name={props.name} className={styles.radioInput} />
                    {props.Option3}
                </label>
                <label className={styles.optionLabel}>
                    <input type="radio" name={props.name} className={styles.radioInput} />
                    {props.Option4}
                </label>
            </div>
        </div>
    );
};

export default Question;
