import { useNavigate } from "react-router-dom";
import PageContent from "../components/UI/PageContent";
import { useAuthValue } from "../store/use-auth";

function Profile() {
  const { userInfo } = useAuthValue();
  const navigate = useNavigate();

  return (
    <>
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
        <div>
          <button onClick={() => navigate("withdraw")}>회원탈퇴</button>
        </div>
      </PageContent>
    </>
  );
}

export default Profile;
