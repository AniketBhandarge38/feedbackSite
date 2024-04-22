import { useState } from "react";
import { Feedback } from "../App";
interface FeedbackFormProps {
  isFeedbackClicked: boolean;
  setIsFeedbackClicked: (isClicked: boolean) => void;
  feedbackList: Array<Feedback>;
  setFeedbackList: (feedbackList: any) => void;
}
const FeedbackForm = (props: FeedbackFormProps) => {
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("UI");
  const [details, setDetails] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(e.nativeEvent instanceof SubmitEvent)) return;
    const submitter = e.nativeEvent.submitter;

    if (!(submitter instanceof HTMLButtonElement)) return;

    if (submitter.name === "cancel") {
      props.setIsFeedbackClicked(false);
      return;
    }

    if (title.trim() === "" || category.trim() === "" || details.trim() === "")
      return;

    const feedbackObj = {
      title: title,
      category: category,
      details: details,
      upvotes: 0,
      comments: [],
    };

    props.setFeedbackList([...props.feedbackList, feedbackObj]);
    props.setIsFeedbackClicked(false);
  };
  console.log(props.feedbackList);
  return (
    <div className="feedback-form">
      <h3>Create new feedback</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Feedback Title</label>
        <input
          type="text"
          id="title"
          placeholder="Add title of the feedback"
          className="light-bg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="category">Feedback category</label>
        <select
          name="category"
          id="category"
          className="light-bg"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="ui">UI</option>
          <option value="ux">UX</option>
          <option value="bug">Bug</option>
          <option value="feature">Feature</option>
        </select>

        <label htmlFor="details">Feedback Details</label>
        <textarea
          name="details"
          id="details"
          cols={60}
          rows={6}
          className="light-bg"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>

        <button className="common-btn full-Width marginTop" name="add">
          Add Feedback
        </button>
        <button
          className="common-btn dark-bg-color full-Width marginTop"
          name="cancel"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
