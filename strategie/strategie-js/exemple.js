/**
 * Stratégie concrète représentant une attaque à l'épée.
 */
class AttaqueEpee {
  /**
   * Exécute une attaque à l'épée qui inflige 10 dégâts.
   */
  executer() {
    console.log('Épée : 10 dégâts');
  }
}

/**
 * Stratégie concrète représentant une attaque magique.
 */
class AttaqueMagique {
  /**
   * Exécute une attaque magique qui inflige 25 dégâts.
   */
  executer() {
    console.log('Magie : 25 dégâts');
  }
}

/**
 * Représente le contexte du patron Stratégie.
 * Le personnage délègue son attaque à un objet stratégie.
 *
 * Les stratégies sont interchangeables tant qu'elles
 * possèdent une méthode executer().
 */
class Personnage {
  /**
   * Initialise un personnage avec une stratégie d'attaque.
   *
   * @param {Object} attaque - Stratégie d'attaque initiale.
   */
  constructor(attaque) {
    this.attaque = attaque;
  }

  /**
   * Remplace la stratégie d'attaque actuelle.
   * Permet de modifier le comportement du personnage
   * pendant l'exécution du programme.
   *
   * @param {Object} nouvelleAttaque - Nouvelle stratégie.
   */
  changerAttaque(nouvelleAttaque) {
    this.attaque = nouvelleAttaque;
  }

  /**
   * Effectue une attaque en déléguant son exécution
   * à la stratégie actuellement sélectionnée.
   *
   */
  attaquer() {
    this.attaque.executer();
  }
}

/**
 * Point d'entrée du programme.
 * Démontre le changement dynamique de stratégie.
 */
function main() {
  // Crée un personnage avec une attaque à l'épée.
  const joueur = new Personnage(new AttaqueEpee());

  // Exécute la première stratégie.
  joueur.attaquer();

  // Remplace la stratégie par une attaque magique.
  joueur.changerAttaque(new AttaqueMagique());

  // Exécute la nouvelle stratégie.
  joueur.attaquer();
}

main();
