# Test technique pour <Airweb>

Voici mon rendu pour le test technique "back-end" pour Airweb.

## Ce dont vous avez besoin

-   Nodejs >= 16
-   npm >= 6

## Instructions

-   Se rendre dans le dossier `./app`
-   Enrichir un fichier .env (ou fournir autrement les variables d'environements)

```bash
cp example.env .env
```

-   Installer les dépendances

```bash
npm install
```

-   Lancer le projet

```bash
npm start
npm run start:dev # hot reload
```

-   Le projet devrait tourner par défaut sur le port 3000

## Remarques

-   Les fonctionalités développés sont minimes :

    -   Une route /categories
        -   Un tri des valeurs de retour selon si l'utilisateur est connecté ou non (JWT)
    -   Une route /login
    -   Un swagger /swagger

-   Il faudrait améliorer le typage/validation des données

-   Pourquoi nestJS ?
    -   Celà faisait un moment que je n'y ai pas touché.
    -   J'ai profité de ce test technique pour m'y remettre, en sacrifiant volontairement les features "extra" pour que ça rentre dans le temps imparti
    -   J'aurai éventuellement du dockeriser le projet !
