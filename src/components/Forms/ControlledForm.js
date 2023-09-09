import React, { useState } from "react";

const ControlledForm = () => {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) < 5 && comment.length < 8) {
      alert("Please provide a comment explaining why the experience was poor.");
      return;
    }

    console.log(comment.length);
    console.log(`Your score: ${score} and comment: ${comment} `);
    console.log("Form submitted !");
    //reset form
    setComment("");
    setScore(10);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feed back form</h2>
          <div className="Field">
            <label>Score: {score} * </label>
            <input
              type="range"
              min="0"
              max="10"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>Comment:</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default ControlledForm;
