import { useState } from 'react'
import { useAuth, useFavorite } from '../../hooks'
import { CardDataProps } from '../../interfaces/cardData'
import { FavoriteListStyled, FavoriteSection } from './Favorites.style'
import { verificaFoto } from '../../utils'
import { 
  MenuMobile, 
  Menu,
  ContainerDivConteudoPrincipal, 
  MainHomeAndFavorites, 
  ImgStyled, 
  FooterStyled, 
  FavoriteList, 
  FavoriteModalMovie 
} from "./../../components"

function Favorites() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)
  const user: any = useAuth()
  const { favorite } = useFavorite()

  return (
    <ContainerDivConteudoPrincipal>
      <ImgStyled src={verificaFoto(user)} alt="userPhoto" onClick={() => setMenuIsVisible(true)} />
      <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
      <header>
        <Menu />
      </header>
      <MainHomeAndFavorites>
        <FavoriteSection>
          <>
            {favorite.length > 0 ? 
              <FavoriteListStyled>
                  {favorite.map((movie: CardDataProps, index:number) => (
                    <FavoriteList
                      key={`${movie.id}-${index}`}
                      id={movie.id}
                      genre_ids={movie.genre_ids}
                      poster={movie.poster}
                      title={movie.title}
                      release_date={movie.release_date}
                      overview={movie.overview}
                      vote_average={movie.vote_average}
                    />
                  ))}
              </FavoriteListStyled>
            :
                <h2>There are no favorites!</h2>
            }
          </>
        </FavoriteSection>
        <FavoriteModalMovie />
      </MainHomeAndFavorites>
      <FooterStyled>
        <h2>Developed by Marcos Antunes</h2>
        <h2>Design based on design made by <a href="https://dribbble.com/apurple" target="_blank">aPurple</a></h2>
      </FooterStyled> 
    </ContainerDivConteudoPrincipal>
  )
}

export default Favorites