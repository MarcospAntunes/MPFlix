import { useState } from 'react'
import Menu from '../../components/Menu'
import MenuMobile from '../../components/MenuMobile'
import defaultPhoto from '../../assets/user.png'
import useAuth from '../../hooks/useAuth'
import { useFavorite } from '../../hooks/useFavorite'
import { ContainerDivConteudoPrincipal } from '../../components/Containers/ContainerDiv'
import { MainHomeAndFavorites } from '../../components/Containers/containerMain'
import { ImgStyled } from '../../components/UserImg'
import { FooterStyled } from '../../components/Footer'
import { CardDataProps } from '../../interfaces/cardData'
import FavoriteList from '../../components/FavoriteList'
import FavoriteModalMovie from '../../components/FavoriteList/FavoriteModalMovie'
import { FavoriteListStyled, FavoriteSection } from './styles'

function Favorites() {
    const [menuIsVisible, setMenuIsVisible] = useState(false)
    const user: any = useAuth()
    const { favorite } = useFavorite()
    function verificaFoto() {
        let photo: string
        if(user.user.photoUrl) {
            photo = user.user.photoUrl
        } else {
            photo = defaultPhoto
        }
        return photo
    }

  return (
    <ContainerDivConteudoPrincipal>
        <ImgStyled src={verificaFoto()} alt="userPhoto" onClick={() => setMenuIsVisible(true)} />
        <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
        <Menu />

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
                        <h2>Não há favoritos!</h2>
                        
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