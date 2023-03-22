import EventsList from "../components/EventsList";

const EVENTS = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80​",
    title: "TITLE 1",
    date: "2022-03-22",
    description: "description 1",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1587691592099-24045742c181?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80​",
    title: "TITLE 2",
    date: "2022-03-22",
    description: "description 2",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80​",
    title: "TITLE 3",
    date: "2022-03-22",
    description: "description 3",
  },
];

function EventsPage() {
  return (
    <>
      <h1>EventsPage</h1>
      <EventsList events={EVENTS} />
    </>
  );
}

export default EventsPage;
