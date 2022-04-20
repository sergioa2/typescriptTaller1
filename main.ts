import {series} from "./data.js";





function mostrarCursosAprendiz():void{
    let seriesTbody: HTMLElement = document.createElement("tbody");
    let seriesTable: HTMLElement = document.getElementById("tabla-series")!;
    for(let serie of series)
    {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `<th scope="row">${serie.id}</th>
        <td style="color:blue">${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>`
        seriesTbody.appendChild(trElement);
        console.log(`se agrego la serie ${serie.name}`);
    }
    seriesTable.appendChild(seriesTbody);

}

function calcularPromedioSeries():number{
    let totalSeasons:number = 0;
    for(let serie of series)
    {
        totalSeasons+=serie.seasons
    }
    return totalSeasons/series.length;
}

function mostrarPromedioSeries():void{
    let casillaTabla: HTMLElement = document.getElementById("casilla-tabla")!;
    let promedioSeasons: HTMLElement = document.createElement("div");
    promedioSeasons.innerHTML=`<b>Seasons average: ${calcularPromedioSeries()}</b>`;
    casillaTabla.appendChild(promedioSeasons);

}


mostrarCursosAprendiz();
//calcularPromedioSeries();
mostrarPromedioSeries();