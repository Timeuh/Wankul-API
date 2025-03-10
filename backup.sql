--
-- Data for Name: Artist; Type: TABLE DATA; Schema: public; Owner: Timeuh
--

INSERT INTO public."Artist" VALUES (3, 'Jaycee');
INSERT INTO public."Artist" VALUES (2, 'Ben Giletti');
INSERT INTO public."Artist" VALUES (4, 'Yuriiick');
INSERT INTO public."Artist" VALUES (1, 'Léonard Lam');
INSERT INTO public."Artist" VALUES (5, 'Lhotus');
INSERT INTO public."Artist" VALUES (6, 'Mael Lohbrunner');
INSERT INTO public."Artist" VALUES (7, '0 Redge');


--
-- Data for Name: Character; Type: TABLE DATA; Schema: public; Owner: Timeuh
--

INSERT INTO public."Character" VALUES (3, 'Guest');
INSERT INTO public."Character" VALUES (2, 'Terracid');
INSERT INTO public."Character" VALUES (1, 'Laink');
INSERT INTO public."Character" VALUES (4, 'Terrain');
INSERT INTO public."Character" VALUES (5, 'Random');


--
-- Data for Name: Rarity; Type: TABLE DATA; Schema: public; Owner: Timeuh
--

INSERT INTO public."Rarity" VALUES (1, 'Commune');
INSERT INTO public."Rarity" VALUES (2, 'Peu Commune');
INSERT INTO public."Rarity" VALUES (3, 'Terrain');
INSERT INTO public."Rarity" VALUES (4, 'Rare');
INSERT INTO public."Rarity" VALUES (5, 'Ultra Rare Holo 1');
INSERT INTO public."Rarity" VALUES (6, 'Ultra Rare Holo 2');
INSERT INTO public."Rarity" VALUES (7, 'Légendaire Bronze');
INSERT INTO public."Rarity" VALUES (8, 'Légendaire Argent');
INSERT INTO public."Rarity" VALUES (9, 'Légendaire Or');


--
-- Data for Name: Description; Type: TABLE DATA; Schema: public; Owner: Timeuh
--

