import Link from "next/link";
import SignUp from "./signup";

export default function Home() {
  return (
    <div className=" bg-white">
      <SignUp/>
      <Link
        href="/homepage"
        className="text-lg text-red-600 font-semibold underline hover:no-underline"
      >
      </Link>
    </div>
  );
}