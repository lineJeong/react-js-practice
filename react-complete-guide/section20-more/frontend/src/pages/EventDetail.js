import { useRouteLoaderData, json } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useRouteLoaderData("evnet-detail");

  return <EventItem event={data.event} />;
}

export default EventDetailPage;

export async function loader({ params }) {
  const { eventId } = params;
  const response = await fetch(`http://localhost:8080/events/${eventId}
  `);

  if (!response.ok) {
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    return response;
  }
}
