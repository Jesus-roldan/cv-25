export function renderInformatique() {
return`
    <h2>informatique</h2>
  <ul>
    ${informatique.map(info=>`
        
        <li>${info}</li>
        
        `).join("")}
    
  </ul>

`;


}

const informatique = [

    "MS-Office (Word, Excel, Outlook, Internet).",
    "Programmation en langage PL7 Pro pour A.P.I. TELEMECANIQUE MICRO et PREMIUM.",
    "Programmation en langage S7 pour les A.P.I. SIEMENS S7 300/400.",
    "Programmation automate SCHNEIDER MODICON M340.",

];