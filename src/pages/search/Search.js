import { useFetch } from '../../hooks/useFetch'
import { useLocation } from 'react-router-dom'

// styles
import './Search.css'

//components
import RecipeList from '../../components/RecipeList'

export default function Search() {
  const { search } = useLocation()
  const queryParams = new URLSearchParams(search)
  const query = queryParams.get('q')

  const url = `http://localhost:3001/recipes?q=${query}`
  const { data, isPending, error } = useFetch(url)
  return (
    <div className="search">
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}
