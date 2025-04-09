export function renderLangues() {

return`
     <h2>langues</h2>
  <ul>
    ${langues.map(lang =>`
        
        <li>${lang.langues} : ${lang.niveau}</li>
        
        `).join("")}
  </ul>

`;
}

const langues = [
    {
        langues: "Espagnol",
        niveau: "Langue maternelle",
    },
    {
        langues: "Français",
        niveau: "Bonnes connaissances",
    },
    {
        langues: "Anglais",
        niveau: "Connaissances de base",
    }
];