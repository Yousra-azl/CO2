# CO2

## INTRODUCTION :
Nom du projet : CO2WEB

- Ce projet a été créé dans le cadre d'une formation développeur/intégrateur d'applications.
- Nous avons à notre disposition une maquette version mobile et desktop ainsi que les dimensions pour pouvoir adapter cette maquette à tous les supports.
- Notre but était alors de reproduire cette maquette en adaptant aux supports et en utilisant les langages HTML/CSS/JS et en regroupant tout ce qui a été vu durant la formation.

# SITES / LOGICIELS UTILISÉES POUR CE PROJET :
- Pour le visionnage des maquette et de la charte graphique : Figma
- Pour le codage : Visual Studio Code
- Pour l'aide : Google, ChatGPT, collègues
- Pour la typographie : Google Font
- Vérification de la conformité du code : W3C

# COMMENT LANCER UN PROJET EN LOCAL ? :

## LANCER LE PROJET EN LOCAL :
1. Téléchargez le projet au format ZIP.
2. Décompressez le fichier 
3. Faites un double-clic sur le fichier "index.html"
4. Vous avez maintenant accès au projet

# QUI A TRAVAILLÉ SUR QUELLE PAGE ? BRÈVE EXPLICATIONS DU CODE :

## YOHANN :
Pages : Mode d'emploi, Calculateur
Partie : Responsive du footer

Mode d'emploi: Concernant la page Mode d'emploi, j'ai mis 3 boxs qui sont alignées horizontalement, pour pouvoir aligner ces éléments, j'ai créé une div qui fait office de background aux éléments. cette div à pour styles : display:flex; justify-content:center; flex-direction:row;.
Pour la partie du responsive de cette page, j'ai entouré la partie "petit écran" avec la class:smart et entouré la partie "grand écran" avec la class:ordi. Tout cela m'a permis de pouvoir afficher les cartes sur la même ligne et afficher le caroussel sur les pages inférieures à 768 et afficher les cartes alignées à partir de 768 pixels.

Pour le caroussel, j'ai procédé avec la page caroussel.js. en y mettant un section.classList.remove pour cacher toutes les section, sections[index].classList.add('active'); pour pouvoir avoir une vision sur une seule section.
function nextSection() pour pouvoir passer à la section suivante
function prevSection() pour pouvoir retourner à la section précédente.
Ces boutons prennent effet avec ces deux lignes :
document.querySelector('.carousel-nav .next').addEventListener('click', nextSection);
document.querySelector('.carousel-nav .prev').addEventListener('click', prevSection);

Pour le footer, j'ai entouré le copyright par la div:smartcopyright car les copyrights s'affichent uniquement sur la version mobile, pour que les éléments du footer s'affichent en grille, j'ai fait un. media queries en intégrant les valeurs : display:grid; avec 3 lignes et 2 colonnes en flex start

## YOUSRA :
Pages : Accueil, A propos, Calculateur

Accueil : Dans un premier temps, j'ai mis l'image en display:block; float:left;, j'ai également mis un margin-left et un margin-bottom pour l'aligner comme sur la maquette. Concernant les boutons "Commencer" et "En savoir plus", ils sont en display:flex; et en flex-direction:row; pour qu'ils puissent être horizontalement alignés. Pour la version responsive, j'ai aligné l'image en haut à droite en modifiant le  width, en modifiant également le margin-left. Les boutons, ont quant à eux, été transformés en display:column pour qu'ils s'affichent en vertical et non en horizontal pour les écrans plus petits.


## JESSICA :
Pages : Trouver un Vélib, Calculateur

Trouver un vélib : Le minuteur a été placé dans un displat:grid;. Le background du minuteur a été mis en display:flex; dflex-direction:column pour que les chiffres puissent être disposés sur le texte (de façon à ce qu'ils soient l'un en dessous de l'autre).
Pour le minuteur, j'ai procédé à la création d'un fichier JavaScript (trouverunvelib.js).


## FRANCK :
Pages : Contact, Calculateur
Partie : Menu (burger & horizontal)