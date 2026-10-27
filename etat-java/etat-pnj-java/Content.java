/** État content : le PNJ est amical et partage des secrets. */
public class Content implements EtatPnj {

    public void parler() {
        System.out.println("PNJ : Mon ami ! Je connais un trésor caché dans la forêt...");
    }

    public void donnerCadeau(Pnj pnj) {
        System.out.println("PNJ : Tu es trop gentil !");   // Reste content
    }

    public void insulter(Pnj pnj) {
        System.out.println("PNJ : Tu me déçois...");
        pnj.setEtat(new Neutre());     // Content -> Neutre
    }

    public String getNom() { return "Content"; }
}
