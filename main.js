import { SZINEK } from "./adatok.js";

function letrehozTablazat(lista){
    let txt = ""
    for (let index = 0; index < lista.length; index++) {
        txt += `<div class="kepek" style="background-color:${lista[index].szin}">`
       
        txt += "</div>"      
    }
    console.log(txt)
    return txt
    
}





const ELEM = $(".lista")
ELEM.html(letrehozTablazat(SZINEK))





function szinValtozas(tomb) {
    const szinValt = $(".lista")
    szinValt.on("click", function ()  {
        
    });
    
}
const ELEM2 = $(".lista")
ELEM2.html=szinValtozas(SZINEK)





function listaOsszeAllit(tomb) {
    return tomb
}




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