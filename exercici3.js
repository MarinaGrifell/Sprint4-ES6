/* Donat el següent array de strings, mostrar per consola la frase completa usant .reduce()
var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

Resultat per consola: 'a long time ago in a galaxy far far away'

Nota: no fa falta fer un "join".*/

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const resultat = epic.reduce((frase, parte) => {
    return (frase = frase + parte + ' ')
  }, '')
  
  console.log(resultat)