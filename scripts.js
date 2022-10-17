const SHEET_ID = "1mPDXNtjWdkh5RG-VErdp8tJByryHtc-22JORcdzzoI4";

const ACCESS_TOKEN =
  "ya29.a0Aa4xrXP2BtI1dz46yVh2GjjLkoj619GC8wcEig1DKQLxL4vEbOBB3ATj_4SXw2GhwEIsdf7pGywg5T6Pmxi6kW5w1vI9qBSNX-OH7i7FB68es7q6PxHqCCO9U4gfqrQmeflfeR1Aet-uzoGJJq4G0EcDdugLaCgYKATASARMSFQEjDvL9CyKGFm_5_TEf3Ll-aU9q2A0163";

fetch(
  // Obtenemos los datos de la planilla, de la hoja hojaMenu, columnas A y B desde la segunda fila
  `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/almuerzo!A2:C`,
  {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  }
//esperamos el response

).then(function (response) {
    //esperamos el json del response para poder utilizarlo
    response.json().then(function (data) {
    const values = data.values;

    // Obtenemos el elemento del dom
    const lista = document.getElementById("lista-menu");

    for (var i = 0; i < values.length; i++) {

        // Div que va a contener los datos del producto
        const producto = document.createElement("div");
        producto.className =  "menu-item";

        // Nombre del producto
        const itemProducto = document.createElement("span");
        itemProducto.className = "item producto";
        itemProducto.innerHTML = values[i][0]; 

        // Precio
        const itemPrecio = document.createElement("span");
        itemPrecio.className = "item precio";
        itemPrecio.innerHTML = values[i][2];

        // Agregamos todos los elementos al div de producto
        producto.appendChild(itemProducto);
        producto.appendChild(itemPrecio);

        // Agregamos el producto a la lista
        lista.appendChild(producto);
    }
    });
});
