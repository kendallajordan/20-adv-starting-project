import { useParams, Link } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Event Detail</h1>
      <p>EVENT ID: {params.eventId}</p>
      <Link to=".." relative="path">Go Back</Link>
    </>
  );
}

export default EventDetailPage;
