interface AddFeedbackProps {
  isFeedbackClicked: boolean;
  setIsFeedbackClicked: (isClicked: boolean) => void;
}
const AddFeedback = (props: AddFeedbackProps) => {
  return (
    <div className="add-feedback">
      <div>
        <p>6 Suggestions</p>
      </div>

      <div>
        <label htmlFor="sort">Sort By: </label>
        <select name="sort" id="sort">
          <option value="maxVotes">Most Votes</option>
          <option value="minVotes">Least Votes</option>
          <option value="maxComments">Most Comments</option>
          <option value="minComments">Least Comments</option>
        </select>
      </div>

      <div>
        <button
          className="common-btn"
          onClick={() => props.setIsFeedbackClicked(!props.isFeedbackClicked)}
        >
          + Add Feedback
        </button>
      </div>
    </div>
  );
};

export default AddFeedback;
