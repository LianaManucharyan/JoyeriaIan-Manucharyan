const products = [
{
    id: "aros1",
    name: "Aros Jazmín",
    description: "Aros Jamín color dorado",
    price: 10000,
    stock: 5,
    image: "/public/img/producto1Aros.jpg",
    category: "aros"
},
{
    id: "anillo1",
    name: "Anillo Amistad",
    description: "Anillo Amistad color corado",
    price: 3000,
    stock: 5,
    image: "/public/img/producto2Anillo.jpg",
    category: "anillos"
},
{
    id: "aros2",
    name: "Aros Lazos",
    description: "Aros Lazos color dorado",
    price: 3000,
    stock: 5,
    image: "/public/img/producto3Aros.jpg",
    category: "aros"
},
{
    id: "aros3",
    name: "Aros Colgantes",
    description: "Aros Colgantes color dorado",
    price: 3000,
    stock: 5,
    image: "/public/img/producto4Aros.jpg",
    category: "aros"
},
{
    id: "pulsera1",
    name: "Pulsera Cadena",
    description: "Pulsera Cadena color dorado",
    price: 3000,
    stock: 3,
    image: "/public/img/producto5Pulsera.jpg",
    category: "pulseras"
},
{
    id: "aros4",
    name: "Aros Gota",
    description: "Aros Gota color dorado",
    price: 2000,
    stock: 6,
    image: "/public/img/producto6Aros.jpg",
    category: "aros"
},
{
    id: "collar1",
    name: "Collar Fem",
    description: "Collar Fem color dorado",
    price: 2000,
    stock: 5,
    image: "/public/img/producto7Collar.jpg",
    category: "collar"
},
{
    id: "pulsera2",
    name: "Pulsera Esperanza",
    description: "Pulsera Esperanza color dorado",
    price: 3000,
    stock: 5,
    image: "/public/img/producto8Pulsera.jpg",
    category: "pulseras"
},
{
    id: "pulsera3",
    name: "Pulsera Circuitos",
    description: "Pulsera Circuitos color dorado",
    price: 10000,
    stock: 5,
    image: "/public/img/producto9Pulsera.jpg",
    category: "pulseras"
},
]

//obtener productos
const getProducts = () => {
    return new Promise((resolve, reject) => {
        //Simulamos un retraso de red
        setTimeout( ()=>{
          resolve(products)
        }, 2000 )
    })
}

export {getProducts}