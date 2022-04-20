import { series } from "./data.js";
function mostrarCursosAprendiz() {
    var seriesTbody = document.createElement("tbody");
    var seriesTable = document.getElementById("tabla-series");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<th scope=\"row\">".concat(serie.id, "</th>\n        <td style=\"color:blue\">").concat(serie.name, "</td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        console.log("se agrego la serie ".concat(serie.name));
    }
    seriesTable.appendChild(seriesTbody);
}
function calcularPromedioSeries() {
    var totalSeasons = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        totalSeasons += serie.seasons;
    }
    return totalSeasons / series.length;
}
function mostrarPromedioSeries() {
    var casillaTabla = document.getElementById("casilla-tabla");
    var promedioSeasons = document.createElement("div");
    promedioSeasons.innerHTML = "<b>Seasons average: ".concat(calcularPromedioSeries(), "</b>");
    casillaTabla.appendChild(promedioSeasons);
}
mostrarCursosAprendiz();
//calcularPromedioSeries();
mostrarPromedioSeries();
