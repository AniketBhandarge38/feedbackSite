import { useState } from "react";
import "./App.css";
import AddFeedback from "./components/AddFeedback";
import FeedbackList from "./components/FeedbackList";
import HeaderTabs from "./components/HeaderTabs";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [isFeedbackClicked, setIsFeedbackClicked] = useState<boolean>(false);
  return (
    <main>
      <HeaderTabs />
      <section className="main-container">
        <AddFeedback
          isFeedbackClicked={isFeedbackClicked}
          setIsFeedbackClicked={setIsFeedbackClicked}
        />
        {isFeedbackClicked ? <FeedbackForm /> : <FeedbackList />}
      </section>
    </main>
  );
}

export default App;
