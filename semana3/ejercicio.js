{const products = [];
  // const myList = document.querySelector('ul');
  const myRequest1 = new Request('https://gist.githubusercontent.com/josejbocanegra/be0461060d1c2d899740b8247089ba22/raw/916d2141e32e04031bda79c8886e8e4df0ae7f24/productos.json');
fetch(myRequest1)
  .then((response) => response.json())
  .then((data) => {
      const myRequest1 = new Request('https://gist.githubusercontent.com/josejbocanegra/7b6febf87e9d986048a648487b35e693/raw/576531a2d0e601838fc3de997e021816a4b730f8/detallePedido.json');
  fetch(myRequest1)
    .then((response) => response.json())
    .then((data2) => {
      for (const i in data) {
        const product = {idProduct: data[i].idproducto,
                        nameProduct: data[i].nombreProducto,
                        cantidad: 0,};
        products.push(product)
      }
      for (const i in data2){
        for(const j in products){
          if(data2[i].idproducto==products[j].idProduct){
            products[j].cantidad+=parseInt(data2[i].cantidad)
          }
        }
      }
      products.sort(function(a,b) {
        return b.cantidad - a.cantidad;
      });
      // console.log(products)
      console.log(products[0].nameProduct,products[0].cantidad)
    })    
    .catch(console.error);
  })
  .catch(console.error);
}