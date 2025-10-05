import { useClarify } from "../effects/useClarify";

function ThesisTwo() {
  useClarify();
  return (
    <div>
      <h2 style={{fontSize: '18px'}}>Thesis</h2>
      <div className="base">
        <div className="fuzzy">
          <strong>The Thought:</strong> 
          <div>
            Could I ask AI to change the data shape to match contract?
          </div>
        </div>

        <div className="fuzzy">
          <strong>The Theory:</strong> 
          <div>
            Regardless of which side (client or server) makes the change first, AI adjusts the data shape to match client needs.
          </div>
          <pre className="code-block">
            <code>
              {`{name: "Jeff", birth_date: "October 22, 1952"}`}
              <span style={{fontSize: '20px', padding: "0 16px"}}>⇄</span>
              {`{name: "Jeff", favorite_date: "October 22, 1952"}`}</code>
          </pre>
        </div>


        <div className="fuzzy">
          <strong>The Consequence:</strong>
          <div>We only have two PRs and the structure looks like this:</div>
          <ol>
            <li>Server side adds "favorite_date" to and removes "birth_date" from the data sent to the client</li>
            <li>Client replaces all instances of "birth_date" with "favorite_date"</li>
          </ol>
          <ul className="no-bullet">
            <li className="good">Simplistic</li>
            <li className="good">Less coordination</li>
            <li className="good">Less strict contracts</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default ThesisTwo;