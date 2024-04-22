import { useState } from "react";
import "./App.css";
import AddFeedback from "./components/AddFeedback";
import FeedbackList from "./components/FeedbackList";
import HeaderTabs from "./components/HeaderTabs";
import FeedbackForm from "./components/FeedbackForm";

export interface Feedback {
  title: string;
  category: string;
  details: string;
  upvotes?: number;
  comments?: Array<string>;
}

function App() {
  const [isFeedbackClicked, setIsFeedbackClicked] = useState<boolean>(false);
  const [feedbackList, setFeedbackList] = useState<Array<Feedback>>([
    {
      title: "Improve UI",
      category: "UI",
      details: "UI can be improved",
      upvotes: 12,
      comments: ["That can be done", "It is under review"],
    },
  ]);
  return (
    <main>
      <HeaderTabs />
      <section className="main-container">
        <AddFeedback
          isFeedbackClicked={isFeedbackClicked}
          setIsFeedbackClicked={setIsFeedbackClicked}
        />
        {isFeedbackClicked ? (
          <FeedbackForm
            isFeedbackClicked={isFeedbackClicked}
            setIsFeedbackClicked={setIsFeedbackClicked}
            feedbackList={feedbackList}
            setFeedbackList={setFeedbackList}
          />
        ) : (
          <FeedbackList feedbackList={feedbackList} />
        )}
      </section>
    </main>
  );
}

export default App;
