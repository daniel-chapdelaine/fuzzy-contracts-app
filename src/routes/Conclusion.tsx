import { useClarify } from "../effects/useClarify";

function Conclusion() {
  useClarify();
  return (
    <>
      <h2 style={{ fontSize: '18px' }}>Conclusion</h2>

      <div className="base">
        <div className="fuzzy">
          <div>
            <strong>The Question:</strong> 
            <div>
              What structures are you living in that we may have outgrown?
            </div>
          </div>
        </div>

        <div className="fuzzy">
          <strong>The End:</strong>
          <div>
            Questions? Comments? Thoughts?
          </div>
          <div>
            Presentation can be found https://github.com/daniel-chapdelaine/fuzzy-contracts-app
          </div>
        </div>
      </div>
    </>
  );
}

export default Conclusion;