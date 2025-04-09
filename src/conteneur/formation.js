export function renderFormation() {
  
    return`
    <h2>FORMATION</h2>

    <table>
    ${formation.map(form =>`
        <tr>
          <td>${form.dateDeDebut} à ${form.dateDeFin}</td>
          <td>${form.entreprise} - ${form.etudes}</td>
        </tr>
        <tr>
        `).join("")};    
    </table> 
`;
}      
  
  const formation = [
      {
      dateDeDebut: "Sep.2024",  
      dateDeFin: "actuel",    
      entreprise: "IFOSUP",  
      etudes: "Formation professionnelle Développeur Web",  
    
    },
    {
      dateDeDebut: "Oct. 2017",  
      dateDeFin: "Mai 2018",    
      entreprise: "FOREM",  
      etudes: "Formation professionnelle Mécanique et Hydraulique",  
      
    },
    {
      dateDeDebut: "Juil. 2015",  
      dateDeFin: " juin 2016",    
      entreprise: "FOREM", 
      etudes: " Formation professionnelle Automatismes et Pneumatique",  
    
    },
    {
      dateDeDebut: "Sept. 2013",  
      dateDeFin: " Juin 2015",    
      entreprise: "IFOSUP", 
      etudes: "Formation Supérieure Électricien industriel",  
   
    },
    {
      dateDeDebut: "Fév. 2010",  
      dateDeFin: "Avr. 2010",    
      entreprise: "CLL Centre de langues", 
      etudes: "Certificat niveau B2",  
      
    },
    {
      dateDeDebut: "Sept. 2003",  
      dateDeFin: " Juil. 2006",    
      entreprise: "I.E.S. Río Verde", 
      etudes: "Études supérieures d’administration et de gestion",  
      
    }];