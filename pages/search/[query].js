import Layout from "../../components/Layout"
import { search } from "../api"

export default function News({ results, query }) {
    return(
      <Layout>
          <h1>Search: {query}</h1>
        <ul>
            {results.map(result => {
              return(<li key={result.uri}><a href={result.url} target="_blank" rel="noopener norefferer">{result.title}</a></li>)
            })}
        </ul>
      </Layout>
    )
}

// to register for a new New York Times API KEY, visit : 
const API_KEY = "S94KkDkSRG7qng1LjjmQZDjPUFiIPF0u"
export async function getServerSideProps({  params }) {
  const results = await search(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${params.query}&api-key=${API_KEY}`
  )
  return { props: { results, query: params.query } }

}
