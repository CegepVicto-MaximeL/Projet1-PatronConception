
using System;

/// <summary>
/// Définit le contrat que toutes les stratégies d'attaque
/// doivent respecter.
/// </summary>
interface IAttaque
{
    /// <summary>
    /// Exécute l'attaque selon la stratégie utilisée.
    /// </summary>
    void Executer();
}

/// <summary>
/// Stratégie concrète qui représente une attaque à l'épée.
/// </summary>
class AttaqueEpee : IAttaque
{
    /// <summary>
    /// Exécute une attaque à l'épée qui inflige 10 dégâts.
    /// </summary>
    public void Executer()
    {
        Console.WriteLine("Épée : 10 dégâts");
    }
}

/// <summary>
/// Stratégie concrète qui représente une attaque magique.
/// </summary>
class AttaqueMagique : IAttaque
{
    /// <summary>
    /// Exécute une attaque magique qui inflige 25 dégâts.
    /// </summary>
    public void Executer()
    {
        Console.WriteLine("Magie : 25 dégâts");
    }
}

/// <summary>
/// Représente le contexte du patron Stratégie.
/// Le personnage délègue son attaque à une stratégie
/// interchangeable qui implémente IAttaque.
/// </summary>
class Personnage
{
    private IAttaque attaque;

    /// <summary>
    /// Initialise un personnage avec une stratégie d'attaque.
    /// </summary>
    /// <param name="attaque">
    /// Stratégie d'attaque initiale du personnage.
    /// </param>
    public Personnage(IAttaque attaque)
    {
        this.attaque = attaque;
    }

    /// <summary>
    /// Remplace la stratégie d'attaque actuelle du personnage.
    /// Permet de modifier son comportement pendant l'exécution.
    /// </summary>
    /// <param name="nouvelleAttaque">
    /// Nouvelle stratégie d'attaque à utiliser.
    /// </param>
    public void ChangerAttaque(IAttaque nouvelleAttaque)
    {
        attaque = nouvelleAttaque;
    }

    /// <summary>
    /// Effectue une attaque en déléguant son exécution
    /// à la stratégie actuellement sélectionnée.
    /// </summary>
    public void Attaquer()
    {
        attaque.Executer();
    }
}

/// <summary>
/// Point d'entrée du programme démontrant
/// l'utilisation du patron Stratégie.
/// </summary>
class Program
{
    /// <summary>
    /// Crée un personnage, exécute une attaque à l'épée,
    /// puis change sa stratégie pour une attaque magique.
    /// </summary>
    static void Main()
    {
        var joueur = new Personnage(new AttaqueEpee());
        joueur.Attaquer();

        joueur.ChangerAttaque(new AttaqueMagique());
        joueur.Attaquer();
    }
}
