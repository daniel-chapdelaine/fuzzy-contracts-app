import { useClarify } from "../effects/useClarify";

function ThesisTwo() {
  useClarify();
  return (
    <div>
      <h2 style={{fontSize: '18px'}}>Thesis</h2>
      <div className="base">
        <div className="fuzzy">
          <strong>The Process:</strong>
          <ol>
            <li>Server side adds "favorite_date" to the data sent to the client</li>
            <li>Client receives both dates and replaces all instances of "birth_date" with "favorite_date"</li>
            <li>Server side removes unused "birth_date"</li>
          </ol>
        </div>

        <div className="fuzzy">
          <strong>The Consequence:</strong>
          <div>
            This is a total of 3 PRs and they <strong>must</strong> be released in this order
          </div>
          <ul className="no-bullet">
            <li className="bad">Tedious (multiple PRs)</li>
            <li className="bad">Error-prone (mistakes can break apps)</li>
            <li className="bad">Slow (blocking PR releases)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ThesisTwo;