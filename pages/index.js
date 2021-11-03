import Head from "next/head";
import Avatar from "../components/Avatar";
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid';
import { SearchIcon } from "@heroicons/react/outline";
import Image from 'next/image';
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import {useRef} from 'react';

export default function Home() {

  const searchInputRef = useRef(null);
  const router = useRouter();

  const search = (e) => 
  {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);

  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
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
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url="https://pbs.twimg.com/profile_images/1449022166930919432/6YdCe7WM_400x400.jpg"/>
        </div>

      </header>

<form className="flex flex-col items-center mt-44 flex-grow w-4/5">
<Image src="https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google" width={300} height={100} />

<div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
  <SearchIcon className="h-5 ml-3 text-gray-500"/>
  <input type="text" className="flex-grow focus:outline-none" ref={searchInputRef}></input>
  <MicrophoneIcon className="h-5"/>
</div>

<div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
  <button className="btn" onClick={search}>Google Search</button>
  <button className="btn" onClick={search}>I'm Feeling Lucky</button>
</div>

</form>

<Footer/>
      
    </div>

    
  );
}
