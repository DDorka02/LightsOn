import { SZINEK } from "./adatok.js";

function letrehozTAblazat(tomb){
    let txt = "<table>"
    for (let index = 0; index < tomb.length; index++) {
        txt += "<tr>"
        txt += "<td>"+GYUMOLCSOK[index].nev+"</td>"
        txt += "<td>"+GYUMOLCSOK[index].tomeg+"</td>"
        txt += "<td>"+GYUMOLCSOK[index].ar+"</td>"
        txt += "</tr>"  
    }
    txt += "</table>"
    console.log(txt)

    return txt

}