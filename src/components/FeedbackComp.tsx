import { Feedback } from "../App";

interface FeedbackCompProps {
  feedback: Feedback;
}

const FeedbackComp = (props: FeedbackCompProps) => {
  return (
    <div className="feedback-card">
      <h3>{props.feedback.title}</h3>
      <p>{props.feedback.details}</p>
      <span>{props.feedback.category}</span>
    </div>
  );
};

export default FeedbackComp;
