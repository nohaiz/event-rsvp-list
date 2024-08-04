function App() {

  const attendees = [
    {name: 'Alice Johnson', rsvp: true},
    {name: 'Bob Smith', rsvp: false},
    {name: 'Charlie Brown', rsvp: true},
    {name: 'Diana Prince', rsvp: false},
    {name: 'Edward Elric', rsvp: true}
  ];

  return (
    <>
      <h1>Event RSVP List</h1>
      <ul>
        {attendees.map((attendee, index) => 
          <li 
            key={index} 
            className={attendee.rsvp ? 'confirmed' : 'not-confirmed'}
          >
            {attendee.name}
            {attendee.rsvp && <span className="confirmation-message"> (Confirmed)</span>}
          </li>
        )}
      </ul>
    </>
  );
}

export default App;
