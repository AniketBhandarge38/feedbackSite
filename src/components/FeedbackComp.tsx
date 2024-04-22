import { Feedback } from "../App";

interface FeedbackCompProps {
  feedback: Feedback;
}

const FeedbackComp = (props: FeedbackCompProps) => {
  return (
    <div className="feedback-card">
      <button className="feedback-details-btn">
        <p>⬆️</p>
        <p>{props.feedback.upvotes}</p>
      </button>
      <div className="feedback-content">
        <h3>{props.feedback.title.toUpperCase()}</h3>
        <p>{props.feedback.details}</p>
        <span>{props.feedback.category}</span>
      </div>

      <button
        className="feedback-details-btn"
        style={{ position: "absolute", right: "1rem" }}
      >
        💬 {props.feedback.comments?.length}
      </button>
    </div>
  );
};

export default FeedbackComp;
