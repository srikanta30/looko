import Head from "next/head";
import Avatar from "../components/Avatar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
        <meta name="description" content="Google" />
        <link rel="icon" href="https://www.google.com/favicon.ico" />
      </Head>

      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center"></div>

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <Avatar url="https://pbs.twimg.com/profile_images/1449022166930919432/6YdCe7WM_400x400.jpg"/>
        </div>
      </header>

      {/* Body */}

      {/* Footer */}
    </div>
  );
}
