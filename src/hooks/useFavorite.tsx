/* eslint-disable prefer-const */
import { useContext } from "react";
import { FavoritesCotenxt } from "../contexts/Favorites";

export function useFavorite() {
    const { favorite, setFavorite } = useContext(FavoritesCotenxt)

    function addFavorite(newFavorite: any) {
        const repeatedFavorite = favorite.some((item: any) => item.id === newFavorite.id)

        let newList = [...favorite]
        if(!repeatedFavorite) {
            newList.push(newList)
        }

        newList = favorite.filter((fav: any) => fav.id !== newFavorite.id)
        return setFavorite(newList)
    }

    return {
        favorite,
        addFavorite
    }
}