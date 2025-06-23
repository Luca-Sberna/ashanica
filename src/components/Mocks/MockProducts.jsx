import borsamare from "../../assets/imgs/borsamare.jpg";
import borsamare2 from "../../assets/imgs/borsabluy.jpg";
import borsabeige from "../../assets/imgs/borsabeige.jpg";
import borsa2 from "../../assets/imgs/borsarossa.jpg";
import top from "../../assets/imgs/top.png";

const mockProducts = [
  {
    id: 1,
    name: "Hippie Birk",
    price: 29.99,
    category: "Borsa",
    subcategory: "Pelle",
    description:
      "La Hippie Birk è l 'incontro perfetto tra eleganza sofisticata e spirito bohemien.",
    longDescription:
      "Realizzata in morbida pelle di alta qualità ha un design deciso ma raffinato. Le frange disposte su 3 balze le conferiscono una personalità inconfondibile e dinamica. L'assenza di tracolla ne sottolinea il carattere deciso, mentte la chiusura con gancio frontale aggiunge un tocco vintage e pratico al tempo stesso.",
    image: [borsamare, borsabeige],
    sizes: ["40 x 33 x 24", "32 x 13 x 24"],
    colors: ["#000"],
    isOnSale: true,
  },
  {
    id: 2,
    name: "AndreClutch Swarovsky",
    price: 2900.99,
    category: "Borsa",
    subcategory: "Raso",
    description: "Realizzata in raso e impreziosita da swarovsky e borchie",
    longDescription:
      "La clutch collection è pensata per chi desidera un accessorio sofisticato, ricercato e ricco di personalità. Morbida nella forma e senza manico, questa borsa a mano diventa un dettaglio prezioso da tenere con sè nelle occasioni speciali.",
    image: [borsamare2],
    sizes: [],
    colors: [
      "#C0C0C0", // Argento
      "#000000", // Nero
      "#FF0000", // Rosso
      "#008000", // Verde
      "#FFD700", // Oro
      "#FF00FF", // Fucsia
      "#0D3B66", // Blu China
    ],
    isOnSale: false,
  },
  {
    id: 3,
    name: "Rockbra",
    price: 300,
    category: "Top",
    subcategory: "Pelle",
    description:
      "Reggiseno sottogiacca in vera pelle nero, seducente, deciso e senza compromessi.",
    longDescription: `Iconico, audace, inconfondibile: Pensato per chi vuole osare con eleganza il RockBra è molto più di un reggiseno è una dichiarazione di stile. Realizzato in vera pelle di altissima qualità, unisce sartorialità e carattere con un design che celebra la femminilità più sicura e graffiante. Perfetto sotto una giacca strutturata o da solo, questo capo trasforma ogni outfit in un look d’impatto. Linee pulite, taglio deciso e comfort impeccabile per accompagnarti dal giorno alla notte con personalità e sicurezza.`,
    image: [top, borsa2],
    sizes: ["S", "M"],
    colors: ["#000"],
    isOnSale: false,
  },
  {
    id: 4,
    name: "AzulClutch Raso Diamanti",
    price: 290.99,
    category: "Borsa",
    subcategory: "Raso",
    description:
      "Proposta in raso o velluto, è arricchita da applicazioni di diamanti, per un effetto gioiello che cattura lo sguardo.",
    longDescription:
      "La clutch collection è pensata per chi desidera un accessorio sofisticato, ricercato e ricco di personalità. Morbida nella forma e senza manico, questa borsa a mano diventa un dettaglio prezioso da tenere con sè nelle occasioni speciali.",
    image: [borsabeige],
    sizes: [],
    colors: [
      "#C8A2C8", // Glicine
      "#FFFFFF", // Bianco
      "#FF00FF", // Fucsia
      "#FFFDD0", // Crema
      "#000000", // Nero
      "#FF7F50", // Corallo
      "#800080", // Porpora
      "#D8A7B1", // Rosa antico
      "#003366", // Blu china
    ],
    isOnSale: true,
  },
  {
    id: 5,
    name: "AzulClutch Velluto Diamanti",
    price: 255.99,
    category: "Borsa",
    subcategory: "Velluto",
    description:
      "Proposta in raso o velluto, è arricchita da applicazioni di diamanti, per un effetto gioiello che cattura lo sguardo.",
    longDescription:
      "La clutch collection è pensata per chi desidera un accessorio sofisticato, ricercato e ricco di personalità. Morbida nella forma e senza manico, questa borsa a mano diventa un dettaglio prezioso da tenere con sè nelle occasioni speciali.",
    image: [borsa2],
    sizes: [],
    colors: [
      "#0000FF", // Blu
      "#FF0000", // Rosso
      "#D8A7B1", // Rosa antico
    ],
    isOnSale: false,
  },
];

export default mockProducts;
