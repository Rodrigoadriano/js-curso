console.log("===== Subsequencia ======")
//Retorna a palavra mais longa dentro de uma array de palavras ["array", ...]
function PalavraMaislonga (array) {
    let maior = ""
    
    for (item of array) {
        if (item.length > maior.length) {
            maior = item
            
                       
        }
    }
    console.log(maior)
    return maior
    




}
// Mapeia uma string em objeto
function Mapa_string(string){
    /// cria um objeto vazio chamado mapa
    let mapa = {}
    

    /// pega a cada letra da string e joga na var letra
    for (let i = 0; i < string.length; i++){
        
        let letra =  string[i];
        
        
    /// Verifica se a letra ja existe dentro do objeto mapa    
        if (mapa[letra]) {
         
           ///Se a letra existir, o índice da letra  será introduzido na array armazenada na propriedade.
           // o push só pode adicionar dentro da array 
           mapa[letra].push(i);
           /// se o item nao existir, ele seria adicionado a mapa com idex i 
        } else {
            ///esta add uma array para cada letra.
            mapa[letra] = [i]
        }   
    }    
    
            
   // }


    return mapa
};
// Verifica se todas as letras da String existem como propiedade do mapa \\ compareLetters
function Subsequencia (string, mapa) {
    let miniindex = 0

    for (const letra of string) {
        if (mapa[letra]) {
            //console.log("Letra " + letra)
            //console.log ("mini "+miniindex)
            miniindex = mini_index(miniindex , mapa[letra])
            //console.log ("mini agora " + miniindex)
            
            
            if (miniindex === false) {
                //console.log("Mini retorna false")
                return false                
            }
        } else {
            //console.log("False 2")
            return false
        }
        
    }   
    return true



}
//Define a menor posição possivel
function mini_index (mini, array){
    for (let item of array) {
        if (item >= mini) {
            //console.log("item : "+  item + " é >= " +" mini: " + mini)
            return item + 1
            
        } else {
            //console.log("item : "+  item + " não é >= " +" mini: " + mini)}
        }
        
    }
    return false



}



let dicionario =  ['art','vascular','avast','javas','vat','ro']
let palavra = "javascript"

function final (palavra, dicionario){
    
    let subs = []
    mapa = Mapa_string(palavra)
    for (let item of dicionario) {
        
        if (Subsequencia(item,mapa)){
            subs.push(item)
            
        } else {
            
        }    


    }

    return PalavraMaislonga(subs)


}


//final(palavra,dicionario)