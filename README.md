# Natural Solutions - Test React/NextJS with TypeScript

This is a really simple project that shows the usage of Next.js with TypeScript.

## Avant de commencer

1. Installer les dépendances du projet: `yarn`
2. Lancer le serveur de développement: `yarn dev`

## Défis

- [ ] Compléter l'interface `Species` et typer les composants `ListSpecies` et `SpeciesItem`; reprendre la page `index.tsx` pour ne plus avoir d'erreurs de typage
- [ ] Créer 2 nouveaux `SpeciesCardList` et `SpeciesCard` permettant d'afficher la liste des espèces avec leur nom scientifique (`taxon`), leur image et leur nombre d'observations; typer ces composants
- [ ] Créer 2 nouveaux `SpeciesCardList` et `SpeciesCard` permettant d'afficher la liste des espèces avec leur nom scientifique (`taxon`), leur image et leur nombre d'observations; typer ces composants et remplacer les composants de liste existants. \_NB: Possible d'utiliser les [composants Material UI](https://mui.com/components/cards/#media)
- [ ] Ajouter un statut de sélection de type booléen au composant `SpeciesCard`: lorsque l'utilisateur clique sur la carte cette derrnière est sélectionnée, un modification de style indique à l'utilisateur quelle `SpeciesCard` est sélectionnée. Quand une `SpeciesCard` est sélectionnée, 2 actions sont affichées: (1) Ajouter une observation et (2) Retirer une observation. Les boutons sont inactifs à ce stade de l'exercice
- [ ] Depuis la page index.tsx, calculer le nombre total d'espèces différentes et le nombre cumulé d'observations. Afficher les résultats dans le composant `Metric`
- [ ] Implémenter les fonctions d'ajout et de suppression des observations; le composant `Metric` indiquant le nombre cumulé d'observations doit se mettre à jour de manière dynamique.
