
console.log('Ok')


let pessoa1 = {
    nome : "Rodrigo",
    idade : 28,
    sobrenome : "adriano",
    namorada : true,
    NomeNamorada : "kero",
    };

let pessoa2 = {
    nome: "Kerolain",
    sobrenome : "Nunes",
    idade: 25,


};
let pessoa3 ={nome: "Felipe" , idade: 20, sobrenome: "Adriano"}


let comidas = {
    frutas : ["maça","abacate",'banana','abacaxi', 'coco'],
    bebidas: ["suco"],

};
//console.log(comidas.bebidas)

//console.log(comidas.frutas.length)

function teste (A){
    comidas.bebidas.push = A
    return comidas.bebidas
};

//teste("Rodrigo");

function dizernome (cara){
       console.log("olá, meu nome é " + cara.nome + " " + cara.sobrenome  ) 
    return cara.nome

}

//let A = dizernome(pessoa1)

//let B = dizernome(pessoa2)



//console.log("testados"+" " + A + " e " + B)

//if (A === pessoa1.nome){
    //console.log("A é igual a Rodrigo")}
//else{
    //console.log("A não é rodrigo. A é igual a " + A)

//}




//console.log('fim')

let pessoas = [pessoa1, pessoa2, pessoa3]

function cadanome (lista){
    for (var item of lista){
        /// item.idade ou item["idade"]?
        if (item.idade> 18){
         //console.log(item.nome + ' '+ item.idade + " anos")
         dizernome(item)

        }   else {
                console.log(item.nome + " " + "é menor que 18")
        }

         
   

        
    }


        
};

///cadanome(pessoas)


function check(space, word) { 
    if (space.length !== word.length ) { 
        return false; 
    } 

    
        for (let i = 0; i < space.length; i++) { 
                if (space[i] !== '-' && space[i] !== word[i]) { 
                    return false; 
                } 
            } 
        return true;
};

// function mapString(string​) { 
//     let map = {}; 
//     for (let i = 0; i < string​.length; i++) { 
//     let letra = string[i]; 

//     if (map[letra]) { 
//     map[letra]​.push(i); 
//     } else { 
//     map[letra] = [i]; 
//     } 
//     } 
//     return map; 
// }; 

function mapastring(string){
    /// cria um objeto vazio chamado mapa
    let mapa = {};
    console.log(string)

    /// pega a cada letra da string e joga no let letra
    for (let i in string) {
        
        let letra =  string[i];
        
    /// Verifica se a letra ja existe dentro do objeto mapa    
        if (mapa[letra]) {
         
           ///Se a letra existir, o índice da letra  será introduzido na array armazenada na propriedade.
           // o push só pode adicionar dentro da array 
           mapa[letra].push(i);
           /// se o item nao existir, ele seria adicionado a mapa com idex i 
        } else {
            ///esta add uma array para cada letra.
            mapa[letra] = [i]}
    }    
    
            
   // }


    return mapa
};

//var ooo = (mapastring("Massaranduba"))



