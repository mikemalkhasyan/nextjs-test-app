import Layout from "../../components/Layout"
import { search } from '../api';
export default function News({ results, query }) {
    return(
        <Layout>
            <h1>Search: {query}</h1>
            {results.map(result => {
                return(
                    <li key={result.uri}>
                        <a href={result.url} target="_blank" rel="noopener norefferer">{result.title}</a>
                    </li>
                )
            })}
        </Layout>
    )
}

const API_KEY = "S94KkDkSRG7qng1LjjmQZDjPUFiIPF0u"
export async function getServerSideProps({ params }) {
    // The value of the `props` key will be
    //  passed to the `Home` component
    const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${params.query}&api-key=${API_KEY}`
    const results = await search(URL)
    return {
        props: {
            results,
            query: params.query
        }
    }
}