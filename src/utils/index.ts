import filterMoviesByGenre, { genreIdsToNames } from "./filterMoviesByGenre"
import { numeroAleatorio } from "./numeroAleatorio"
import returnGenres from "./returnGenres"
import { ResizeCarrosselWidth, handleScroll } from "./resizeCarosselFunction"
import { verificaFoto, verificaNome } from "./userFunctions"
import { handleLogin, handleRegister } from "./validaFormFunctions"
import { 
    deleteAccount, 
    handleInputChange, 
    enableEdition, 
    handlePhotoChange, 
    saveChanges 
} from "./accountActions"

export {
    ResizeCarrosselWidth,
    deleteAccount,
    enableEdition,
    filterMoviesByGenre,
    handleInputChange,
    handleLogin,
    handlePhotoChange,
    handleRegister,
    handleScroll,
    saveChanges,
    verificaFoto,
    verificaNome,
    returnGenres,
    numeroAleatorio,
    genreIdsToNames,
}