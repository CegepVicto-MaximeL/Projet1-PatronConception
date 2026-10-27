# Patron État : dialogue avec un PNJ (Java)

Le PNJ réagit différemment selon son état : Neutre, Content ou Fâché.

## Exécution (JDK 11 ou plus, aucune dépendance)

    javac -encoding UTF-8 *.java
    java Main

## Classes

- `EtatPnj` : interface de l'état
- `Pnj` : le contexte
- `Neutre`, `Content`, `Fache` : les états concrets
- `Main` : le joueur
