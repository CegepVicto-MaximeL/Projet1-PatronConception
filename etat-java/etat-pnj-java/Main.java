/**
 * Le joueur interagit avec le PNJ.
 * Les mêmes actions donnent des réponses différentes selon l'état du PNJ.
 */
public class Main {
    public static void main(String[] args) {
        Pnj pnj = new Pnj();

        System.out.println("1. Le joueur parle au PNJ :");
        pnj.parler();

        System.out.println("\n2. Le joueur insulte le PNJ :");
        pnj.insulter();

        System.out.println("\n3. Le joueur parle au PNJ fâché :");
        pnj.parler();

        System.out.println("\n4. Le joueur offre un cadeau :");
        pnj.donnerCadeau();

        System.out.println("\n5. Le joueur offre un autre cadeau :");
        pnj.donnerCadeau();

        System.out.println("\n6. Le joueur parle au PNJ content :");
        pnj.parler();
    }
}
