/** État de départ : le PNJ n'est ni content ni fâché. */
public class Neutre implements EtatPnj {

    public void parler() {
        System.out.println("PNJ : Bonjour, voyageur.");
    }

    public void donnerCadeau(Pnj pnj) {
        System.out.println("PNJ : Oh, merci beaucoup !");
        pnj.setEtat(new Content());    // Neutre -> Content
    }

    public void insulter(Pnj pnj) {
        System.out.println("PNJ : Comment oses-tu ?!");
        pnj.setEtat(new Fache());      // Neutre -> Fâché
    }

    public String getNom() { return "Neutre"; }
}
