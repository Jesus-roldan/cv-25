export function renderExperiences() {
  
  return`
    <h2>Expériences professionnelles</h2>
    <table class="experiences">
      
      ${experienceProfessionnelle.map(exp =>`
      <tr>
        <td>${exp.dateDeDebut} à ${exp.dateDeFin}</td>
        <td> ${exp.entreprise} </td>
      </tr>
      <tr>
        <td>${exp.poste}</td>
      </tr>
      <tr>
        <td>Principal tâches :</td>
        <td> 
          <ul>
           ${exp.principalesTaches.map(tache => `<li>${tache}</li>`).join("")}
          </ul>
        </td>
      </tr>
      <tr>
      `).join("")}
  </table>      
`;
  }

const experienceProfessionnelle = [
    {
    dateDeDebut: "Mai 2018",  
    dateDeFin: "Mars 2024",    
    entreprise: "Omnex",  
    poste: "Responsable Maintenances et Production",  
    principalesTaches: [      
        "Maintenances",
        "Gestion du stock",
       "Réception des marchandises",
        "Contrôle de qualité"
     
    ]
  },
  {
    dateDeDebut: "Août 2013",  
    dateDeFin: "Déc. 2014",    
    entreprise: "Imprimerie E. Oleffe",  
    poste: "Magasinier",  
    principalesTaches: [      
       "Gestion du stock",
       "Réception des marchandises",
       "Préparation des commandes",
       "Approvisionnement des zones de production"
 
    ]
  },
  {
    dateDeDebut: "Août. 2010",  
    dateDeFin: "Oct. 2012",    
    entreprise: "A.C. Montessori Kids", 
    poste: "Ouvrier polyvalent",  
    principalesTaches: [      
     
    "Chauffeur de bus matin et soir",
    "Entretien des jardins et maintenance des locaux de l'école",
    "Réparations diverses du mobilier"
  
    ]
  },
  {
    dateDeDebut: "Mai. 2010",  
    dateDeFin: "Oct. 2010",    
    entreprise: "Boum Balle Bulle SPRL", 
    poste: "Ouvrier polyvalent",  
    principalesTaches: [      
      
    "Accueil",
    "Maintenance et entretien du bâtiment",
    "Surveillance piscine"
  
    ]
  },
  {
    dateDeDebut: "Nov. 2008",  
    dateDeFin: "Sept. 2009",    
    entreprise: "C.E.F. Comptoir Electrique Français, Espagne", 
    poste: "Employé administratif",  
    principalesTaches: [      
      
    "Service clientèle",
    "Gestion des documents administratifs et de la facturation de 7 grands magasins établis en Espagne"
  
    ]
  },
  {
    dateDeDebut: "Avr. 2007",  
    dateDeFin: " Fév. 2008",    
    entreprise: "Grupo A.E.A, Espagne", 
    poste: "Employé administratif",  
    principalesTaches: [      
        "Gestion administratif de quartiers résidentiels"  
    ]
  }];