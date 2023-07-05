import Layout from "../../components/Layout"
import { search } from "../api"
import { NYT_API_KEY } from '../../config/api'

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

export async function getServerSideProps({  params }) {
  const results = await search(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${params.query}&api-key=${NYT_API_KEY}`
  )
  return { props: { results, query: params.query } }

}
