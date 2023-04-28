import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image="https://plus.unsplash.com/premium_photo-1682192408126-70498c5f488b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1732&q=80"
      title="title1"
      address="address1"
      description="description1"
    />
  );
}

export async function getStaticProps(context) {
  //fetch data form a single meetup
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://plus.unsplash.com/premium_photo-1682192408126-70498c5f488b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1732&q=80",
        title: "title1",
        address: "address1",
        description: "description1",
      },
    },
  };
}

export default MeetupDetails;
