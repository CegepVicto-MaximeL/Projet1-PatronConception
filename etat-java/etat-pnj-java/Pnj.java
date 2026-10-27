/**
 * Le contexte : le PNJ (personnage non joueur).
 * Il ne décide rien lui-même, il demande à son état courant de réagir.
 */
public class Pnj {

    // L'état actuel du PNJ
    private EtatPnj etat = new Neutre();

    // Change l'état (appelé par les états eux-mêmes, pas par le Main)
    void setEtat(EtatPnj nouvelEtat) {
        System.out.println("   [Le PNJ passe de " + etat.getNom() + " à " + nouvelEtat.getNom() + "]");
        etat = nouvelEtat;
    }

    // Chaque action est transmise à l'état courant
    public void parler()        { etat.parler(); }
    public void donnerCadeau()  { etat.donnerCadeau(this); }
    public void insulter()      { etat.insulter(this); }
}
