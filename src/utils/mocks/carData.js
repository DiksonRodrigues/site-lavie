// import all images from assets/images directory
import img01 from "../../assets/all-images/cars-img/golf-offer.jpg";
import img02 from "../../assets/all-images/cars-img/corolla-offer.jpg";
import img03 from "../../assets/all-images/cars-img/polo-offer.jpg";
import img04 from "../../assets/all-images/cars-img/uno-offer.jpg";
import img05 from "../../assets/all-images/cars-img/argo-offer.jpg";
import img06 from "../../assets/all-images/cars-img/siena-offer.jpg";


const carData = [
  {
    id: 1,
    brand: "Golf",
    rating: 112,
    carName: "Golf",
    imgUrl: img01,
    model: "SPORTLINE EDITION",
    preço: 56.900,
    speed: " 1.6",
    gps: "GPS Navigation",
    seatType: "5 passageiros",
    automatic: "Manual",
    description:
      " Versão SPORTLINE EDITION Câmbio Manual POTÊNCIA: 1.6 Combustível Flex 4 portas  Opcionais Ar condicionado Digital,Direção Hidráulica,Trava ElétricaVidros elétricos,Multimídia,Sensor de ré, Teto solar,Farol de neblina,Piloto automático, Bancos de couro,Encosto de braço,Rodas liga leve, Chave canivete, Reboque, Revisado."
  },

  {
    id: 2,
    brand: "Corolla",
    rating: 102,
    carName: "Toyota Corolla",
    imgUrl: img02,
    model: "2017",
    preço: 94.900,
    speed: "2.0",
    gps: "GPS Navigation",
    seatType: "5 passageiros",
    automatic: "Automatic",
    description:
      " Toyota Corolla, Ano 2017, Versão  XEI, Câmbio Automático, POTÊNCIA 2.0, Combustível Flex, 68.265"
  },
  {
    id: 3,
    brand: "Polo",
    rating: 102,
    carName: "POLO COMFORTLINE",
    imgUrl: img03,
    model: "2013",
    preço: 42.900,
    speed: "1.6",
    gps: "GPS Navigation",
    seatType: "5 passageiros",
    automatic: "Manual",
    description:
      " VW POLO 1.6 COMFORTLINE EXTRA, Ano 2013, Versão COMFORTLINE, Câmbio MANUAL, POTÊNCIA 1.6, Combustível Flex, KM 85.000, 4 portas,Opcionais, Ar condicionado, Direção hidráulica, Trava Elétrica, Vidros elétricos, SOM ORIGINAL, 5 LUGARES, Retrovisores Elétricos, SENSOR DE RÉ,MANUAL ,CHAVE RESERVA, REBOQUE."
  },
  {
    id: 4,
    brand: "Uno",
    rating: 102,
    carName: "Fiat Uno FireFlex",
    imgUrl: img04,
    model: "2016",
    preço: 42.900,
    speed: "1.0",
    gps: "GPS Navigation",
    seatType: "5 passageiros",
    automatic: "Manual",
    description:
      " Ano 2016, Versão VIVACE, Câmbio MANUAL, POTÊNCIA 1.0, Combustível Flex, KM 75 MIL KM, 4 portas, Opcionais, AR CONDICIONADO, DIREÇÃO HIDRÁULICA,TRAVAS ELÉTRICAS, VIDROS ELÉTRICOS, SOM ORIGINAL, 5 LUGARES, COMPUTADOR DE BORDO, PNEUS NOVOS."
  },
  {
    id: 5,
    brand: "Argo",
    rating: 102,
    carName: "Fiat Argo",
    imgUrl: img05,
    model: "2021",
    preço: 64.900,
    speed: "1.0",
    gps: "GPS Navigation",
    seatType: "5 passageiros",
    automatic: "Manual",
    description:
      " FIAT Argo , Ano 20/21, Versão Drive, Câmbio Manual, POTÊNCIA 1.0, Combustível Flex, KM 58.621."
  },
  {
    id: 6,
    brand: "Siena",
    rating: 102,
    carName: "Fiat Grand Siena",
    imgUrl: img06,
    model: "2018",
    preço: 35.900,
    speed: "1.4",
    gps: "GPS Navigation",
    seatType: "5 passageiros",
    automatic: "Manual",
    description:
      " Fiat Grand Siena 1.4 2018. Veículo com 1 ano de Garantia"
  },

  
];

export default carData;
