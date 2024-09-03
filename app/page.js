

import Link from "next/link";


export default function Home() {
  return (
    <main>
      <h3 className="text-6xl font-bold ">this is Home page</h3>
      <Link href={'/dashboard'}>Go to Dashoboard</Link>
    </main>
  );
}
