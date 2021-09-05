// let edits = [
//     ['Xi', 'Sidhe'],
//     ['seashells', 'diamonds'],
//     ['by the seashore', 'on the soles of her shoes']
// ];

// let texto = 'O rato roeu a roupa do rei de roma, Xi'

// for (let element of edits) {
//     let nova = texto.replace(element[0], element[1])
    
// console.log(nova)
// }

// ////////////////////////////////////////////////////////////

// let spreadsheetId = '114hEvWFEbgwmk9TIF54m6bRM6Nb-anMXF4G4qN1cufY';
// let contractId = '226uAXY0YRUj-HMW5LQZ2YeeJgyDqmJTpnzRkGmFLch0';


// function makeCopy(id, name) {
//   let file = DriveApp.getFileById(id);
//   let copy = file.makeCopy(name);
//   return copy.getId();   
// }

// function updateDoc(doc, edits) {
//   for (let edit of edits) {
//     doc.replaceText(edit[0], edit[1]);
//   }
// }

// function main() {
//   let sheet = SpreadsheetApp.openById(spreadsheetId);
//   let values = sheet.getRange("A2:C5").getValues();
 
//   for (let row of values) {
//     let copyId = makeCopy(contractId, row[0] + ' Contract');
//     let copy = DocumentApp.openById(copyId)
//     let edits = [ 
//         [ 'CLIENT', row[0] ], 
//         [ 'FEE', row[1] ], 
//         [ 'SERVICE', row[2] ] 
//         ] 
        
//     updateDoc(copy,edits)
//     console.log(edits)
//   }
// }

// main();
///////////////////////////////////////////

let lista = ['banana', 'maça', 'pera','abacate', 'pera', 'acerola']




let obj = [
    item = 'carro',
    preco = 30000,

]

let numeros = [1,2,3,4,5,6,7,8,9]
// console.log(lista.shift())
// lista.shift()

// console.log(lista)
// function addlista (str){
//     lista.unshift(str)
// }
// addlista('kerolain')

// lista.reverse()
//console.log(lista)

// let pr = (n) => {
//     return n[0]
// }

// console.log(pr(obj))

// let doubled = numeros.map(i => {return i  })

const Arraydeobjetos = [
    {parametro: 'p.parametro', SegundoParametro: "valor 2" , TerceiroParametro: 10},
    {parametro: '2 parametro', SegundoParametro: "valor 2" , TerceiroParametro: 20},
    {parametro: '3 parametro', SegundoParametro: "valor 2" , TerceiroParametro: 30},
    {parametro: '4 parametro', SegundoParametro: "valor 2" , TerceiroParametro: 40},
]




//let reduce = Arraydeobjetos.reduce((A, B) => {return A + B.TerceiroParametro },00)
let price = Arraydeobjetos.map((i)=> {return i.TerceiroParametro});

console.log(price)




