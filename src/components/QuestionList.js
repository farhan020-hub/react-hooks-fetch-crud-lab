import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem"; // Import the QuestionItem component

function QuestionList() {
  const [questions, setQuestions] = useState([]); 

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data)); // Set "questions" state with the fetched data
  }, []);



   const onDeleteQuestion = (id) => {
    // Create a new array of questions without the one to be deleted
    const updatedQuestions = questions.filter((question) => question.id !== id);
    setQuestions(updatedQuestions);
  };

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
      {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDeleteQuestion={onDeleteQuestion}
          />
        ))}
      </ul>
    </section>
  );
}


export default QuestionList;
