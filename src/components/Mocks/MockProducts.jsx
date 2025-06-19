import borsamare from "../../assets/imgs/borsamare.jpg";
import borsamare2 from "../../assets/imgs/borsabluy.jpg";
import borsabeige from "../../assets/imgs/borsabeige.jpg";
import borsa2 from "../../assets/imgs/borsarossa.jpg";
import top from "../../assets/imgs/top.png";

const mockProducts = [
  {
    id: 1,
    name: "Borsa Mare",
    price: 29.99,
    category: "Borsa",
    subcategory: "Velluto",
    description: "Una borsa perfetta per l'estate.",
    longDescription: "",
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
    longDescription: "",
    image: [borsamare2],
    sizes: [],
    colors: ["#003366"],
    isOnSale: false,
  },
  {
    id: 3,
    name: "Rockbra in vera pelle",
    price: 300,
    category: "Top",
    subcategory: "Pelle",
    description:
      "Reggiseno sottogiacca in pelle nero, seducente, deciso e senza compromessi. Pensato per chi vuole osare con eleganza.",
    longDescription: `Iconico, audace, inconfondibile: il RockBra è molto più di un reggiseno è una dichiarazione di stile. Realizzato in vera pelle di altissima qualità, unisce sartorialità e carattere con un design che celebra la femminilità più sicura e graffiante. Perfetto sotto una giacca strutturata o da solo, questo capo trasforma ogni outfit in un look d’impatto. Linee pulite, taglio deciso e comfort impeccabile per accompagnarti dal giorno alla notte con personalità e sicurezza.`,
    image: [top, borsa2],
    sizes: ["S", "M"],
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
    longDescription: "",
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
    longDescription: "",
    image: [borsa2],
    sizes: ["S", "M", "L"],
    colors: ["#c00"],
    isOnSale: false,
  },
];

export default mockProducts;
