import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <Link
        href="/homepage"
        className="text-lg text-red-600 font-semibold underline hover:no-underline"
      >
        Homepage
      </Link>
    </div>
  );
}