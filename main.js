import { SZINEK } from "./adatok.js";

//const SZINEK =  []

/*function tablazatOsszeallit(){
    for (let index = 0; index < SZINEK.length; index++) {
        SZINEK[index] = Math.random()*100;
        if (SZINEK[index] < 20) {
            korok = `red`
        }
        else {
            korok = `blue`;
        }        
    }
}
const ELEM = $(".lista")
ELEM.html(letrehozTablazat(SZINEK))
*/

function letrehozTablazat(lista){
    let txt = ""
    for (let index = 0; index < lista.length; index++) {
        txt += `<div class="kepek" id=${index} style="background-color:${lista[index].szin}">`
       
        txt += "</div>"      
    }
    console.log(txt)
    return txt
    
}

const ELEM2 = $(".lista")
ELEM2.html(letrehozTablazat(SZINEK))



/*function szinValtozas(lista) {
    const szinValt = $(".kepek")
        
    szinValt.on("click",function(){
    console.log (event.target.id)
    })

    
    

}
const ELEM3= $(".lista")
ELEM3.html=szinValtozas()*/

function listaOsszeAllit(tomb) {
    tomb = []
    for (let index = 0; index < SZINEK.length; index++) {
        if (SZINEK[index].szin = 'red') {
            SZINEK.szin = '<br>'
        }
        else {
            SZINEK.szin = ''
        }        
    }
    return tomb
}
const ELEM4 = $(".lista")
ELEM4.html=listaOsszeAllit(SZINEK)
/*
function lekapcsoltLampakSzama(lista) {
    return szam
}

const ELEM5 = $(".lista")
ELEM5.html=lekapcsoltLampakSzama(SZINEK)

*/