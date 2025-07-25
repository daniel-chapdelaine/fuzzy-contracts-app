function ThesisTwo() {
  return (
    <div>
      <h2 style={{fontSize: '18px'}}>Thesis</h2>
      <div style={{ fontFamily: 'monospace', fontSize: '14px', lineHeight: '1.5' }}>
        <p>Now our PR structure looks like this:</p>
        <ol>
          <li>Server side adds "bar_date" to AND REMOVES "foo_date" from the data sent to the client</li>
          <li>Client receives both dates but replaces all instances of "foo_date" with "bar_date"</li>
        </ol>
        <p>Now 2 PRs that can be released in any order.</p>
        <ul>
          <li>✅ Server can safely remove foo_date immediately</li>
          <li>✅ Client can automatically convert bar_date to foo_date or vice versa</li>
          <li>✅ Both client and server changes can happen independently</li>
        </ul>

        <div>
          My question is, could AI help us adjust our currently strict contracts something a little fuzzier?
        </div>
      </div>
    </div>
  );
}

export default ThesisTwo;