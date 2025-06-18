import borsamare from "../../assets/imgs/borsamare.jpg";
import borsamare2 from "../../assets/imgs/borsabluy.jpg";
import borsamare3 from "../../assets/imgs/borsanera.jpg";
import borsabeige from "../../assets/imgs/borsabeige.jpg";
import borsa2 from "../../assets/imgs/borsarossa.jpg";

const mockProducts = [
  {
    id: 1,
    name: "Borsa Mare",
    price: 29.99,
    category: "Borsa",
    subcategory: "Velluto",
    description: "Una borsa perfetta per l'estate.",
    image: [borsamare, borsabeige],
    sizes: [],
    colors: ["#000080", "#F5F5DC"],
    isOnSale: true,
  },
  {
    id: 2,
    name: "Borsa Pelle Blu",
    price: 2900.99,
    category: "Borsa",
    subcategory: "Pelle",
    description: "Elegante borsa in vera pelle blu.",
    image: [borsamare2],
    sizes: [],
    colors: ["#003366"],
    isOnSale: false,
  },
  {
    id: 3,
    name: "Top Nero Tessuto",
    price: 255.99,
    category: "Top",
    subcategory: "Tessuto",
    description: "Top in tessuto leggero, comodo e traspirante.",
    image: [borsamare3],
    sizes: ["XS", "S", "M", "L"],
    colors: ["#000"],
    isOnSale: false,
  },
  {
    id: 4,
    name: "Top Beige Pelle",
    price: 2900.99,
    category: "Top",
    subcategory: "Pelle",
    description: "Top in pelle beige di alta qualità.",
    image: [borsabeige],
    sizes: ["M", "L"],
    colors: ["#D2B48C"],
    isOnSale: true,
  },
  {
    id: 5,
    name: "Top Rosso Velluto",
    price: 255.99,
    category: "Top",
    subcategory: "Velluto",
    description: "Top in velluto rosso brillante.",
    image: [borsa2],
    sizes: ["S", "M", "L"],
    colors: ["#c00"],
    isOnSale: false,
  },
];

export default mockProducts;
