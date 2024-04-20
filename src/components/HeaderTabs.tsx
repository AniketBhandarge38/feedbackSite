import FeedbackBanner from "./FeedbackBanner";
import TagsCard from "./TagsCard";

const tagList = ["UI", "UX", "Bug", "Feature", "UI", "UX", "Bug", "Feature"];

const HeaderTabs = () => {
  return (
    <div className="tabs">
      <FeedbackBanner />
      <TagsCard tags={tagList} />
    </div>
  );
};

export default HeaderTabs;
