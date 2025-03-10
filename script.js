document.addEventListener('DOMContentLoaded', function () {
    initMap();
});

async function initMap() {
    const localizacao = { lat: -23.6533962734696, lng: -46.73776030549706 };
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
    const { InfoWindow } = await google.maps.importLibrary("maps")

    const mapa = new Map(document.getElementById("mapa"), {
        zoom: 20,
        center: localizacao,
        mapId: "DEMO_MAP_ID"
    });

    const contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Minha casa</h1>' +
        '<div id="bodyContent">' +
        "<p>Rua RUA MANOEL BATISTA, 43 - CASA 1,</p>" +
        '<p>Jardim São Luís, São Paulo - SP, 05844-170</p>' +
        "</div>" +
        "</div>";

    const pin = new PinElement({
        background: "#000000",
        borderColor: "#000000",
        glyphColor: "white"
    });

    const marcador = new AdvancedMarkerElement({
        position: localizacao,
        map: mapa,
        title: "Casa da Brenda",
        content: pin.element,
    });

    const infoWindow = new InfoWindow({
        content: contentString,
        ariaLabel: "Casa da Brenda"
    });

    marcador.addListener("click", () => {
        infoWindow.open(mapa, marcador);
    });
}