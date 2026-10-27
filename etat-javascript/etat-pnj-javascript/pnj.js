/**
 * Le contexte : le PNJ (personnage non joueur).
 */
class Pnj {
  constructor(etatInitial) {
    // L'état actuel du PNJ
    this.etat = etatInitial;
  }

  setEtat(nouvelEtat) {
    console.log(`   [Le PNJ passe de ${this.etat.nom} à ${nouvelEtat.nom}]`);
    this.etat = nouvelEtat;
  }

  parler()       { this.etat.parler(); }
  donnerCadeau() { this.etat.donnerCadeau(this); }
  insulter()     { this.etat.insulter(this); }
}

module.exports = Pnj;
