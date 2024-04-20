import { Feedback } from "../App";
import FeedbackComp from "./FeedbackComp";

interface FeedbackListProps {
  feedbackList: Array<Feedback>;
}
const FeedbackList = (props: FeedbackListProps) => {
  return (
    <div className="feedback-list-container">
      {props.feedbackList.map((feedback) => {
        return <FeedbackComp feedback={feedback} />;
      })}
    </div>
  );
};

export default FeedbackList;
