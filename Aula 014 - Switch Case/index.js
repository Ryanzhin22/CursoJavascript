let colocacao = 7

switch (colocacao){
    case 1: 
        console.log('Primeiro Lugar')
        break
    case 2: 
        console.log('Segundo Lugar')
        break
    case 3:
        console.log('Terceiro Lugar')
        break
    case 4: case 5: case 6:
        console.log('Prêmio de Participação')
        break
    default:
        console.log('Fora do pódio')
        break
}