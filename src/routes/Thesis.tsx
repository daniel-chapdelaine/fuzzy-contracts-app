function Thesis() {
  return (
    <div>
      <h2 style={{fontSize: '18px'}}>Thesis</h2>
      <div style={{ fontFamily: 'monospace', fontSize: '14px', lineHeight: '1.5' }}>
        <p style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            Contracts are essential for reliable communication between client-side and server-side code. 
            Without well-defined data structures, errors can occur, sometimes these errors are severe enough 
            to bring down the entire application.
          </div>
          
          <div>
            As developers, we plan carefully whenever we change our data structure. Often, this planning involves 
            creating multiple pull requests just to manage these data updates.
          </div>
          
          <div>
            For example, imagine our client uses a field called "foo_date" for certain decisions. However, we 
            realize "foo_date" isn’t quite accurate. Instead, we want to use a new, more descriptive field called "bar_date".
            To accomplish this, developers typically replace "foo_date" with "bar_date" on both the client and the server.
          </div>

          <div>
            This process usually involves the following steps:
          </div>
        </p>
      </div>
    </div>
  );
}

export default Thesis;