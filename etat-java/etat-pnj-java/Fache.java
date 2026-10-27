/** État fâché : le PNJ refuse de parler et se calme avec un cadeau. */
public class Fache implements EtatPnj {

    public void parler() {
        System.out.println("PNJ : Laisse-moi tranquille !");
    }

    public void donnerCadeau(Pnj pnj) {
        System.out.println("PNJ : Hmm... d'accord, je te pardonne.");
        pnj.setEtat(new Neutre());     // Fâché -> Neutre
    }

    public void insulter(Pnj pnj) {
        System.out.println("PNJ : Dégage !");               // Reste fâché
    }

    public String getNom() { return "Fâché"; }
}
