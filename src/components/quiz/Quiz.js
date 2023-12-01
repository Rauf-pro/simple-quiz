import React from "react";
import { Formik, Form, Field, } from "formik";
import styles from "./quiz.module.css";

const question = {
  question: "Azərbaycanın paytaxtı haradır?",
  options: ["Berlin", "Madrid", "Paris", "Bakı"],
  correctAnswer: "Bakı",
};

const initialValues = {
  selectedAnswer: "",
};

const handleSubmit = (values, { resetForm }) => {
  
  if (values.selectedAnswer === question.correctAnswer) {
    alert("Düzgün cavab");
  } else {
    alert(" Yanlış cavab");
  }

  resetForm();
};

const Quiz = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Quiz App</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div>
            <p className={styles.questionText}>{question.question}</p>
          </div>

          <div className={styles.optionWrapper}>
            {question.options.map((option, index) => (
              <div key={index}>
                <Field
                  type="radio"
                  id={`option${index}`}
                  name="selectedAnswer"
                  value={option}
                />
                <label htmlFor={`option${index}`}>{option}</label>
              </div>
            ))}
          </div>

          <button type="submit" className={styles.btn}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Quiz;