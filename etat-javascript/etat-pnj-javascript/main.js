/**
 * Le joueur interagit avec le PNJ.
 * Les mêmes actions donnent des réponses différentes selon l'état du PNJ.
 */
const Pnj = require("./pnj");
const { Neutre } = require("./etats");

const pnj = new Pnj(new Neutre());

console.log("1. Le joueur parle au PNJ :");
pnj.parler();

console.log("\n2. Le joueur insulte le PNJ :");
pnj.insulter();

console.log("\n3. Le joueur parle au PNJ fâché :");
pnj.parler();

console.log("\n4. Le joueur offre un cadeau :");
pnj.donnerCadeau();

console.log("\n5. Le joueur offre un autre cadeau :");
pnj.donnerCadeau();

console.log("\n6. Le joueur parle au PNJ content :");
pnj.parler();
