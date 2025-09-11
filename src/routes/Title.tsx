import { useClarify } from "../effects/useClarify";

function Title() {
  useClarify();
  return (
    <div >
      <h2 style={{fontSize: '18px'}}>Welcome!</h2>
      <div className="base">
        <div className="fuzzy">
          <strong>The Plan:</strong> 
          <div>Use AI to fuzzify data structures.</div>
        </div>
        <div className="fuzzy">
          <strong>The Goal:</strong>
          <div>Fuzzify the structures in you mind.</div>
        </div>
      </div>
    </div>
  );
}

export default Title;