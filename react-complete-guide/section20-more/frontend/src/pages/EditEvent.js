import { useRouteLoaderData } from "react-router-dom";

import EventForm from "../components/EventForm";

function EditEventPage() {
  const data = useRouteLoaderData("evnet-detail");

  return <EventForm method="patch" event={data.event} />;
}

export default EditEventPage;
