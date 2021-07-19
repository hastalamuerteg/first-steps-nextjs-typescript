import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <div className="flex flex-col justify-center items-center 0 h-screen">
        <h1 className="text-9xl tracking-wide font-bold ">404</h1>
        <p className="font-bold">
          We couldn&apos;t find the page you are looking for.
        </p>
        <Link href="/">
          <a className="text-green-400 font-semibold m-4">← Get back home</a>
        </Link>
      </div>
    </>
  );
}
