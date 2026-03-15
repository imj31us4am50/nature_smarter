import "./styles2.css";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UpperContent from "./upperContent.js";
import LowerContent from "./lowerContent.js";
import AskAQuestion from "./AskAQuestion.js";
import QuestionForm from "./questionForm.js";

export default function App1() {
  return (
    <div className="container-fluid pope m-0 p-0 mb-5">
      <UpperContent />
      <LowerContent />
      <AskAQuestion />
      <QuestionForm />
    </div>
  );
}