INSERT INTO public."Description" VALUES (31, '', '', '', 1, 'Piochez une carte. COMBO infini +1 en Force.', '"C''est la rotule d''embrayage de la culasse qu''a pété. On sera dans les 5000 balles, ma bonne dame."', 1);
INSERT INTO public."Description" VALUES (28, '... défausse, si possible, un autre Terrain en jeu et le remplace par un de sa main.', '... défausse les 3 cartes du dessus de son deck.', '-', 4, '', '', 3);
INSERT INTO public."Description" VALUES (29, '... prend la carte du dessus de sa défausse en main pour chacune de ses cartes Laink en jeu.', '... défausse la carte du dessus de son deck jusqu''à défausser une carte Terracid.', '-', 4, '', '', 3);
INSERT INTO public."Description" VALUES (30, '... prend la carte du dessus de sa défausse en main pour chacune de ses cartes Terracid en jeu.', '... défausse la carte du dessus de son deck jusqu''à défausser une carte Laink.', '-', 4, '', '', 3);
INSERT INTO public."Description" VALUES (1, '... -', '... défausse les 5 cartes du dessus du deck.', 'Quand ce Terrain entre en jeu, chaque joueur défausse une carte.', 4, '', '', 3);
INSERT INTO public."Description" VALUES (2, '... déplace un Personnage depuis ce Terrain vers un autre.', '... défausse les 3 cartes du dessus de son deck.', '∞ Les cartes Terracid ont +1 en Force.', 4, '', '', 3);
INSERT INTO public."Description" VALUES (3, '... reprend en main la carte du dessus de sa défausse.', '... défausse les 3 cartes du dessus de son deck.', '-', 4, '', '', 3);
INSERT INTO public."Description" VALUES (4, '... défausse les 2 cartes du dessus de son deck.', '... défausse les 5 cartes du dessus de son deck.', '∞ Si un joueur a moins de 3 cartes en main, il pioche une carte.', 4, '', '', 3);
INSERT INTO public."Description" VALUES (5, '... -', '... défausse autant de cartes du dessus de son deck qu''il a de cartes en main.', '∞ Au début de son tour, chaque joueur pioche une carte de plus.', 4, '', '', 3);
INSERT INTO public."Description" VALUES (6, '... reprend en main un Terrain de sa défausse.', '... défausse 2 cartes de sa main par Terrain encore en jeu.', '∞ Pendant son tour, chaque joueur joue un Terrain du défausse une carte.', 4, '', '', 3);
INSERT INTO public."Description" VALUES (7, '... pioche pour avoir 5 cartes en main.', '... défausse pour avoir au maximum 3 cartes en main.', '∞ Chaque joueur pioche une carte de plus à son tour.', 4, '', '', 3);
INSERT INTO public."Description" VALUES (8, '... -', '... défausse les 3 cartes du dessus de son deck.', '∞ Aucun autre Terrain ne peut être posé tant que celui-ci est en jeu.', 4, '', '', 3);
INSERT INTO public."Description" VALUES (9, '... -', '... défausse toutes les cartes de sa main.', '∞ Si un joueur pioche, il le fait jusqu''à avoir au moins 5 cartes en main.', 4, '', '', 3);
INSERT INTO public."Description" VALUES (10, '... -', '... défausse les 3 cartes du dessus de son deck.', 'Quand ce Terrain entre en jeu, chaque joueur pioche pour avoir 5 cartes en main.', 4, '', '', 3);
INSERT INTO public."Description" VALUES (11, '... reprend en main un Terrain de sa défausse.', '... défausse les 4 cartes du dessus de son deck.', '∞ Aucun joueur ne peut piocher s''il a 3 cartes ou plus en main.', 4, '', '', 3);
INSERT INTO public."Description" VALUES (12, '... repose autant de cartes qu''il veut de sa main sur le dessus de son deck.', '... défausse toutes les cartes de sa main.', '-', 4, '', '', 3);
INSERT INTO public."Description" VALUES (13, '... -', '... défausse les 3 cartes du dessus de son deck.', 'Quand ce Terrain entre en jeu, chaque joueur joue un Personnage gratuitement.', 4, '', '', 3);
INSERT INTO public."Description" VALUES (14, '... joue une de ses cartes gratuitement.', '... défausse les 3 cartes du dessus de son deck.', '∞ Toutes les cartes Personnage coutent +1 à poser.', 4, '', '', 3);
INSERT INTO public."Description" VALUES (15, '... score un autre Terrain, de son choix (si possible).', '... défausse les 3 cartes du dessus de son deck.', '∞ Si un joueur a plus de 5 cartes en main, il défausse pour n''en avoir que 5.', 4, '', '', 3);
INSERT INTO public."Description" VALUES (16, '... -', '... défausse les 3 cartes du dessus de son deck.', '∞ Interdiction de jouer une carte ayant le même nom qu''une carte déjà en jeu.', 4, '', '', 3);
INSERT INTO public."Description" VALUES (17, '... déplace un de ses Personnes depuis ce Terrain vers un autre.', '... défausse les 3 cartes du dessus de son deck.', '∞ Les cartes Laink ont +1 en Force.', 4, '', '', 3);
INSERT INTO public."Description" VALUES (18, '... reprend en main un de ses Personnages qui était sur ce Terrain.', '... défausse les 3 cartes du dessus de son deck.', '-', 4, '', '', 3);
INSERT INTO public."Description" VALUES (19, '... défausse la première carte du dessus de son deck.', '... défausse les 5 cartes du dessus de son deck.', '-', 4, '', '', 3);
INSERT INTO public."Description" VALUES (20, '... -', '... défausse les 4 cartes du dessus de son deck.', '∞ Sur ce Terrain, tous les Personnages coûtent +2 à poser.', 4, '', '', 3);
INSERT INTO public."Description" VALUES (21, '... échange son deck et sa défausse, puis défausse sa main.', '... défausse les 4 cartes du dessus de son deck.', '∞ Ce Terrain ne peut être scoré que s''il est le seul Terrain en jeu.', 4, '', '', 3);
INSERT INTO public."Description" VALUES (22, '... regarde les 5 premières cartes du deck adverse et les réorganise.', '... défausse les 4 cartes du dessus de son deck.', '-', 4, '', '', 3);
INSERT INTO public."Description" VALUES (23, '... reprend en main la carte du dessus de sa défausse.', '... défausse les 5 cartes du dessus de son deck.', '-', 4, '', '', 3);
INSERT INTO public."Description" VALUES (24, '... cherche une carte dans son deck, la met en main et mélange son deck.', '... défausse les 4 cartes du dessus de son deck.', '-', 4, '', '', 3);
INSERT INTO public."Description" VALUES (25, '... reprend en main la carte du dessus de sa défausse.', '... défausse les 4 cartes du dessus de son deck.', '∞ Toutes les cartes Personnage coûtent 1 de moins à poser.', 4, '', '', 3);
INSERT INTO public."Description" VALUES (26, '... -', '... défausse les 3 cartes du dessus de son deck.', 'Quand ce Terrain entre en jeu, chaque joueur défausse un Personnage en jeu.', 4, '', '', 3);
INSERT INTO public."Description" VALUES (27, '... reprend en main un Terrain de sa défausse.', '... défausse les 3 cartes du dessus de son deck.', '-', 4, '', '', 3);
INSERT INTO public."Description" VALUES (32, '', '', '', 2, 'Piochez une carte.', 'Sur le côté droit, on trouve la jauge à huile. Sur le côté gauche on trouve le côté gauche.', 1);
INSERT INTO public."Description" VALUES (34, '', '', '', 2, 'Défaussez un Personnage adverse en jeu d''une Force de 3 maximum.', 'Souvent vu sur l''A1 à 150 km/h, avec du pinard, un sandwich rosette et Johnny à fond dans la cabine.', 1);
INSERT INTO public."Description" VALUES (33, '', '', '', 1, 'Défaussez un Personnage adverse en jeu d''une Force de 3 maximum. COMBO Piochez une carte.', 'Quand je vois les flammes sur mon camtar, ça me donne envie de chialer.', 1);
INSERT INTO public."Description" VALUES (35, '', '', '', 1, '∞ Votre adversaire défausse une carte de plus, si vous gagnez un Terrain. COMBO Scorez un Terrain.', 'Le saviez-vous ? Brico Sympa est né de la collaboration entre 2 types qui savent pas percer un mur.', 1);
INSERT INTO public."Description" VALUES (36, '', '', '', 2, '∞ Votre adversaire défausse une carte de plus, si vous gagnez un Terrain.', 'Vu à la télé, Socisseau est LA révolution de la saucisse sous vide au goût douteux !', 1);
INSERT INTO public."Description" VALUES (37, '', '', '', 1, '∞ Votre adversaire défausse une carte de plus, si vous gagnez un Terrain. COMBO Scorez un Terrain.', 'Aucun de ses propriétaires n''a jamais eu à se plaindre d''elle (ils sont tous morts).', 1);
INSERT INTO public."Description" VALUES (38, '', '', '', 2, 'Défaussez un Personnage en jeu chez votre adversaire. COMBO Piochez une carte par point de Force chez le Personnage défaussé.', 'Elle fait peur comme ça, mais en réalité, si on apprend à la connaître, elle est super sympa.', 1);
INSERT INTO public."Description" VALUES (39, '', '', '', 1, '∞ Si votre adversaire défausse au moins 2 cartes, il en défausse une de plus.', 'Allo, Houston ! Il y a un invité surprise dans le vaisseau, vous pourriez m''aider ?', 1);
INSERT INTO public."Description" VALUES (40, '', '', '', 2, '∞ Si votre adversaire défausse au moins 2 cartes, il en défausse une de plus. COMBO Piochez 2 cartes.', 'Ses dernières paroles ont été: "Hal, pourquoi tu as ouvert tous les SAS de sécurité?"', 1);
INSERT INTO public."Description" VALUES (41, '', '', '', 1, '∞ Défaussez 1 carte de moins pour mettre vos Personnages en jeu. COMBO ∞ A chaque fois que votre adversaire défausse 2 cartes ou plus, piochez une carte.', 'Tout le temps couché au 1er round, mais ne baisse jamais les bras car monte toujours sa garde.', 1);
INSERT INTO public."Description" VALUES (42, '', '', '', 2, '∞ Votre adversaire doit défausser une carte de plus pour poser ses Personnages.', 'La seule ceinture qu''il a eue était celle de sécurité dans sa Peugeot 206.', 1);
INSERT INTO public."Description" VALUES (43, '', '', '', 1, '∞ Si vous avez plus de cartes dans votre défausse que dans votre deck, reprennez en main la carte du dessus de votre défausse en début de tour. COMBO Reprennez en main la carte du dessus de votre défausse.', 'Eeeeeuuuh... zbaaaarg mhhhh oooooergggg !', 1);
INSERT INTO public."Description" VALUES (44, '', '', '', 2, '∞ Si vous avez plus de cartes dans votre défausse que dans votre deck, reprenez en main la carte du dessus de votre défausse en début de tour.', 'Blaaaarg mhhhhoooooo euuuuuoooo saucisse zbeeeeerg !', 1);
INSERT INTO public."Description" VALUES (45, '', '', '', 1, '∞ Au moment de scorer, vos Personnages Terracid ont +1 en Force.', 'Depuis qu''il a quitté la ville pour un village, il a la belle vie à la ferme de Tournan-en-Brie.', 1);
INSERT INTO public."Description" VALUES (46, '', '', '', 2, '∞ Au moment de scorer, vos Personnages Laink ont +1 en Force.', 'Il a tout plaqué et est parti élever des vaches par passion. Le lait qu''il produit est dégueulasse.', 1);
INSERT INTO public."Description" VALUES (47, '', '', '', 1, 'Si vous gagnez un Score ce tour, appliquez 2 fois son effet Gagnant. COMBO Scorez un Terrain.', 'Wouf, wouf', 1);
INSERT INTO public."Description" VALUES (48, '', '', '', 2, 'Si vous gagnez un Score ce tour, appliquez 2 fois son effet Perdant.', 'Gruik, gruik', 1);
INSERT INTO public."Description" VALUES (49, '', '', '', 1, 'Vous et votre adversaire défaussez la première carte de votre deck. Si la vôtre a plus en Force, récupérez-la en main.', 'L''avantage est que, dans sa fromagerie, il peut faire un prout bien odorant en toute discrétion.', 1);
INSERT INTO public."Description" VALUES (50, '', '', '', 2, 'Vous et votre adversaire défaussez la première carte de votre deck. Si la vôtre a plus en Force, récupérez-la en main.', 'Jambon, saucisson, terrine, rillettes, mais surtout un excellent boudin qui pue bien comme il faut.', 1);
INSERT INTO public."Description" VALUES (51, '', '', '', 2, '∞ Si vous avez moins de Personnages en jeu que votre adversaire, le coût pour poser vos Personnages est diminué de 2.', 'Il paraît qu''il a racheté tous les hôpitaux pour en faire des casinos.', 1);
INSERT INTO public."Description" VALUES (52, '', '', '', 1, 'Echangez la position de deux de vos Personnages en jeu.', 'Inventeur de la paille saucisse et de l''œuf sur PC, il est désormais étudié pour son "intelligence".', 1);
INSERT INTO public."Description" VALUES (53, '', '', '', 2, 'Echangez la position de deux de vos Personnages en jeu.', 'Il pense encore que le tacos saucisse va révolutionner le monde de la cuisine.', 1);
INSERT INTO public."Description" VALUES (54, '', '', '', 1, 'Reprenez en main un Terrain de votre défausse. COMBO Reprenez en main un Terrain de votre défausse.', 'Il est incapable de compte le nombre de dents de sa fourche, mais y''a pas plus calé en cochon !', 1);
INSERT INTO public."Description" VALUES (55, '', '', '', 2, 'Reprenez en main un Terrain de votre défausse.', 'Une fois le paysan voisin lui a volé une chèvre. Pour se venger, il lui a cramé sa baraque.', 1);
INSERT INTO public."Description" VALUES (56, '', '', '', 1, 'Regardez les 3 prochaines cartes du deck de votre adversaire et reposez-les dans l''ordre de votre choix.', 'Célèbre inventeur du nutri-score F et reconnu pour sa cuisine généreuse (voire dangereuse).', 1);
INSERT INTO public."Description" VALUES (57, '', '', '', 2, 'Regardez les 3 prochaines cartes du deck de votre adversaire et reposez-les dans l''ordre de votre choix. COMBO Piochez une carte.', 'Il a participé brièvement à une émission de cuisine, intoxiqué tout le jury et brûlé 50% du studio.', 1);
INSERT INTO public."Description" VALUES (58, '', '', '', 1, '∞ Si vous ne l''avez pas joué ce tour, échangez ce Personnage avec un Personnage de votre main et défaussez une carte.', 'Il semble avoir trouvé le jouet de sa maman.', 1);
INSERT INTO public."Description" VALUES (59, '', '', '', 2, '∞ Si vous ne l''avez pas joué ce tour, échangez ce Personnage avec un Personnage de votre main et défaussez une carte.', 'Avec 18 compotes par jour, bébé est obligé de rester constamment sur le pot.', 1);
INSERT INTO public."Description" VALUES (60, '', '', '', 1, 'Défaussez un de vos Personnages et un Personnage adverse. COMBO Regardez la carte du dessous de votre deck. Vous pouvez la reposer au-dessus.', 'J''ai abattu un cerf ce matin ! Par contre, super bizarre, il avait un anorak jaune et des moufles.', 1);
INSERT INTO public."Description" VALUES (61, '', '', '', 2, 'Déplacez un autre Personnage d''un Terrain vers un autre. COMBO Reprenez en main la carte du dessus de votre défausse.', 'Mesdames, messieurs, bienvenue à bord du vol 370 veuillez attacher vos ceintures, ça va secouer.', 1);
INSERT INTO public."Description" VALUES (62, '', '', '', 1, '∞ Ce Personnage a +1 en Force pour chaque carte que vous avez en main.', 'Tout le village a voté pour le pendre la première nuit alors qu''il était Maire depuis 5 minutes.', 1);
INSERT INTO public."Description" VALUES (63, '', '', '', 2, '∞ Ce Personnage a +1 en Force pour chaque carte que vous avez en main. COMBO Piochez une carte.', 'Une fois il s''est transformé en loup-garou mais vu qu''il est végétarien, il est resté super sympa.', 1);
INSERT INTO public."Description" VALUES (64, '', '', '', 1, '∞ Pour votre adversaire, le coût pour poser un Personnage est augmenté de 1. COMBO Défaussez un Personnage en jeu d''une Force de 2 ou moins.', 'Une fois il s''est transformé en loup-garou mais vu qu''il est végétarien, il est resté super sympa.', 1);
INSERT INTO public."Description" VALUES (65, '', '', '', 2, '∞ Une fois par tour, quand vous déclenchez une combo, reprenez en main la carte du dessus de votre défausse. COMBO Reprenez en main un Terrain de votre défausse.', 'Il a bravé tous les dangers pour sauver la princesse de Montmirail (marcher sous la pluie).', 1);
INSERT INTO public."Description" VALUES (66, '', '', '', 1, '∞ Ce Personnage a +1 en Force pour chacune de vos combos en jeu.', 'Il utilise le pointillisme, comme un de ses camarades de classe autrichiens d''ailleurs.', 1);
INSERT INTO public."Description" VALUES (67, '', '', '', 2, '∞ Ce Personnage a +1 en Force pour chacune de vos combos en jeu. COMBO ∞ Ce Personnage a +1 en Force pour chacune de vos combos en jeu.', 'Beaucoup de talent, mais si vous voulez le féliciter pour ça, alors ne parlez qu''à sa droite.', 1);
INSERT INTO public."Description" VALUES (68, '', '', '', 1, 'Si c''est la première carte posée sur son Terrain, reprenez en main les 3 cartes du dessus de votre défausse.', 'Le pauvre, il ne voulait être pompier que pour draguer, il ne savait pas qu''il allait être sur le terrain.', 1);
INSERT INTO public."Description" VALUES (69, '', '', '', 2, 'Si c''est la première carte posée sur son Terrain, reprenez en main les 4 cartes du dessus de votre défausse.', 'Un vrai pompier choisira toujours de sauver en premier ce qu''il y a de plus important.', 1);
INSERT INTO public."Description" VALUES (70, '', '', '', 1, '∞ Votre adversaire ne peut pas jouer de Personnage de Force 2 ou plus sur le Terrain où est ce Personnage.', 'Demandez-lui une potion d''invisibilité et vous aurez une chance sur deux d''être empoisonné.', 1);
INSERT INTO public."Description" VALUES (71, '', '', '', 2, '∞ Votre adversaire ne peut pas jouer de Personnage de Force 2 ou plus sur le Terrain où est ce Personnage.', 'Une fois il a fait disparaître le petit Jimmy pendant un spectacle, il n''est jamais réapparu.', 1);
INSERT INTO public."Description" VALUES (72, '', '', '', 1, '∞ Si c''est votre seul Personnage sur ce Terrain, il a +5 en Force. COMBO Reprenez en main la carte du dessus de votre défausse.', 'Surnommé "l''Architecte", il aurait construit un 15 m² intégralement en carton.', 1);
INSERT INTO public."Description" VALUES (73, '', '', '', 2, '∞ Si c''est votre seul Personnage sur ce Terrain, il a +5 en Force.', 'Il a sorti une chanson à succès sur sa liberté de penser et ça s''est fini par un contrôle fiscal.', 1);
INSERT INTO public."Description" VALUES (75, '', '', '', 2, '∞ Si ce Personnage participe à un Score sur un Terrain, il n''est pas défaussé, mais va sur un autre terrain de votre choix.', 'Détenteur du record de tubes de Biafine utilisés en une semaine', 1);
INSERT INTO public."Description" VALUES (74, '', '', '', 1, '∞ Si ce Personnage participe à un Score sur un Terrain, il n''est pas défaussé, mais va sur un autre terrain de votre choix.', 'Habitué du camping des Vaguelettes depuis 30 ans, tireur de slips et responsable des apéros.', 1);
INSERT INTO public."Description" VALUES (76, '', '', '', 1, '∞ +1 en Force pour chaque Employé WcDo. COMBO Reprenez en main une carte WcDo de votre défausse.', 'Très gentil, mais incapable de retenir "pain viande salade pain".', 1);
INSERT INTO public."Description" VALUES (77, '', '', '', 2, '∞ +1 en Force pour chaque Employé WcDo.', 'Il fait pipi dans les frites des clients qui ne disent pas bonjour.', 1);
INSERT INTO public."Description" VALUES (78, '', '', '', 1, 'Défaussez ce Personnage à la fin de votre tour.', 'Il a utilisé son fémur comme arme contre le dernier aventurier venu explorer sa grotte.', 1);
INSERT INTO public."Description" VALUES (79, '', '', '', 2, 'Défaussez ce Personnage à la fin de votre tour. COMBO Scorez un Terrain.', 'Il garde le trésor enfoui de la caverne Longmur depuis plus de 300 ans. Il a avoué s''ennuyer un peu.', 1);
INSERT INTO public."Description" VALUES (80, '', '', '', 2, '∞ Ajoutez 3 à la Force d''un Personnage pour ce tour, puis défaussez ce Personnage.', 'C''est lui qui a inventé la formation tortue, en référence à l''animal du même nom (la tortue).', 1);
INSERT INTO public."Description" VALUES (81, '', '', '', 1, 'Votre adversaire défausse la carte du dessus de son deck.', 'La race d''araignées était super bof. Du coup, il fait 50kg, ne sait pas se battre et livre des pizzas.', 2);
INSERT INTO public."Description" VALUES (82, '', '', '', 2, 'Votre adversaire défausse la carte du dessus de son deck. COMBO Votre adversaire défausse la carte du dessus de son deck.', 'Si vous pouviez vous dépêcher de prendre la photo; car le marteau est très lourd.', 2);
INSERT INTO public."Description" VALUES (83, '', '', '', 1, 'Piochez une carte.', 'Soldat d''élite reconnu, il perd cependant tous ses moyens quand un Russe crie dans son micro.', 2);
INSERT INTO public."Description" VALUES (84, '', '', '', 2, 'Piochez une carte.', 'Il faut que je maîtrise mon nova pomme d''amour comme je maîtrise ma vie.', 2);
INSERT INTO public."Description" VALUES (85, '', '', '', 2, 'Reprenez en main la carte du dessus de votre défausse.', 'Il a vécu 20 ans dans le placard d''enfance de Terracid, mais n''a jamais été remarqué (dépressif).', 2);
INSERT INTO public."Description" VALUES (86, '', '', '', 3, 'Défaussez un Personnage en jeu de votre adversaire d''une Force de 2 maximum et scorez un Terrain. COMBO Votre adversaire défausse la carte du dessus de son deck.', 'Il a œuvré toute sa vie contre l''addiction aux drogues chez les développeurs de jeux.', 2);
INSERT INTO public."Description" VALUES (89, '', '', '', 1, 'Votre adversaire défausse jusqu''à ce qu''il ait autant de cartes en main que vous.', 'On raconte que son navire a coulé dans le sud du Pacifique (à cause du poids de l''or dans la cale).', 2);
INSERT INTO public."Description" VALUES (90, '', '', '', 2, 'Votre adversaire défausse jusqu''à ce qu''il ait autant de cartes en main que vous.', 'Il aime l''or, le sang, la bagarre, mais aussi l''odeur des croissants chauds de la boulangerie.', 2);
INSERT INTO public."Description" VALUES (91, '', '', '', 1, '∞ Vous pouvez défausser ce Personnage pour scorer un Terrain.', 'Malgré les difficultés, il insiste pour entretenir une romance hétéro curieuse avec son compagnon.', 2);
INSERT INTO public."Description" VALUES (104, '', '', '', 1, 'Cherchez dans votre deck et choisissez une carte que vous piochez. Mélangez ensuite votre deck.', 'Plus qu''une goutte de polymorphie, et ma potion contre l''acné juvénile sera enfin prête.', 2);
INSERT INTO public."Description" VALUES (87, '', '', '', 3, 'Piochez une carte. COMBO ∞ +2 en Force.', 'Autrefois Youtubeur émérite, Seb vit désormais dans la jungle au sein d''une famille de chimpanzés.', 2);
INSERT INTO public."Description" VALUES (92, '', '', '', 2, '∞ Vous pouvez défausser ce Personnage pour scorer un Terrain. COMBO Placez une ou plusieurs cartes de votre main sous votre deck. Repiochez autant de cartes.', 'Il ne l''avouera pas, mais il cherche par tous les moyens à s''accaparer la rondelle de son compagnon.', 2);
INSERT INTO public."Description" VALUES (93, '', '', '', 1, '∞ Au moment de scorer, vous pouvez jouer gratuitement une carte sur le Terrain scoré sans en appliquer les effets. COMBO Piochez une carte.', 'Il fait croire à tout le monde qu''il n''a pris aucun plaisir en embrassant sa propre mère.', 2);
INSERT INTO public."Description" VALUES (94, '', '', '', 2, '∞ Au moment de scorer, vous pouvez jouer gratuitement une carte sur le Terrain scoré sans en appliquer les effets. COMBO Reprenez en main la carte du dessus de votre défausse.', 'A la base, il voulait juste mettre de la nitro dans sa DeLorean, puis ça a dégénéré.', 2);
INSERT INTO public."Description" VALUES (95, '', '', '', 1, 'Echangez un de vos Personnages posés avec un de votre main de Force inférieure ou égale. COMBO Piochez 3 cartes.', 'J''ai déjà vu le maréchal Pétain en slip. Eh bé, croyez-moi, c''était pas beau à voir !', 2);
INSERT INTO public."Description" VALUES (96, '', '', '', 2, 'Echangez un de vos Personnages posés avec un de votre main de Force inférieure ou égale.', 'Moi de mon temps, on avait un bâton et des cailloux pour s''amuser et c''était très bien comme ça !', 2);
INSERT INTO public."Description" VALUES (97, '', '', '', 1, 'Votre adversaire défausse depuis sa main pour avoir autant de cartes en main que vous.', 'A seulement 16 ans, comme chaque viewer du tchat, il est à la fois archéologue, boulanger, comptable, mécanicien...', 2);
INSERT INTO public."Description" VALUES (98, '', '', '', 2, 'Votre adversaire défausse pour avoir autant de cartes en main que vous. COMBO Piochez 3 cartes.', 'Ne vous fiez pas à son air innocent, elle a écrit pas moins de 326 fanfictions érotiques sur ses Youtubeurs préférés.', 2);
INSERT INTO public."Description" VALUES (99, '', '', '', 3, 'Défaussez un de vos Personnages en jeu. Votre adversaire défausse autant de cartes de son deck que sa valeur en force.', 'Les journaux l''appellent le "French Monster" ou "Celui qui a pris une belle tête par Terracid".', 2);
INSERT INTO public."Description" VALUES (100, '', '', '', 5, '∞ Vous pouvez défausser ce Personnage pour scorer 1 ou 2 Terrains. COMBO Placez une ou plusieurs cartes de votre main sous votre deck. Repiochez autant de cartes.', 'Il aime Noël, sa casquette, mais surtout assassiner des gens discrètement.', 2);
INSERT INTO public."Description" VALUES (101, '', '', '', 2, '∞ Si vous perdez un Score, récupérez en main la première carte de votre défausse. COMBO Déplacez un autre Personnage d''un Terrain à un autre.', 'S''il mange après minuit, ce monstre est capable de péter et roter indéfiniment.', 2);
INSERT INTO public."Description" VALUES (102, '', '', '', 1, 'COMBO ∞ Cette carte a +1 en Force pour chacun de vos Personnages sur ce Terrain.', 'Avant, il avait une ferme avec beaucoup d''animaux très mignons, mais un jour, il a eu besoin d''XP...', 2);
INSERT INTO public."Description" VALUES (103, '', '', '', 2, '', 'Ne lui montrez surtout pas un diamant, sinon il devient inarêtable.', 2);
INSERT INTO public."Description" VALUES (105, '', '', '', 2, 'Cherchez dans votre deck et choisissez une carte que vous piochez. Mélangez ensuite votre deck. COMBO Jouez gratuitement une de vos cartes Personnage.', 'Il veut faire des saloperies avec la chaussette de son maître.', 2);
INSERT INTO public."Description" VALUES (106, '', '', '', 1, 'Ce tour, si vous perdez le prochain Score, votre adversaire défausse 2 cartes de sa main.', 'Quand il s''énerve, il est capable de déverser plus de sel que toute la mer Méditerranée.', 2);
INSERT INTO public."Description" VALUES (107, '', '', '', 2, 'Ce tour, si vous perdez le prochain Score, votre adversaire défausse un de ses Personnages en jeu. COMBO Reprenez en main un Terrain de votre défausse.', 'Quand il rage, il a le pouvoir de faire augmenter en flèche votre hypertension artérielle.', 2);
INSERT INTO public."Description" VALUES (108, '', '', '', 3, 'Scorez tous les Terrains en jeu. COMBO Reprenez en main un Terrain de votre défausse.', 'Drôle, musclé, chanteur, a-t-il un défaut ? Aucun, sauf son furoncle entre les fesses depuis 2014.', 2);
INSERT INTO public."Description" VALUES (109, '', '', '', 3, '∞ Au début de votre tour, reprenez en main la carte du dessus de votre défausse. COMBO Reprenez en main deux cartes du dessus de votre défausse.', 'Il est très gentil, mais ne tombez surtout pas sur son double maléfique Diabo.', 2);
INSERT INTO public."Description" VALUES (110, '', '', '', 1, 'Défaussez la première carte de votre deck. Défaussez tous les Personnages adverses en jeu qui ont moins en Force. COMBO Jouez une carte Personnage sans payer son coût.', 'C''est le premier à avoir qu''il y avait assez de place pour tout le monde dans cette ville.', 2);
INSERT INTO public."Description" VALUES (111, '', '', '', 2, 'Défaussez la première carte de votre deck. Défaussez tous les Personnages adverses en jeu qui ont plus en Force.', 'Il a gagné son duel contre McNuggets. En même temps, c''était pas compliqué, McNuggets était aveugle.', 2);
INSERT INTO public."Description" VALUES (112, '', '', '', 1, '∞ Défaussez ce Personnage à la place de n''importe quel autre qui devait être défaussé. COMBO Si vous avec un Policier dans votre défausse, posez-le au-dessus de votre deck.', 'Partir en intervention le ventre vide, c''est irresponsable, voire carrément dangereux !', 2);
INSERT INTO public."Description" VALUES (113, '', '', '', 2, '∞ Défaussez ce Personnage à la place de n''importe quel autre qui devait être défaussé. COMBO Si vous avec un Policier dans votre défausse, posez-le au-dessus de votre deck.', 'Mon bon monsieur, votre femme qui accouche, c''est pas mon problème. Ici, c''est une place réservée.', 2);
INSERT INTO public."Description" VALUES (114, '', '', '', 1, '∞ Si plus d''un Terrain est scoré dans le tour, tous vos Personnages ont +1 en Force pour le tour.', 'Il n''a absolument pas le temps de réparer sa douche, il a raid tous les soirs !', 2);
INSERT INTO public."Description" VALUES (115, '', '', '', 1, 'Déplacez un autre Personnage d''un Terrain vers un autre', 'OUH OUH AAAAH AH OUH caca OUUUUUH !', 2);
INSERT INTO public."Description" VALUES (116, '', '', '', 2, 'Regardez les 3 premières cartes de votre deck. Piochez-en une, jouez-la gratuitement et remettez la dernière sur le deck.', 'La seule enquête qu''il n''a pas encore résolue, c''est celle du fantôme à la kékette tordue.', 2);
INSERT INTO public."Description" VALUES (117, '', '', '', 3, 'Scorez un Terrain. COMBO ∞ Cette carte a +1 en Force pour chacun de vos Personnages sur le même Terrain.', 'Il aurait proposé à la production de jeter les candidats éliminés dans une cage aux lions.', 2);
INSERT INTO public."Description" VALUES (118, '', '', '', 3, 'Votre adversaire défausse depuis sa main jusqu''à ce qu''il ait moins de cartes en main que vous.', 'Il a dépensé le PIB de la Guyane, mais au moins sa tenue est très jolie !', 2);
INSERT INTO public."Description" VALUES (119, '', '', '', 3, 'Votre adversaire défausse la carte du dessus de son deck. COMBO Votre adversaire défausse la carte du dessus de son deck.', 'Cela fait maintenant 30 jours qu''il est coincé dans les backrooms, mais apparemment il s''y sent bien.', 2);
INSERT INTO public."Description" VALUES (120, '', '', '', 1, 'Si vous avez exactement 3 ou 5 cartes en main, récupérez les 2 cartes du dessus de votre défausse.', 'Ça fait 3 jours qu''elle pédale après celui qui a osé voler sa recette de crêpes aux huîtres.', 2);
INSERT INTO public."Description" VALUES (121, '', '', '', 2, '∞ Au moment de scorer, vous pouvez jouer gratuitement une carte sur le Terrain scoré sans en appliquer les effets.', 'On espère pour lui qu''il gardera sa tête, malgré l''impôt qu''il augmente chaque année.', 2);
INSERT INTO public."Description" VALUES (122, '', '', '', 3, '∞ Vos autres Personnages qui ne sont ni Terracid ni Laink triplent leur Force.', 'Le seul cowboy de la ville qui monte un âne et arrive quand même à braquer des banques.', 2);
INSERT INTO public."Description" VALUES (123, '', '', '', 3, '∞ Si vous devez défausser exactement 2 cartes d''un coup, vous n''en défaussez qu''une. COMBO Reprenez en main la carte du dessus de votre défausse.', 'Tout le monde l''appelle "le fast", même sa copine, mais peut-être pas pour les mêmes raisons.', 2);
INSERT INTO public."Description" VALUES (124, '', '', '', 1, '∞ Les Personnages doivent être posés sur le même Terrain que celui de ce Personnage.', 'Si vous trouvez que mes cheveux sont très longs alors attendez de voir en dessous.', 2);
INSERT INTO public."Description" VALUES (125, '', '', '', 2, '∞ Les Personnages doivent être posés sur le même Terrain que celui de ce Personnage.', 'On m''a donné cette délicieuse pomme à Gare du Nord, je peux donc la croquer sans risque !', 2);
INSERT INTO public."Description" VALUES (126, '', '', '', 2, 'Chaque joueur annonce un chiffre en même temps. Le plus bas défausse autant de cartes. Le plus haut reprend en main autant de cartes de sa défausse.', 'Tu veux claquer de l''escalope et dégivrer le gigot, mon mignon ?', 2);
INSERT INTO public."Description" VALUES (127, '', '', '', 1, 'Annoncez un chiffre et piochez la première carte de votre deck. Si c''est un Personnage de Force égale à ce chiffre, mettez-le en jeu gratuitement et recommencez.', 'Elle est très mignonne, mais méfiez-vous : ses sorts préférés sont abcès anal et varicelle.', 2);
INSERT INTO public."Description" VALUES (128, '', '', '', 5, 'Cherchez dans votre deck et choisissez 2 cartes que vous piochez. Mélangez ensuite votre deck.', 'J''explorais les catacombes et puis j''ai cramé.', 2);
INSERT INTO public."Description" VALUES (129, '', '', '', 3, 'Scorez 1 ou 2 Terrains. COMBO Reprenez en main la carte du dessus de votre défausse.', 'On peut penser qu''il est très intelligent, mais sachez qu''il a déjà construit un bateau en béton.', 2);
INSERT INTO public."Description" VALUES (130, '', '', '', 1, '∞ Défaussez ce personnage pour reprendre en main les 3 cartes du dessus de votre défausse.', 'Il voulait être charpentier, mais à cause de sa calvitie, il a dû changer de vocation.', 2);
INSERT INTO public."Description" VALUES (131, '', '', '', 1, 'Défaussez un Personnage adverse en jeu d''une Force de 2 maximum.', 'Il a fait pipi sur une voiture de la mafia et a démarré une guerre de gangs qui dure depuis 10 ans.', 4);
INSERT INTO public."Description" VALUES (132, '', '', '', 2, 'Défaussez un Personnage adverse en jeu d''une Force de 2 maximum. COMBO Votre adversaire défausse la carte du dessus de son deck.', 'Moi ? Le cybersexe ? N''importe quoi, trop nul le cybersexe, je vais jamais au cybersexe, moi.', 4);
INSERT INTO public."Description" VALUES (133, '', '', '', 1, 'Défaussez un Personnage adverse en jeu d''une Force de 1 maximum.', 'BRANCARDIER ! J''ai des douleurs dans la nuque, c''est très désagréable ! Et j''ai mal au bidou !', 4);
INSERT INTO public."Description" VALUES (134, '', '', '', 2, 'Défaussez un Personnage adverse en jeu d''une Force de 1 maximum.', 'Héros de guerre légendaire (il n''a tiré aucune balle et a poussé quelqu''un pour survivre).', 4);
INSERT INTO public."Description" VALUES (135, '', '', '', 1, '∞ Quand votre adversaire pioche, il pioche une carte de plus et en défausse une.', 'Meilleur dresseur du monde mais chômeur et pas de parents.', 4);
INSERT INTO public."Description" VALUES (136, '', '', '', 2, '∞ Quand votre adversaire pioche, il pioche une carte de plus et en défausse une.', 'Oui, c''est un peu comme des combats de chiens sauf que là, on les garde dans des boules.', 4);
INSERT INTO public."Description" VALUES (137, '', '', '', 1, 'Si vous avez exactement 3 cartes en main, récupérez la carte du dessus de votre défausse.', 'Pour survivre, il la dû faire des choses horribles, comme boire de l''eau du robinet.', 4);
INSERT INTO public."Description" VALUES (138, '', '', '', 2, 'Si vous avez exactement 4 cartes en main, récupérez la carte du dessus de votre défausse.', 'Il me reste seulement 18 boîtes de conserve. Je ne tiendrai jamais la journée.', 4);
INSERT INTO public."Description" VALUES (139, '', '', '', 1, 'Annoncez un nombre, puis regardez la première carte de votre deck. Si elle a cette valeur de Force, mettez-la en jeu gratuitement. Sinon piochez-la.', 'C''est le tout dernier Call Of neuf sous blister ? Je peux vous le reprendre 2€, si vous voulez.', 4);
INSERT INTO public."Description" VALUES (172, '', '', '', 2, 'Doublez la Force de tous vos autres Personnages jusqu''à la fin de votre tour.', 'Il a joué avec un vieil obus trouvé près de la rivière et depuis il est puni.', 7);
INSERT INTO public."Description" VALUES (140, '', '', '', 2, 'Regardez les 3 premières cartes de votre deck. Piochez-en une, jouez-en une gratuitement et remettez la dernière sur le deck.', 'Il a eu sa première vision avec une tranche de jambon de Bayonne, à l''âge de 9 ans.', 4);
INSERT INTO public."Description" VALUES (141, '', '', '', 1, 'Doublez la Force de tous vos autres Personnages jusqu''à la fin de votre tour. COMBO Scorez un Terrain.', 'Il paraît que Pinoche a embrassé Giselle sur la bouche près du vieux châtaignier.', 4);
INSERT INTO public."Description" VALUES (142, '', '', '', 2, 'Doublez la Force de tous vos autres Personnages jusqu''à la fin de votre tour.', 'Il a joué avec un vieil obus trouvé près de la rivière et depuis il est puni.', 4);
INSERT INTO public."Description" VALUES (144, '', '', '', 2, '∞ Doublez la Force de tous vos Personnages de type Terracid.', 'La réponse est simple : "On ne mange pas avec les doigts."', 4);
INSERT INTO public."Description" VALUES (143, '', '', '', 1, '∞ Doublez la Force de tous vos Personnages de type Laink. COMBO Scorez un Terrain.', 'Le taux de réussite au BAC dans sa classe est de 15 %, et c''est déjà pas mal.', 4);
INSERT INTO public."Description" VALUES (145, '', '', '', 1, '∞ Doublez la Force de tous vos Personnages sur le même Terrain que ce Personnage.', 'Il a raté son harakiri. Maintenant, il a une sonde urinaire et nettoie les murs du temple.', 4);
INSERT INTO public."Description" VALUES (146, '', '', '', 2, '∞ Divisez par 2 la Force de tous les Personnages adverses sur le même Terrain que ce Personnage. COMBO Scorez un Terrain.', 'Autrefois grand maître de kung-fu, il arnaque aujourd''hui les touristes sur le mont Fuji.', 4);
INSERT INTO public."Description" VALUES (147, '', '', '', 1, 'Votre prochaine carte Personnage coûte 0 à mettre en jeu ce tour. COMBO Reprenez en main la carte du dessus de votre défausse.', 'Elle a tendance à râler pendant qu''elle bosse et insulter copieusement Martine dans son dos.', 4);
INSERT INTO public."Description" VALUES (148, '', '', '', 2, 'Votre prochaine carte Personnage coûte 0 à mettre en jeu ce tour. COMBO Scorez un Terrain.', 'Les gens sont des porcs. C''est fou ce qu''on peut trouver par terre de nos jours.', 4);
INSERT INTO public."Description" VALUES (149, '', '', '', 1, '∞ Si vous scorez un Terrain pendant votre tour, défaussez ce Personnage. COMBO AVEC TERRACID Vos Personnages coûtent 0 à poser pour le tour.', 'C''est ici que ...', 4);
INSERT INTO public."Description" VALUES (150, '', '', '', 2, '∞ Si vous scorez un Terrain pendant votre tour, défaussez ce Personnage. COMBO AVEC LAINK Vos Personnages coûtent 0 à poser pour le tour.', '... tout a commencé.', 4);
INSERT INTO public."Description" VALUES (151, '', '', '', 1, 'Défaussez la première carte de votre deck. Défaussez tous les Personnages adverses en jeu qui ont moins en Force. COMBO Jouez une carte Personnage sans payer son coût.', 'C''est le premier à avoir qu''il y avait assez de place pour tout le monde dans cette ville.', 5);
INSERT INTO public."Description" VALUES (152, '', '', '', 2, 'Défaussez la première carte de votre deck. Défaussez tous les Personnages adverses en jeu qui ont plus en Force.	', 'Il a gagné son duel contre McNuggets. En même temps, c''était pas compliqué, McNuggets était aveugle.	', 5);
INSERT INTO public."Description" VALUES (153, '', '', '', 1, '∞ Défaussez ce Personnage à la place de n''importe quel autre qui devait être défaussé. COMBO Si vous avec un Policier dans votre défausse, posez-le au-dessus de votre deck.', 'Partir en intervention le ventre vide, c''est irresponsable, voire carrément dangereux !	', 5);
INSERT INTO public."Description" VALUES (154, '', '', '', 2, '∞ Défaussez ce Personnage à la place de n''importe quel autre qui devait être défaussé. COMBO Si vous avec un Policier dans votre défausse, posez-le au-dessus de votre deck.', 'Mon bon monsieur, votre femme qui accouche, c''est pas mon problème. Ici, c''est une place réservée.', 5);
INSERT INTO public."Description" VALUES (155, '', '', '', 1, 'Ce tour, si vous perdez le prochain Score, votre adversaire défausse 2 cartes de sa main.	', 'Quand il s''énerve, il est capable de déverser plus de sel que toute la mer Méditerranée.	', 5);
INSERT INTO public."Description" VALUES (156, '', '', '', 2, 'Ce tour, si vous perdez le prochain Score, votre adversaire défausse un de ses Personnages en jeu. COMBO Reprenez en main un Terrain de votre défausse.', 'Quand il rage, il a le pouvoir de faire augmenter en flèche votre hypertension artérielle.', 5);
INSERT INTO public."Description" VALUES (157, '', '', '', 1, 'Vous et votre adversaire défaussez la première carte de votre deck. Si la vôtre a plus en Force, récupérez-la en main.', 'L''avantage est que, dans sa fromagerie, il peut faire un prout bien odorant en toute discrétion.', 5);
INSERT INTO public."Description" VALUES (158, '', '', '', 2, 'Vous et votre adversaire défaussez la première carte de votre deck. Si la vôtre a plus en Force, récupérez-la en main.', 'Jambon, saucisson, terrine, rillettes, mais surtout un excellent boudin qui pue bien comme il faut.', 5);
INSERT INTO public."Description" VALUES (159, '', '', '', 3, 'Défaussez un de vos Personnages en jeu. Votre adversaire défausse autant de cartes de son deck que sa valeur en force.', 'Les journaux l''appellent le "French Monster" ou "Celui qui a pris une belle tête par Terracid".', 5);
INSERT INTO public."Description" VALUES (88, '', '', '', 3, 'Piochez une carte. COMBO ∞ +2 en Force.', 'Grand entrepreneur et futur astronaute, mais a tendance à égarer les objets offerts par ses amis.', 2);
INSERT INTO public."Description" VALUES (160, '', '', '', 3, 'Piochez une carte. COMBO ∞ +2 en Force.', 'Grand entrepreneur et futur astronaute, mais a tendance à égarer les objets offerts par ses amis.', 5);
INSERT INTO public."Description" VALUES (161, '', '', '', 1, 'Votre adversaire défausse jusqu''à ce qu''il ait autant de cartes en main que vous.', 'On raconte que son navire a coulé dans le sud du Pacifique (à cause du poids de l''or dans la cale).', 5);
INSERT INTO public."Description" VALUES (162, '', '', '', 2, 'Votre adversaire défausse jusqu''à ce qu''il ait autant de cartes en main que vous.', 'Il aime l''or, le sang, la bagarre, mais aussi l''odeur des croissants chauds de la boulangerie.', 5);
INSERT INTO public."Description" VALUES (163, '', '', '', 3, 'Scorez tous les Terrains en jeu. COMBO Reprenez en main un Terrain de votre défausse.', 'Drôle, musclé, chanteur, a-t-il un défaut ? Aucun, sauf son furoncle entre les fesses depuis 2014.', 6);
INSERT INTO public."Description" VALUES (164, '', '', '', 5, 'Cherchez dans votre deck et choisissez 2 cartes que vous piochez. Mélangez ensuite votre deck.', 'J''explorais les catacombes et puis j''ai cramé.', 6);
INSERT INTO public."Description" VALUES (165, '', '', '', 1, 'Piochez une carte.', 'Soldat d''élite reconnu, il perd cependant tous ses moyens quand un Russe crie dans son micro.', 6);
INSERT INTO public."Description" VALUES (166, '', '', '', 2, 'Piochez une carte.', 'Il faut que je maîtrise mon nova pomme d''amour comme je maîtrise ma vie.', 6);
INSERT INTO public."Description" VALUES (167, '', '', '', 3, 'Défaussez un Personnage en jeu de votre adversaire d''une Force de 2 maximum et scorez un Terrain. COMBO Votre adversaire défausse la carte du dessus de son deck.', 'Il a œuvré toute sa vie contre l''addiction aux drogues chez les développeurs de jeux.', 6);
INSERT INTO public."Description" VALUES (168, '', '', '', 3, 'Piochez une carte. COMBO ∞ +2 en Force.', 'Autrefois Youtubeur émérite, Seb vit désormais dans la jungle au sein d''une famille de chimpanzés.', 6);
INSERT INTO public."Description" VALUES (169, '', '', '', 1, 'Annoncez un nombre, puis regardez la première carte de votre deck. Si elle a cette valeur de Force, mettez-la en jeu gratuitement. Sinon piochez-la.', 'C''est le tout dernier Call Of neuf sous blister ? Je peux vous le reprendre 2€, si vous voulez.', 7);
INSERT INTO public."Description" VALUES (170, '', '', '', 2, 'Regardez les 3 premières cartes de votre deck. Piochez-en une, jouez-en une gratuitement et remettez la dernière sur le deck.', 'Il a eu sa première vision avec une tranche de jambon de Bayonne, à l''âge de 9 ans.', 7);
INSERT INTO public."Description" VALUES (171, '', '', '', 1, 'Doublez la Force de tous vos autres Personnages jusqu''à la fin de votre tour. COMBO Scorez un Terrain.', 'Il paraît que Pinoche a embrassé Giselle sur la bouche près du vieux châtaignier.', 7);
INSERT INTO public."Description" VALUES (173, '', '', '', 1, 'Si vous avez exactement 3 cartes en main, récupérez la carte du dessus de votre défausse.', 'Pour survivre, il la dû faire des choses horribles, comme boire de l''eau du robinet.', 7);
INSERT INTO public."Description" VALUES (174, '', '', '', 2, 'Si vous avez exactement 4 cartes en main, récupérez la carte du dessus de votre défausse.', 'Il me reste seulement 18 boîtes de conserve. Je ne tiendrai jamais la journée.', 7);
INSERT INTO public."Description" VALUES (175, '', '', '', 1, 'Défaussez un Personnage adverse en jeu d''une Force de 1 maximum.', 'BRANCARDIER ! J''ai des douleurs dans la nuque, c''est très désagréable ! Et j''ai mal au bidou !', 8);
INSERT INTO public."Description" VALUES (176, '', '', '', 2, 'Défaussez un Personnage adverse en jeu d''une Force de 1 maximum.', 'Héros de guerre légendaire (il n''a tiré aucune balle et a poussé quelqu''un pour survivre).', 8);
INSERT INTO public."Description" VALUES (177, '', '', '', 1, 'Votre prochaine carte Personnage coûte 0 à mettre en jeu ce tour. COMBO Reprenez en main la carte du dessus de votre défausse.', 'Elle a tendance à râler pendant qu''elle bosse et insulter copieusement Martine dans son dos.', 8);
INSERT INTO public."Description" VALUES (178, '', '', '', 2, 'Votre prochaine carte Personnage coûte 0 à mettre en jeu ce tour. COMBO Scorez un Terrain.', 'Les gens sont des porcs. C''est fou ce qu''on peut trouver par terre de nos jours.', 8);
INSERT INTO public."Description" VALUES (179, '', '', '', 1, '∞ Si vous scorez un Terrain pendant votre tour, défaussez ce Personnage. COMBO AVEC TERRACID Vos Personnages coûtent 0 à poser pour le tour.', 'C''est ici que ...', 9);
INSERT INTO public."Description" VALUES (180, '', '', '', 2, '∞ Si vous scorez un Terrain pendant votre tour, défaussez ce Personnage. COMBO AVEC LAINK Vos Personnages coûtent 0 à poser pour le tour.', '... tout a commencé.', 9);


