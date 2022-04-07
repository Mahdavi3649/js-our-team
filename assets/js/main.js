

/* MILESTONE 1 :
stampare su console le informazioni di nome, ruolo e la stringa della foto */

const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];
  console.log(team);

  for (let i = 0; i < team.length; i++) {
      const person = team[i];
      console.log(`${person.name}`);
      console.log(`${person.role}`);
      console.log(`${person.image}`);
      console.log("__________________");
  }

 /*  MILESTONE 2 
 (se ce la fai falla entro le 18 altrimenti puoi consegnare anche dopo le 18 - easy):
stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1 
(solo se non sei giá frustrato dalle milestone 1 e 2):
trasformare la stringa foto in una immagine effettiva
BONUS 2 
(solo se non sei giá fuso):
organizzare i singoli membri in card/schede */

// selezionare l'elemento della dom dove voglio stampare le informazioni
const personElement = document.querySelector(".row")
    console.log(personElement)

for (let i = 0; i < team.length; i++) {
    const person = team[i];

    const personCard = `
    <div class="col">
    <div class="card-top">
        <img src="./assets/img/${person.image}">
    </div>
    <div class="card-text text-center m-4">
        <h4>${person.name}</h4>
        <h6>${person.role}</h6>
    </div>
</div>
    `;
    //console.log(personCard);

    personElement.insertAdjacentHTML("beforeend", personCard);

}