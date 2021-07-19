import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import profilePicture from "../../public/images/profile.jpg";
import { user } from "../../components/layout";

export default function FirstUser() {
  return (
    <>
      <Head>
        <title>First User</title>
      </Head>
      <div className="flex flex-col justify-center items-center mx-auto w-full">
        <Image
          src={profilePicture}
          className="rounded-full my-2"
          height={250}
          width={250}
          alt="profile picture"
        />
        <article className="flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl my-2 font-bold">{user.name}</h2>
          <p>{user.description}</p>
          <ul>
            <li>
              <a
                className="inline-block p-2 m-4 bg-green-300 text-gray-700 font-semibold rounded-lg transition-all hover:bg-green-400"
                href="https://www.linkedin.com/in/gabriel--vicente/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="inline-block p-2 bg-green-300 text-gray-700 font-semibold rounded-lg transition-all hover:bg-green-400"
                href="https://github.com/hastalamuerteg"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </article>
        <Link href="/">
          <a className="text-green-500 font-semibold my-2">← Back to home</a>
        </Link>
      </div>
    </>
  );
}
