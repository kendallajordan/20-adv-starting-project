import { Link } from "react-router-dom";

function EventsPage() {
  const DUMMY_EVENTS = [
    {
      id: "e1",
      title: "Beach Party",
      date: "04-20-2023",
      description: "Gonna blaze it!",
    },
    {
      id: "e2",
      title: "Buffet",
      date: "01-23-2023",
      description: "Gonna eat!",
    },
    {
      id: "e3",
      title: "School Reunion",
      date: "06-20-2023",
      description: "Gonna reunite!",
    },
  ];

  return (
    <>
      <h1>Events</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;
