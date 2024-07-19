import defaultPhoto from '../../assets/user.png'

export function verificaFoto(user: any) {
    const photo: string = user.user.photoUrl ? user.user.photoUrl : defaultPhoto
    return photo
}

export function verificaNome(user: any) {
    let partsOfNameUser: string[]
    let firstAndLastName: string
    if(user.user.name) {
        partsOfNameUser = user.user.name.split(' ')
        firstAndLastName = `${partsOfNameUser[0]} ${partsOfNameUser[partsOfNameUser.length - 1]}`
    } else {
        firstAndLastName = 'Sem nome'
    }
    return firstAndLastName
} 