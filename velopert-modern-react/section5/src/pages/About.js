import { useSearchParams } from "react-router-dom";

function About() {
  const [searchParams] = useSearchParams();
  const detail = searchParams.get("detail") === "true";

  return (
    <div>
      <h1>소개</h1>
      {detail && <p>?detail=true 일 때만 보이는 문장</p>}
    </div>
  );
}

export default About;
