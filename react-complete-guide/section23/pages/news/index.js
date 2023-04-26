// my-domain.com/news
import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>NewsPage</h1>
      <ul>
        <li>
          <Link href="/news/nextjs">NextJS</Link>
        </li>
        <li>else</li>
      </ul>
    </>
  );
}

export default NewsPage;
