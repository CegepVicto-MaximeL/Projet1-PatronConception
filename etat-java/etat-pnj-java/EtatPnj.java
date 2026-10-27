/**
 * Interface de l'état : les actions que le joueur peut faire avec le PNJ.
 * Chaque état (Neutre, Content, Fâché) écrit sa propre réaction.
 */
public interface EtatPnj {
    void parler();                    // Le joueur discute avec le PNJ
    void donnerCadeau(Pnj pnj);       // Le joueur offre un cadeau
    void insulter(Pnj pnj);           // Le joueur insulte le PNJ
    String getNom();                  // Nom de l'état (pour l'affichage)
}