--
-- Data for Name: Type; Type: TABLE DATA; Schema: public; Owner: Timeuh
--

INSERT INTO public."Type" VALUES (2, 'Personnage');
INSERT INTO public."Type" VALUES (1, 'Terrain');


--
-- Data for Name: Card; Type: TABLE DATA; Schema: public; Owner: Timeuh
--

INSERT INTO public."Card" VALUES (78, 'Mort-Vivant', 'Origins', 78, 2, 7, 'mort_vivant_laink.webp');
INSERT INTO public."Card" VALUES (79, 'Mort-Vivant', 'Origins', 79, 2, 7, 'mort_vivant_terracid.webp');
INSERT INTO public."Card" VALUES (80, 'Soldat Romain', 'Origins', 80, 2, 7, 'soldat_romain.webp');
INSERT INTO public."Card" VALUES (49, 'Fromager', 'Origins', 49, 2, 3, 'fromager.webp');
INSERT INTO public."Card" VALUES (2, 'Portal', 'Origins', 2, 1, 1, 'portal.webp');
INSERT INTO public."Card" VALUES (1, 'Navire Pirate', 'Origins', 1, 1, 1, 'navire_pirate.webp');
INSERT INTO public."Card" VALUES (31, 'Garagiste', 'Origins', 31, 2, 1, 'garagiste_laink.webp');
INSERT INTO public."Card" VALUES (3, 'Quantum', 'Origins', 3, 1, 1, 'quantum.webp');
INSERT INTO public."Card" VALUES (4, 'Rocket Field', 'Origins', 4, 1, 1, 'rocket_field.webp');
INSERT INTO public."Card" VALUES (5, 'Rust', 'Origins', 5, 1, 1, 'rust.webp');
INSERT INTO public."Card" VALUES (6, 'Il fait pas chaud', 'Origins', 6, 1, 4, 'il_fait_pas_chaud.webp');
INSERT INTO public."Card" VALUES (7, 'Golf', 'Origins', 7, 1, 4, 'golf.webp');
INSERT INTO public."Card" VALUES (8, 'Dust 2', 'Origins', 8, 1, 4, 'dust_2.webp');
INSERT INTO public."Card" VALUES (9, 'Space Factory', 'Origins', 9, 1, 4, 'space_factory.webp');
INSERT INTO public."Card" VALUES (10, 'La F.A.Q', 'Origins', 10, 1, 4, 'la_faq.webp');
INSERT INTO public."Card" VALUES (11, 'Musee', 'Origins', 11, 1, 3, 'musee.webp');
INSERT INTO public."Card" VALUES (12, 'FNAF', 'Origins', 12, 1, 3, 'fnaf.webp');
INSERT INTO public."Card" VALUES (13, 'Village', 'Origins', 13, 1, 3, 'village.webp');
INSERT INTO public."Card" VALUES (14, 'La Ferme', 'Origins', 14, 1, 3, 'la_ferme.webp');
INSERT INTO public."Card" VALUES (15, 'Socisseau Factory', 'Origins', 15, 1, 3, 'socisseau_factory.webp');
INSERT INTO public."Card" VALUES (16, 'Trou du Monde', 'Origins', 16, 1, 2, 'trou_du_monde.webp');
INSERT INTO public."Card" VALUES (17, 'Moria', 'Origins', 17, 1, 2, 'moria.webp');
INSERT INTO public."Card" VALUES (18, 'Tchernobyl', 'Origins', 18, 1, 2, 'tchernobyl.webp');
INSERT INTO public."Card" VALUES (19, 'Valheim', 'Origins', 19, 1, 2, 'valheim.webp');
INSERT INTO public."Card" VALUES (20, 'Tranchees', 'Origins', 20, 1, 2, 'tranchees.webp');
INSERT INTO public."Card" VALUES (21, 'Ravenholm', 'Origins', 21, 1, 2, 'ravenholm.webp');
INSERT INTO public."Card" VALUES (22, 'Urbex', 'Origins', 22, 1, 5, 'urbex.webp');
INSERT INTO public."Card" VALUES (23, 'Manoir', 'Origins', 23, 1, 1, 'manoir.webp');
INSERT INTO public."Card" VALUES (24, 'Barrage', 'Origins', 24, 1, 2, 'barrage.webp');
INSERT INTO public."Card" VALUES (25, 'Chernogorsk', 'Origins', 25, 1, 5, 'chernogorsk.webp');
INSERT INTO public."Card" VALUES (26, 'Agrou', 'Origins', 26, 1, 5, 'agrou.webp');
INSERT INTO public."Card" VALUES (27, 'Garage', 'Origins', 27, 1, 5, 'garage.webp');
INSERT INTO public."Card" VALUES (28, 'Uretus', 'Origins', 28, 1, 5, 'uretus.webp');
INSERT INTO public."Card" VALUES (29, 'Wankil Show', 'Origins', 29, 1, 5, 'wankil_show.webp');
INSERT INTO public."Card" VALUES (30, 'Convention', 'Origins', 30, 1, 5, 'convention.webp');
INSERT INTO public."Card" VALUES (32, 'Garagiste', 'Origins', 32, 2, 1, 'garagiste_terracid.webp');
INSERT INTO public."Card" VALUES (33, 'Camionneur', 'Origins', 33, 2, 1, 'camionneur_laink.webp');
INSERT INTO public."Card" VALUES (34, 'Camionneur', 'Origins', 34, 2, 1, 'camionneur_terracid.webp');
INSERT INTO public."Card" VALUES (35, 'Vendeur', 'Origins', 35, 2, 1, 'vendeur_laink.webp');
INSERT INTO public."Card" VALUES (36, 'Vendeur', 'Origins', 36, 2, 1, 'vendeur_terracid.webp');
INSERT INTO public."Card" VALUES (37, 'Annabelle', 'Origins', 37, 2, 4, 'annabelle.webp');
INSERT INTO public."Card" VALUES (38, 'Grudge', 'Origins', 38, 2, 4, 'grudge.webp');
INSERT INTO public."Card" VALUES (39, 'Astronaute', 'Origins', 39, 2, 4, 'astronaute_laink.webp');
INSERT INTO public."Card" VALUES (40, 'Astronaute', 'Origins', 40, 2, 4, 'astronaute_terracid.webp');
INSERT INTO public."Card" VALUES (41, 'Boxeur', 'Origins', 41, 2, 3, 'boxeur_laink.webp');
INSERT INTO public."Card" VALUES (42, 'Boxeur', 'Origins', 42, 2, 3, 'boxeur_terracid.webp');
INSERT INTO public."Card" VALUES (43, 'Infecté', 'Origins', 43, 2, 3, 'infecte_laink.webp');
INSERT INTO public."Card" VALUES (44, 'Infecté', 'Origins', 44, 2, 3, 'infecte_terracid.webp');
INSERT INTO public."Card" VALUES (45, 'Fermier', 'Origins', 45, 2, 3, 'fermier_laink.webp');
INSERT INTO public."Card" VALUES (46, 'Fermier', 'Origins', 46, 2, 3, 'fermier_terracid.webp');
INSERT INTO public."Card" VALUES (47, 'Chien', 'Origins', 47, 2, 3, 'chien.webp');
INSERT INTO public."Card" VALUES (48, 'Cochon', 'Origins', 48, 2, 3, 'cochon.webp');
INSERT INTO public."Card" VALUES (50, 'Charcutier', 'Origins', 50, 2, 3, 'charcutier.webp');
INSERT INTO public."Card" VALUES (51, 'Businessman', 'Origins', 51, 2, 3, 'businessman.webp');
INSERT INTO public."Card" VALUES (52, 'Débile', 'Origins', 52, 2, 2, 'debile_laink.webp');
INSERT INTO public."Card" VALUES (53, 'Débile', 'Origins', 53, 2, 2, 'debile_terracid.webp');
INSERT INTO public."Card" VALUES (54, 'Paysan', 'Origins', 54, 2, 2, 'paysan_laink.webp');
INSERT INTO public."Card" VALUES (55, 'Paysan', 'Origins', 55, 2, 2, 'paysan_terracid.webp');
INSERT INTO public."Card" VALUES (56, 'Cuisinier', 'Origins', 56, 2, 2, 'cuisinier_laink.webp');
INSERT INTO public."Card" VALUES (57, 'Cuisinier', 'Origins', 57, 2, 2, 'cuisinier_terracid.webp');
INSERT INTO public."Card" VALUES (58, 'Bébé', 'Origins', 58, 2, 2, 'bebe_laink.webp');
INSERT INTO public."Card" VALUES (59, 'Bébé', 'Origins', 59, 2, 2, 'bebe_terracid.webp');
INSERT INTO public."Card" VALUES (60, 'Chasseur', 'Origins', 60, 2, 2, 'chasseur.webp');
INSERT INTO public."Card" VALUES (61, 'Pilote d''Avion', 'Origins', 61, 2, 2, 'pilote_d_avion.webp');
INSERT INTO public."Card" VALUES (62, 'Agrou', 'Origins', 62, 2, 3, 'agrou_laink.webp');
INSERT INTO public."Card" VALUES (63, 'Agrou', 'Origins', 63, 2, 3, 'agrou_terracid.webp');
INSERT INTO public."Card" VALUES (64, 'Chevalier', 'Origins', 64, 2, 6, 'chevalier_laink.webp');
INSERT INTO public."Card" VALUES (65, 'Chevalier', 'Origins', 65, 2, 6, 'chevalier_terracid.webp');
INSERT INTO public."Card" VALUES (66, 'Peintre', 'Origins', 66, 2, 6, 'peintre_laink.webp');
INSERT INTO public."Card" VALUES (67, 'Peintre', 'Origins', 67, 2, 6, 'peintre_terracid.webp');
INSERT INTO public."Card" VALUES (68, 'Pompier', 'Origins', 68, 2, 1, 'pompier_laink.webp');
INSERT INTO public."Card" VALUES (69, 'Pompier', 'Origins', 69, 2, 1, 'pompier_terracid.webp');
INSERT INTO public."Card" VALUES (70, 'Sorcier', 'Origins', 70, 2, 5, 'sorcier_laink.webp');
INSERT INTO public."Card" VALUES (71, 'Sorcier', 'Origins', 71, 2, 5, 'sorcier_terracid.webp');
INSERT INTO public."Card" VALUES (72, 'SDF', 'Origins', 72, 2, 5, 'sdf_laink.webp');
INSERT INTO public."Card" VALUES (73, 'SDF', 'Origins', 73, 2, 5, 'sdf_terracid.webp');
INSERT INTO public."Card" VALUES (75, 'Touriste', 'Origins', 75, 2, 5, 'touriste_terracid.webp');
INSERT INTO public."Card" VALUES (74, 'Touriste', 'Origins', 74, 2, 5, 'touriste_laink.webp');
INSERT INTO public."Card" VALUES (76, 'Employé WcDo', 'Origins', 76, 2, 5, 'employe_wcdo_laink.webp');
INSERT INTO public."Card" VALUES (77, 'Employé WcDo', 'Origins', 77, 2, 5, 'employe_wcdo_terracid.webp');
INSERT INTO public."Card" VALUES (82, 'Thorracid', 'Origins', 82, 2, 1, 'thorracid.webp');
INSERT INTO public."Card" VALUES (83, 'CT', 'Origins', 83, 2, 1, 'ct.webp');
INSERT INTO public."Card" VALUES (84, 'Terro', 'Origins', 84, 2, 1, 'terro.webp');
INSERT INTO public."Card" VALUES (85, 'Clown Tueur', 'Origins', 85, 2, 1, 'clown_tueur.webp');
INSERT INTO public."Card" VALUES (86, 'Joueur du Grenier', 'Origins', 86, 2, 1, 'joueur_du_grenier.webp');
INSERT INTO public."Card" VALUES (87, 'Seb', 'Origins', 87, 2, 1, 'seb.webp');
INSERT INTO public."Card" VALUES (88, 'Amixem', 'Origins', 88, 2, 1, 'amixem.webp');
INSERT INTO public."Card" VALUES (89, 'Pirate', 'Origins', 89, 2, 4, 'pirate_laink.webp');
INSERT INTO public."Card" VALUES (90, 'Pirate', 'Origins', 90, 2, 4, 'pirate_terracid.webp');
INSERT INTO public."Card" VALUES (81, 'SpiderLaink', 'Origins', 81, 2, 1, 'spiderlaink.webp');
INSERT INTO public."Card" VALUES (91, 'Semi-Homme', 'Origins', 91, 2, 4, 'semi_homme_laink.webp');
INSERT INTO public."Card" VALUES (92, 'Semi-Homme', 'Origins', 92, 2, 4, 'semi_homme_terracid.webp');
INSERT INTO public."Card" VALUES (93, 'Marthie', 'Origins', 93, 2, 4, 'marthie.webp');
INSERT INTO public."Card" VALUES (94, 'Doc', 'Origins', 94, 2, 4, 'doc.webp');
INSERT INTO public."Card" VALUES (95, 'Vieille', 'Origins', 95, 2, 4, 'vieille_laink.webp');
INSERT INTO public."Card" VALUES (96, 'Vieille', 'Origins', 96, 2, 4, 'vieille_terracid.webp');
INSERT INTO public."Card" VALUES (97, 'Fanboy', 'Origins', 97, 2, 4, 'fanboy.webp');
INSERT INTO public."Card" VALUES (98, 'Fangirl', 'Origins', 98, 2, 4, 'fangirl.webp');
INSERT INTO public."Card" VALUES (99, 'Gotaga', 'Origins', 99, 2, 4, 'gotaga.webp');
INSERT INTO public."Card" VALUES (100, 'Billy le Bonhomme de Neige', 'Origins', 100, 2, 4, 'billy_le_bonhomme_de_neige.webp');
INSERT INTO public."Card" VALUES (101, 'Gremlin', 'Origins', 101, 2, 4, 'gremlin.webp');
INSERT INTO public."Card" VALUES (102, 'Steve', 'Origins', 102, 2, 3, 'steve_laink.webp');
INSERT INTO public."Card" VALUES (103, 'Steve', 'Origins', 103, 2, 3, 'steve_terracid.webp');
INSERT INTO public."Card" VALUES (104, 'Apprentie Sorcière', 'Origins', 104, 2, 3, 'apprentie_sorciere.webp');
INSERT INTO public."Card" VALUES (105, 'Elfe', 'Origins', 105, 2, 3, 'elfe.webp');
INSERT INTO public."Card" VALUES (106, 'Sel', 'Origins', 106, 2, 3, 'sel_laink.webp');
INSERT INTO public."Card" VALUES (107, 'Sel', 'Origins', 107, 2, 3, 'sel_terracid.webp');
INSERT INTO public."Card" VALUES (108, 'Mastu', 'Origins', 108, 2, 3, 'mastu.webp');
INSERT INTO public."Card" VALUES (109, 'Deotoons', 'Origins', 109, 2, 3, 'deotoons.webp');
INSERT INTO public."Card" VALUES (110, 'Cowboy', 'Origins', 110, 2, 2, 'cowboy_laink.webp');
INSERT INTO public."Card" VALUES (111, 'Cowboy', 'Origins', 111, 2, 2, 'cowboy_terracid.webp');
INSERT INTO public."Card" VALUES (112, 'Policier', 'Origins', 112, 2, 2, 'policier_laink.webp');
INSERT INTO public."Card" VALUES (113, 'Policier', 'Origins', 113, 2, 2, 'policier_terracid.webp');
INSERT INTO public."Card" VALUES (114, 'Obèse', 'Origins', 114, 2, 2, 'obese.webp');
INSERT INTO public."Card" VALUES (115, 'Singe', 'Origins', 115, 2, 2, 'singe.webp');
INSERT INTO public."Card" VALUES (116, 'Enquêteur', 'Origins', 116, 2, 2, 'enqueteur.webp');
INSERT INTO public."Card" VALUES (117, 'Potatoz', 'Origins', 117, 2, 2, 'potatoz.webp');
INSERT INTO public."Card" VALUES (118, 'Jiraya', 'Origins', 118, 2, 2, 'jiraya.webp');
INSERT INTO public."Card" VALUES (119, 'Feldup', 'Origins', 119, 2, 2, 'feldup.webp');
INSERT INTO public."Card" VALUES (120, 'Bretonne Bigoudene', 'Origins', 120, 2, 6, 'bretonne_bigoudene.webp');
INSERT INTO public."Card" VALUES (121, 'Roi', 'Origins', 121, 2, 6, 'roi.webp');
INSERT INTO public."Card" VALUES (122, 'Hugo Délire', 'Origins', 122, 2, 6, 'hugo_delire.webp');
INSERT INTO public."Card" VALUES (123, 'Xari', 'Origins', 123, 2, 6, 'xari.webp');
INSERT INTO public."Card" VALUES (124, 'Princesse', 'Origins', 124, 2, 5, 'princesse_laink.webp');
INSERT INTO public."Card" VALUES (125, 'Princesse', 'Origins', 125, 2, 5, 'princesse_terracid.webp');
INSERT INTO public."Card" VALUES (126, 'Prostituée', 'Origins', 126, 2, 5, 'prostituee.webp');
INSERT INTO public."Card" VALUES (127, 'Fée', 'Origins', 127, 2, 5, 'fee.webp');
INSERT INTO public."Card" VALUES (128, 'G Cramé', 'Origins', 128, 2, 5, 'g_crame.webp');
INSERT INTO public."Card" VALUES (129, 'Superconeri', 'Origins', 129, 2, 5, 'superconeri.webp');
INSERT INTO public."Card" VALUES (130, 'Moine', 'Origins', 130, 2, 7, 'moine.webp');
INSERT INTO public."Card" VALUES (131, 'CyberLaink', 'Origins', 131, 2, 1, 'cyberlaink.webp');
INSERT INTO public."Card" VALUES (132, 'CyberTerra', 'Origins', 132, 2, 1, 'cyberterra.webp');
INSERT INTO public."Card" VALUES (133, 'Jacques Flantier', 'Origins', 133, 2, 1, 'jacques_flantier.webp');
INSERT INTO public."Card" VALUES (134, 'Richard Flantier', 'Origins', 134, 2, 1, 'richard_flantier.webp');
INSERT INTO public."Card" VALUES (135, 'Dresseur', 'Origins', 135, 2, 1, 'dresseur.webp');
INSERT INTO public."Card" VALUES (136, 'Dresseuse', 'Origins', 136, 2, 1, 'dresseuse.webp');
INSERT INTO public."Card" VALUES (137, 'Survivant', 'Origins', 137, 2, 4, 'survivant_laink.webp');
INSERT INTO public."Card" VALUES (138, 'Survivant', 'Origins', 138, 2, 4, 'survivant_terracid.webp');
INSERT INTO public."Card" VALUES (139, 'Wicromania', 'Origins', 139, 2, 4, 'wicromania.webp');
INSERT INTO public."Card" VALUES (140, 'Voyant', 'Origins', 140, 2, 3, 'voyant.webp');
INSERT INTO public."Card" VALUES (141, 'Pierre Rondin', 'Origins', 141, 2, 3, 'pierre_rondin.webp');
INSERT INTO public."Card" VALUES (142, 'André Rondin', 'Origins', 142, 2, 3, 'andre_rondin.webp');
INSERT INTO public."Card" VALUES (143, 'Professeur', 'Origins', 143, 2, 6, 'professeur_laink.webp');
INSERT INTO public."Card" VALUES (144, 'Professeur', 'Origins', 144, 2, 6, 'professeur_terracid.webp');
INSERT INTO public."Card" VALUES (145, 'Samouraï', 'Origins', 145, 2, 5, 'samourai.webp');
INSERT INTO public."Card" VALUES (146, 'Sage Japonais', 'Origins', 146, 2, 5, 'sage_japonais.webp');
INSERT INTO public."Card" VALUES (147, 'Jeanine', 'Origins', 147, 2, 5, 'jeanine.webp');
INSERT INTO public."Card" VALUES (148, 'Martine', 'Origins', 148, 2, 5, 'martine.webp');
INSERT INTO public."Card" VALUES (149, 'Laink', 'Origins', 149, 2, 5, 'laink.webp');
INSERT INTO public."Card" VALUES (150, 'Terracid', 'Origins', 150, 2, 5, 'terracid.webp');
INSERT INTO public."Card" VALUES (151, 'Cowboy', 'Origins', 151, 2, 2, 'cowboy_laink_ur.webp');
INSERT INTO public."Card" VALUES (152, 'Cowboy', 'Origins', 152, 2, 2, 'cowboy_terracid_ur.webp');
INSERT INTO public."Card" VALUES (153, 'Policier', 'Origins', 153, 2, 2, 'policier_laink_ur.webp');
INSERT INTO public."Card" VALUES (154, 'Policier', 'Origins', 154, 2, 2, 'policier_terracid_ur.webp');
INSERT INTO public."Card" VALUES (155, 'Sel', 'Origins', 155, 2, 3, 'sel_laink_ur.webp');
INSERT INTO public."Card" VALUES (156, 'Sel', 'Origins', 156, 2, 3, 'sel_terracid_ur.webp');
INSERT INTO public."Card" VALUES (157, 'Fromager', 'Origins', 157, 2, 3, 'fromager_ur.webp');
INSERT INTO public."Card" VALUES (158, 'Charcutier', 'Origins', 158, 2, 3, 'charcutier_ur.webp');
INSERT INTO public."Card" VALUES (159, 'Gotaga', 'Origins', 159, 2, 4, 'gotaga_ur.webp');
INSERT INTO public."Card" VALUES (160, 'Amixem', 'Origins', 160, 2, 1, 'amixem_ur.webp');
INSERT INTO public."Card" VALUES (161, 'Pirate', 'Origins', 161, 2, 4, 'pirate_laink_ur.webp');
INSERT INTO public."Card" VALUES (162, 'Pirate', 'Origins', 162, 2, 4, 'pirate_terracid_ur.webp');
INSERT INTO public."Card" VALUES (163, 'Mastu', 'Origins', 163, 2, 3, 'mastu_ur.webp');
INSERT INTO public."Card" VALUES (164, 'G Cramé', 'Origins', 164, 2, 5, 'g_crame_ur.webp');
INSERT INTO public."Card" VALUES (165, 'CT', 'Origins', 165, 2, 1, 'ct_ur.webp');
INSERT INTO public."Card" VALUES (166, 'Terro', 'Origins', 166, 2, 1, 'terro_ur.webp');
INSERT INTO public."Card" VALUES (167, 'Joueur du Grenier', 'Origins', 167, 2, 1, 'joueur_du_grenier_ur.webp');
INSERT INTO public."Card" VALUES (168, 'Seb', 'Origins', 168, 2, 1, 'seb_ur.webp');
INSERT INTO public."Card" VALUES (169, 'Wicromania', 'Origins', 169, 2, 4, 'wicromania_leg.webp');
INSERT INTO public."Card" VALUES (170, 'Voyant', 'Origins', 170, 2, 3, 'voyant_leg.webp');
INSERT INTO public."Card" VALUES (171, 'Pierre Rondin', 'Origins', 171, 2, 3, 'pierre_rondin_leg.webp');
INSERT INTO public."Card" VALUES (172, 'André Rondin', 'Origins', 172, 2, 3, 'andre_rondin_leg.webp');
INSERT INTO public."Card" VALUES (173, 'Survivant', 'Origins', 173, 2, 4, 'survivant_laink_leg.webp');
INSERT INTO public."Card" VALUES (174, 'Survivant', 'Origins', 174, 2, 4, 'survivant_terracid_leg.webp');
INSERT INTO public."Card" VALUES (175, 'Jacques Flantier', 'Origins', 175, 2, 1, 'jacques_flantier_leg.webp');
INSERT INTO public."Card" VALUES (176, 'Richard Flantier', 'Origins', 176, 2, 1, 'richard_flantier_leg.webp');
INSERT INTO public."Card" VALUES (177, 'Jeanine', 'Origins', 177, 2, 5, 'jeanine_leg.webp');
INSERT INTO public."Card" VALUES (178, 'Martine', 'Origins', 178, 2, 5, 'martine_leg.webp');
INSERT INTO public."Card" VALUES (179, 'Laink', 'Origins', 179, 2, 5, 'laink_leg.webp');
INSERT INTO public."Card" VALUES (180, 'Terracid', 'Origins', 180, 2, 5, 'terracid_leg.webp');


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: Timeuh
--

