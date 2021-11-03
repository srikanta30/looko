import Head from 'next/head';
import Header from '../components/Header';

function Search() {
    return (
        <div>
            <Head>
                <title>Search Results - Google Search</title>
                <meta name="description" content="Google" />
        <link rel="icon" href="https://www.google.com/favicon.ico" />
            </Head>

           <Header/>


        </div>
    )
}

export default Search
