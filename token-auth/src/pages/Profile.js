import PageContent from "../components/UI/PageContent";
import { useAuthValue } from "../store/use-auth";

function Profile() {
  const { userInfo } = useAuthValue();

  return (
    <PageContent>
      <h1>프로필</h1>
      <div>
        <p>
          <strong>[ email ]</strong> {userInfo.email}
        </p>
        <p>
          <strong>[ nickname ]</strong> {userInfo.nickname}
        </p>
      </div>
    </PageContent>
  );
}

export default Profile;
