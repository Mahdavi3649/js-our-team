
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
  //console.log(team);

  for (let i = 0; i < team.length; i++) {
      const person = team[i];
      console.log(`${person.name}`);
      console.log(`${person.role}`);
      console.log(`${person.image}`);
      console.log("__________________");
  }

 /*  MILESTONE 2 
stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1 
trasformare la stringa foto in una immagine effettiva
BONUS 2 
organizzare i singoli membri in card/schede 
*/


// selezionare l'elemento della dom dove voglio stampare le informazioni
const personElement = document.querySelector(".row")
    //console.log(personElement)

for (let i = 0; i < team.length; i++) {
    const person = team[i];

    const personCard = `
    <div class="col">
    <div class="cards">
    <div class="card-top">
        <img src="./assets/img/${person.image}" width="355px">
    </div>
    <div class="card-text text-center p-4">
        <h4>${person.name}</h4>
        <h6>${person.role}</h6>
    </div>
</div>
    </div>
    `;
    //console.log(personCard);

    personElement.insertAdjacentHTML("beforeend", personCard);

}