INSERT INTO public."User" VALUES ('timeuuh@gmail.com', '$2b$10$ABMu1ijrWgPaKOuUTivH8.Ww7kXwl2H.VrevPbJBuicvHjtuv28hC', 'timothée', 'brindejonc');


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: Timeuh
--

INSERT INTO public._prisma_migrations VALUES ('aee8785d-267e-4b0f-bd72-084f75581be3', 'b4ffcd74b74d1d97531777c7caa2e0d4eb4c69ae802b7aedc7b03acceb321411', '2023-07-10 20:32:07.299612+00', '20230710134658_init', NULL, NULL, '2023-07-10 20:32:07.208594+00', 1);
INSERT INTO public._prisma_migrations VALUES ('11b0bd2e-35d1-4cda-9a12-e362a7cd4c21', 'df06bafd95ec8aa1aa00657c3a982b320ad426b88ae27a677b9c137c69932da2', '2023-07-10 20:32:07.409698+00', '20230710140948_init', NULL, NULL, '2023-07-10 20:32:07.335379+00', 1);
INSERT INTO public._prisma_migrations VALUES ('cd12869c-4e84-459a-8480-8c73912056c4', '40290af078ebf6694daba27e80ce53ef4d3172c2e7743dc96d576a87371e30bb', '2023-07-10 20:32:07.523543+00', '20230710162123_init', NULL, NULL, '2023-07-10 20:32:07.436659+00', 1);
INSERT INTO public._prisma_migrations VALUES ('97764b0d-1297-42f9-b0c6-66476065644e', '6a7c537f16438a500bddd371f858042949544ce14707bbd20930fcea579868b7', '2023-07-10 20:32:07.644112+00', '20230710200549_init', NULL, NULL, '2023-07-10 20:32:07.549927+00', 1);
INSERT INTO public._prisma_migrations VALUES ('b8ed93bf-6e0f-4e19-a9ad-c559fc39ee24', 'a6b73a45fbc1ac05423e910230b963a1eac4dc82aded62903a554d73297ca0db', '2023-07-10 20:32:07.764689+00', '20230710202817_init', NULL, NULL, '2023-07-10 20:32:07.677585+00', 1);
INSERT INTO public._prisma_migrations VALUES ('70c6adff-cf62-4099-a28b-9c5e34ac0d69', '201e0514ee6eb935e19ba48820882964a45bbff9a5ec8eb5ddacd0867a35ba6c', '2023-07-10 20:32:07.883124+00', '20230710203041_init', NULL, NULL, '2023-07-10 20:32:07.794683+00', 1);
INSERT INTO public._prisma_migrations VALUES ('4e5af727-30bb-4367-a56e-6955ea0e83d2', '985409e513886a17ffd1cf6561dc673d58bf82d546eba64661d1441e28a0c731', '2023-07-12 17:01:15.711099+00', '20230712170115_', NULL, NULL, '2023-07-12 17:01:15.626705+00', 1);


--
-- Name: Artist_id_seq; Type: SEQUENCE SET; Schema: public; Owner: Timeuh
--

SELECT pg_catalog.setval('public."Artist_id_seq"', 1, false);


--
-- Name: Card_id_seq; Type: SEQUENCE SET; Schema: public; Owner: Timeuh
--

SELECT pg_catalog.setval('public."Card_id_seq"', 1, false);


--
-- Name: Character_id_seq; Type: SEQUENCE SET; Schema: public; Owner: Timeuh
--

SELECT pg_catalog.setval('public."Character_id_seq"', 1, false);


--
-- Name: Description_id_seq; Type: SEQUENCE SET; Schema: public; Owner: Timeuh
--

SELECT pg_catalog.setval('public."Description_id_seq"', 1, false);


--
-- Name: Rarity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: Timeuh
--

SELECT pg_catalog.setval('public."Rarity_id_seq"', 1, false);


--
-- Name: Type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: Timeuh
--

SELECT pg_catalog.setval('public."Type_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

