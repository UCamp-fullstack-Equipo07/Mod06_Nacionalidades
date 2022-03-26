function getNumNat(){
    let turistas=[];
    for (let i = 0; i < 8; i++) {

        turistas[i]=
            {nombre: document.getElementById('input-nombre0'+(i+1)).value,
            edad: document.getElementById('input-edad0'+(i+1)).value,
            nacionalidad: document.getElementById('dropdown0'+(i+1)).value,}
    }
    let Mexico=turistas.filter(function (item){return item.nacionalidad==='Mexicano'});
    console.log(`Mexicanos: ${Mexico.length}`);

    let Peru=turistas.filter(function (item){return item.nacionalidad==='Peruano'});
    console.log(`Peruanos: ${Peru.length}`);

    let Argentina=turistas.filter(function (item){return item.nacionalidad==='Argentino'});
    console.log(`Argentinos: ${Argentina.length}`);

    let Venezuela=turistas.filter(function (item){return item.nacionalidad==='Venezolano'});
    console.log(`Venezolanos: ${Venezuela.length}`);

    document.getElementById('main-result').innerHTML=`Mexicanos: ${Mexico.length}`+`<br/>Peruanos: ${Peru.length}`+`<br/>Argentinos: ${Argentina.length}`+`<br/>Venezolanos: ${Venezuela.length}`
}

