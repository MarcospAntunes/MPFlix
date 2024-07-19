import { useContext } from "react"
import { FavoritesContext } from "../../contexts"

export function useFavorite() {
  const { favorite, setFavorite } = useContext(FavoritesContext)

  function addFavorite(newFavorite: any) {
    const repeatedFavorite = favorite.some((item: any) => item.id === newFavorite.id)

    let newList = [...favorite]
    if(!repeatedFavorite) {
      newList.push(newFavorite)
      return setFavorite(newList)
    }

    newList = favorite.filter((fav: any) => fav.id !== newFavorite.id)

    return setFavorite(newList)
  }

  return {
    favorite,
    addFavorite,
  }
}