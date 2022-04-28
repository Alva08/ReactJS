const productos = [
    {id: 1, nombre: "Cinta destapa cañeria", precio: 200, img: `../imagenes/cintadestapacaneria.jpg`},
    {id: 2, nombre: "Arco de sierra", precio: 150, img: `../imagenes/hojasdesierra.jpg`},
    {id: 3, nombre: "Plomada de albañil", precio: 100, img: `../imagenes/plomadas.jpg`},
    {id: 4, nombre: "Poleas de transmision", precio: 75, img: `../imagenes/poleas.jpg`},
    {id: 5, nombre: "Roldana", precio: 120, img: `../imagenes/roldana.jpg`},
    {id: 6, nombre: "Tensor", precio: 80, img: `../imagenes/tensores.jpg`},
    {id: 7, nombre: "Rastrillo", precio: 180, img: `../imagenes/rastrillos.jpg`},
    {id: 8, nombre: "Barrehojas", precio: 160, img: `../imagenes/barrehojas.jpg`},
    {id: 9, nombre: "Sapito rociador", precio: 50, img: `../imagenes/sapito.jpg`},
    {id: 10, nombre: "Rastrillo de mano", precio: 95, img: `../imagenes/rastrillodemano.jpg`},
    {id: 11, nombre: "Saca yuyo", precio: 75, img: `../imagenes/sacayuyo.jpg`},
    {id: 12, nombre: "Palita de jardineria", precio: 130, img: `../imagenes/palas.jpg`}
];

const getData = new Promise( (resolve) => {
    setTimeout(() => {
        resolve(productos);
    },2000);
})

export default getData;