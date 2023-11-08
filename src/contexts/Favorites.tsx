import { ReactNode, createContext, useState } from "react";

export const FavoritesCotenxt = createContext<any>("")
FavoritesCotenxt.displayName = "myFavorites"

export default function FavoritesProvider(children: ReactNode) {
    const [ favorite, setFavorite ] = useState([])

    return (
        <FavoritesCotenxt.Provider value={{favorite, setFavorite }}>
            {children}
        </FavoritesCotenxt.Provider>
    )
}