import Head from "next/head";
import Header from "../components/Header";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";

function Search({ results }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{`${router.query.term} - Google Search`}</title>
        <meta name="description" content="Google" />
        <link rel="icon" href="https://www.google.com/favicon.ico" />
      </Head>

      <Header />
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const startIndex = context.query.start || "0";

  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
  ).then((res) => res.json());

  return {
    props: {
      results: data,
    },
  };
}
