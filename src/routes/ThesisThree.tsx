function ThesisTwo() {
  return (
    <div>
      <h2 style={{fontSize: '18px'}}>Thesis</h2>
      <div style={{ fontFamily: 'monospace', fontSize: '14px', lineHeight: '1.5' }}>
        <p>
          What if we could adjust object 1 into object 2's shape or vice versa on the fly to ensure that the client keeps operating?
        </p>
        <pre style={{ backgroundColor: '#f4f4f4', padding: '1rem', borderRadius: '4px' }}>
          <code>{`{name: "Gibraltar", bar_date: "12-12-90"} ⇄ {name: "Gibraltar", foo_date: "12-12-90"}`}</code>
        </pre>

        <p>Now our PR structure looks like this:</p>
        <ol>
          <li>Server side adds "bar_date" to AND REMOVES "foo_date" from the data sent to the client</li>
          <li>Client receives both dates but replaces all instances of "foo_date" with "bar_date"</li>
        </ol>
        <p>Only 2 PRs that can be released in any order.</p>
        <ul>
          <li>✅ Server can safely remove foo_date immediately</li>
          <li>✅ Client can automatically convert bar_date to foo_date or vice versa</li>
          <li>✅ Both client and server changes can happen independently</li>
        </ul>

        <div>
          So my question is, can AI help us adjust our currently strict contracts into something a little fuzzier? 
        </div>
      </div>
    </div>
  );
}

export default ThesisTwo;