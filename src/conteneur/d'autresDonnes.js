export function renderAutredonnees() {

    return`
           <h2>D’AUTRES DONEES</h2>
      <ul>
        ${donnees.map(don =>`
            
            <li>${don}</li>
            
            `).join("")}
      </ul>
    
    `;
    }
    
    const donnees = [
        
        "Permis de conduire B-1",
        "Brevet-cariste",
        
    ];