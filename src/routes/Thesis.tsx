import { useClarify } from "../effects/useClarify";

function Thesis() {
  useClarify();
  return (
    <div>
      <h2 style={{fontSize: '18px'}}>Thesis</h2>
      <div className="base">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          <div className="fuzzy">
            <strong>The Contract:</strong> 
            <div>A design document and a shared commitment, guiding the development and interaction between the API and its consuming clients.</div>
          </div>

          <div className="fuzzy">
            <strong>The Shape:</strong>
            <pre className="code-block">
              <code>
{`{
    "name": "Jeff",
    "birth_date": "October 22, 1952"
}`}
            </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thesis;