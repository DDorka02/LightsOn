import { SZINEK } from "./adatok.js";

function letrehozTablazat(lista){
    let txt = ""
    for (let index = 0; index < lista.length; index++) {
        txt += `<div class="kepek" id=${index} style="background-color:${lista[index].szin}">`
       
        txt += "</div>"      
    }
    console.log(txt)
    return txt
    
}

const ELEM = $(".lista")
ELEM.html(letrehozTablazat(SZINEK))


function szinValtozas(lista) {
    const szinValt = $(".kepek")

    szinValt.on("click",function(){
    console.log (event.target.id)
    })

    
    

}
const ELEM2 = $(".lista")
ELEM2.html=szinValtozas(SZINEK)


/*

function listaOsszeAllit(tomb) {
    return tomb
}

const ELEM3 = $(".lista")
ELEM3.html=listaOsszeAllit(SZINEK)

function lekapcsoltLampakSzama(lista) {
    return szam
}

const ELEM2 = $(".lista")
ELEM2.html=lekapcsoltLampakSzama(SZINEK)

*/