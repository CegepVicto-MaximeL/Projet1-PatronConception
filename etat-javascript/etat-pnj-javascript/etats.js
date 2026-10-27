/**
 * Les états du PNJ.
 *
 * En JavaScript, il n'y a pas d'interface : chaque état doit simplement
 * avoir les mêmes méthodes (parler, donnerCadeau, insulter) et une
 * propriété "nom".
 */

/** État de départ : le PNJ n'est ni content ni fâché. */
class Neutre {
  nom = "Neutre";

  parler() {
    console.log("PNJ : Bonjour, voyageur.");
  }

  donnerCadeau(pnj) {
    console.log("PNJ : Oh, merci beaucoup !");
    pnj.setEtat(new Content());   // Neutre -> Content
  }

  insulter(pnj) {
    console.log("PNJ : Comment oses-tu ?!");
    pnj.setEtat(new Fache());     // Neutre -> Fâché
  }
}

/** État content : le PNJ est amical et partage des secrets. */
class Content {
  nom = "Content";

  parler() {
    console.log("PNJ : Mon ami ! Je connais un trésor caché dans la forêt...");
  }

  donnerCadeau(pnj) {
    console.log("PNJ : Tu es trop gentil !");   // Reste content
  }

  insulter(pnj) {
    console.log("PNJ : Tu me déçois...");
    pnj.setEtat(new Neutre());    // Content -> Neutre
  }
}

/** État fâché : le PNJ refuse de parler et se calme avec un cadeau. */
class Fache {
  nom = "Fâché";

  parler() {
    console.log("PNJ : Laisse-moi tranquille !");
  }

  donnerCadeau(pnj) {
    console.log("PNJ : Hmm... d'accord, je te pardonne.");
    pnj.setEtat(new Neutre());    // Fâché -> Neutre
  }

  insulter(pnj) {
    console.log("PNJ : Dégage !");// Reste fâché
  }
}

module.exports = { Neutre, Content, Fache };
