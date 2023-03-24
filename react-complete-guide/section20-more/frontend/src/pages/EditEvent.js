import { useRouteLoaderData } from "react-router-dom";

import EventForm from "../components/EventForm";

function EditEventPage() {
  const data = useRouteLoaderData("evnet-detail");

  return <EventForm event={data.event} />;
}

export default EditEventPage;
