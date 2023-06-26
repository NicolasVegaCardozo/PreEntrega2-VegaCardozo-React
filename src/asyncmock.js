const misProductos = [
    {id:"1", nombre: "PC AMD RYZEN 7 5700G 8GB SSD 240GB", precio: 1000, img: "../img/pc1.jpg", idCat: "1"},
    {id:"2", nombre: "PC INTEL CORE I7 11700 SSD 240GB 16GB", precio: 1000, img: "../img/pc2.jpg", idCat: "1"},
    {id:"3", nombre: "PC AMD GAMER KAIROS ULTIMATE RYZEN 5 5600G 16GB SSD 240GB RTX 3070", precio: 1000, img: "../img/pc3.jpg", idCat: "1"},
    {id:"4", nombre: "PC AMD GAMER KAIROS ULTIMATE RYZEN 7 4750G 16GB SSD 240GB RTX 3070", precio: 1000, img: "../img/pc4.jpg", idCat: "1"},
    {id:"5", nombre: "PC INTEL GAMER KAIROS ULTIMATE I7 10700F 16GB SSD 240GB RTX 3070", precio: 1000, img: "../img/pc5.jpg", idCat: "1"},
    {id:"6", nombre: "NOTEBOOK LENOVO V15 PENTIUM N5030 4GB 1TB 15.6 FREE", precio: 800, img: "../img/notebook1.jpg" , idCat: "2"},
    {id:"7", nombre: "NOTEBOOK LENOVO V15 I3 10110U 8GB 1TB 15.6 FREE", precio: 800, img: "../img/notebook2.jpg" , idCat: "2"},
    {id:"8", nombre: "NOTEBOOK LENOVO V15 G2 I7 1165G7 8GB 1TB 15.6 FREE2", precio: 800, img: "../img/notebook3.jpg" , idCat: "2"},
    {id:"9", nombre: "NOTEBOOK ASUS TUF GAMING A15 FA506ICB-HN118W RYZEN 7 4800H 16GB SSD 512GB RTX 3050 15.6 W11", precio: 800, img: "../img/notebook4.jpg" , idCat: "2"},
    {id:"10", nombre: "NOTEBOOK GIGABYTE G5 15 I5 11400H RTX 3050 TI 16GB 512GB 15.6 W10", precio: 800, img: "../img/notebook5.jpg" , idCat: "2"},
    {id:"11", nombre: "SILLA GAMER AUREOX G400 NEGRA Y ROJO", precio: 800, img: "../img/sillagamer1.jpg" , idCat: "3"},
    {id:"12", nombre: "ESCRITORIO GAMER AEROCOOL THUNDERX3 ED5", precio: 800, img: "../img/escritorio.jpg" , idCat: "3"},
    {id:"13", nombre: "MONITOR GIGABYTE 27 G27F IPS 144HZ 1MS", precio: 700, img: "../img/monitor.jpg" , idCat: "4"},
    {id:"14", nombre: "TECLADO GAMER RAZER HUNTSMAN V2 SP CLICKY PURPLE", precio: 100, img: "../img/perifericos.jpg" , idCat: "5"},
    {id:"15", nombre: "PLACA DE VIDEO ASUS NVIDIA GEFORCE GTX 1650 OC PHOENIX 4GB DDR5", precio: 800, img: "../img/placadevideo.jpg" , idCat: "6"},
    {id:"16", nombre: "MICROPROCESADOR AMD RYZEN 7 5800X3D 4.5GHZ SIN COOLER ZEN3", precio: 800, img: "../img/microprocesador.jpg" , idCat: "6"},
    {id:"17", nombre: "MICROPROCESADOR INTEL CORE I7 11700K ROCKET LAKE 8/16 5GHZ", precio: 800, img: "../img/microprocesador1.jpg" , idCat: "6"},
    {id:"18", nombre: "MOTHERBOARD ASUS PRIME B560-PLUS AC-HES S1200", precio: 500, img: "../img/motherboard.jpg" , idCat: "6"},
    {id:"19", nombre: "MEMORIA RAM DDR4 16GB 3600MHZ PATRIOT VIPER STEEL RGB CL20", precio: 300, img: "../img/memoriaram.jpg" , idCat: "6"},
    {id:"20", nombre: "DISCO DURO HDD 1 TB WESTERN DIGITAL WD SATA III 64MB/S PURPLE", precio: 100, img: "../img/discoduro.jpg" , idCat: "6"},
    {id:"21", nombre: "DISCO SOLIDO SSD 240GB KINGSTON A400 SATA III", precio: 200, img: "../img/discossd.jpg" , idCat: "6"},
    {id:"22", nombre: "FUENTE GAMEMAX 500W VP-500 80+ BRONZE", precio: 50, img: "../img/fuente.jpg" , idCat: "6"},
    {id:"23", nombre: "WATER COOLER REDRAGON EFFECT X ARGB 240 CCW-3000", precio: 20, img: "../img/cooler.jpg" , idCat: "6"},
    {id:"24", nombre: "FAN COOLER FALCOM AS-01 ARGB", precio: 30, img: "../img/fancooler.jpg" , idCat: "6"},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)

    })
}


// Creamos una funcion similar a la anterior pero que nos retorne un solo item:

export const getUnProducto = (id) => {
    return new Promise( resolve => {
        setTimeout( () => {
            const producto = misProductos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}


// Creamos una funcion que retorna toda una categoría.

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout( ()=>{
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria)
        }, 100)
    })
}