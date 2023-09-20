// pages/html-page.js
import Link from 'next/link';

export default function HtmlPage() {
  return (
    <div>
      <h1>This is an HTML Page</h1>
      <Link href="/index.html">
        <a>Go to Your HTML File</a>
      </Link>
    </div>
  );
}
