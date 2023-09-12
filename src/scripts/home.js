const mainContent = document.getElementsByTagName("main");
const nav = document.getElementsByTagName("nav");

const advertisements = [
  {
    name: "Fiat Argo 2022",
    price: 120,
    owner: "Sandro Marques",
    distance: 0.5,
    photoSrc: "../../assets/argo.png",
  },
  {
    name: "Hyundai Hb20 2016",
    price: 178.9,
    owner: "Roberta Menezes",
    distance: 0.2,
    photoSrc: "../../assets/hb20.png",
  },
  {
    name: "Volkswagen Voyage 2014",
    price: 190,
    owner: "Enrico Santarelli",
    distance: 3.4,
    photoSrc: "../../assets/voyage.png",
  },
  {
    name: "Fiat Mobi 2023",
    price: 210,
    owner: "Caroline Pagnota",
    distance: 0.3,
    photoSrc: "../../assets/mobi.png",
  },
  {
    name: "Toyota Athios 2018",
    price: 142,
    owner: "José Luiz Alberto",
    distance: 10.2,
    photoSrc: "../../assets/athios.png",
  },
  {
    name: "Fiat Argo 2015",
    price: 115.60,
    owner: "Leandro Prosadelli",
    distance: 0.1,
    photoSrc: "../../assets/argo.png",
  },
];

advertisements.map(
    (element) => mainContent[0].innerHTML += `
    <section>
        <div>
            <img src="${element.photoSrc}" alt="Foto do carro" />
        </div>
        <h1>${element.name}</h1>
        <h2>
            R$ ${element.price.toFixed(2)}/
            <p>dia</p>
        </h2>
        <div class="infos">
            <div>
                <i class="ph ph-user"></i>
                <p>${element.owner}</p>
            </div>
            <div>
                <i class="ph ph-navigation-arrow"></i>
                <p>À ${element.distance}Km de você</p>
            </div>
        </div>
    </section>
    `
);






    
