Airweb - Test Technique 
===

Bonjour !

Voici un petit test afin de juger vos capacités et compétences techniques (mais pas que).

## Le Contexte

Vous avez ci-joint une base de données SQlite. Celle-ci contient une liste de catégories et de produits, et une liste d'utilisateurs.

Votre mission sera de développer une fausse API pour une boutique simple (comportant une page *catalogue*, une page *login* et une page *panier*).
La partie front n'est pas à développer !

Les produits référencés dans la base de données comportent des champs `visible_authenticated` et `visible_public`.
Les endpoints du catalogue ne devront retourner que les produits et catégories concernés par le statut d'authentification de la requète.

Par souci de simplicité, les mot de passe utilisateurs sont des hashs en MD5 de l'ID utilisateur concaténé avec le mot de passe (`MD5(<ID><PASSWORD>)`).
Le mot de passe sera toujours `bonjour`.

Le passage de commandes et le checkout ne sont pas des fonctionnalités attendues, mais un panier dans l'API serait appréciable.

Vous êtes libre d'utiliser les technologies, frameworks et librairies de votre choix (préférence pour le Javascript ou le PHP). 

Le résultat devra être rendu sous la forme d'un lien vers un repository Git, avec les instructions pour lancer le projet en local.

## La base de données

### `products`
`id` - Identifiant unique du produit  
`label` - Nom du produit à afficher  
`description` - Description du produit  
`price` - Prix en centimes (integer)  
`category_id` - Identifiant de la catégorie parente  
`thumbnail_url` - URL vers l'image miniature  
`visible_public` - Si le produit doit être affiché au public  
`visible_authenticated` - Si le produit doit être affiché lorsque connecté  

### `categories`
`id` - Identifiant unique du produit  
`index` - Index de la catégorie dans la boutique  
`label` - Nom du produit à afficher  
`description` - Description du produit  

### `users`
`id` - Identifiant unique de l'utilisateur  
`name` - Nom d'affichage de l'utilisateur  
`email` - Adresse email de l'utilisateur  
`password_hash` - Hash du mot de passe utilisateur *(défini plus haut)*  

> Si l'envie vous venait d'ajouter des fonctionnalités, vous pouvez étendre le contenu de la base, si nécessaire.

## Extras

Toute fonctionnalité supplémentaire sera bienvenue, par exemple :
- **Internationalisation**
- **Filtres** et recherche
- ...

Quelques wireframes du front-end sont disponibles [ici](https://www.figma.com/file/GB7FZWWMPTg57UxpfogUDc/Maquette-boutique?node-id=0%3A1), si besoin.

Ce test devrait représenter environ 2h à 4h de travail (?). Pas de panique si c'est trop ou si vous êtes bloqués, on débriefera ensemble.

Bon courage !