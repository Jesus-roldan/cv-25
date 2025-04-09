export function renderRensignements() {

return`
     <h2>RENSEIGNEMENTS PERSONNELS</h2>
  <ul>
    ${renseignements.map(rens =>`
        
        <li>${rens}</li>
        
        `).join("")}
  </ul>

`;
}

const renseignements = [
    
    "Date de naissance : 05/04/1982",
    "Nationalité : Espagnole",
    "Situation de famille : Cohabitation légale",
    "Adresse : Rue des Queutralles N°6 à 1490 Court-St-Etienne",
    "GSM : 0473/68.33.65",
    "E-mail : jesus.roldan82@hotmail.com",
    
];