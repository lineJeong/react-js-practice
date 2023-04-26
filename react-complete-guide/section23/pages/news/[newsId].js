// my-domain.com/news/something-important
import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();
  const { newsId } = router.query;
  console.log(newsId);

  return <h1>DetailPage</h1>;
}

export default DetailPage;
