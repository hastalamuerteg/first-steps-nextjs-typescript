import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const user = {
  name: "Gabriel",
  description: "Frontend developer at the brooklyn brothers",
};
export const siteTitle = "Next.js Sample Website";

interface ILayout {
  children: React.ReactNode;
  home?: boolean;
}

export default function Layout({ children, home }: ILayout) {
  return (
    <div className="flex flex-col justify-center items-center w-4/5 py-4 px-1 mx-auto my-2">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="flex flex-col items-center h-auto p-4 ">
        {home ? (
          <>
            <Image
              priority
              className="rounded-full"
              src="/images/profile.jpg"
              height={144}
              width={144}
              alt={user.name}
            />
            <h1 className="text-2xl font-bold">{user.name}</h1>
          </>
        ) : (
          <>
            <Image
              priority
              className="rounded-full"
              src="/images/profile.jpg"
              height={108}
              width={108}
              alt={user.name}
            />

            <h2 className="text-xl">{user.name}</h2>
          </>
        )}
      </header>
      <main className="py-6 px-2 space-y-2 rounded-lg">{children}</main>
      {!home && (
        <div className="my-4">
          <Link href="/">
            <a className="text-green-500 font-semibold">← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
