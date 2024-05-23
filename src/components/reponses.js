const raison = [
	{ id: 1, output: 1, text: "Je vais prendre le train" },
	{ id: 2, output: 2, text: "Je viens de descendre du train" },
	{
		id: 3,
		output: 3,
		text: "J’accompagne des voyageurs qui partent / J’attends des voyageurs qui arrivent",
	},
	{ id: 4, output: 4, text: "Autre raison (achat billet, commerces en gare…)" },
];
const origine = [
	{ id: 1, output: 1, text: "Poitiers" },
	{
		id: 2,
		output: 2,
		text: "Autre commune : ",
	},
];
const modeTransport = [
	{ id: 1, output: 1, text: "A pied" },
	{ id: 2, output: 2, text: "En voiture – conducteur" },
	{ id: 3, output: 3, text: "En voiture – passager" },
	{ id: 4, output: 4, text: "En bus/car" },
	{ id: 5, output: 5, text: "A vélo" },
	{ id: 6, output: 6, text: "A vélo à assistance électrique (VAE)" },
	{ id: 7, output: 7, text: "En trottinette" },
	{ id: 8, output: 8, text: "En Taxi/VTC" },
	{ id: 9, output: 9, text: "En train - je fais une correspondance" },
	{ id: 10, output: 10, text: "Autre : préciser : _________" },
];
const stationnement = [
	{ id: 1, output: 1, text: "Dans le parking Toumaï" },
	{ id: 2, output: 2, text: "Dans le parking Effia" },
	{
		id: 3,
		output: 3,
		text: "Dans le parking horodateur Maillochon côté Boivre",
	},
	{ id: 4, output: 4, text: "Dans le Parking Horodateur Grand Cerf" },
	{
		id: 5,
		output: 5,
		text: "Sur une autre place en voirie : préciser nom voirie : _________",
	},
	{
		id: 6,
		output: 6,
		text: "Dans un autre parking : préciser nom : _________",
	},
	{
		id: 7,
		output: 7,
		text: "Sur un stationnement privé (box ou place de parking privée)",
	},
];
const depose = [
	{
		id: 1,
		output: 1,
		text: "Dans l’arrêt minute au 1er étage du parking Toumaï",
	},
	{ id: 2, output: 2, text: "Sur le parvis devant le bâtiment voyageurs" },
	{
		id: 3,
		output: 3,
		text: "Sur les boulevards à proximité de la gare (Grand Cerf, Solferino, Pont Achard…)",
	},
	{
		id: 4,
		output: 4,
		text: "Sur la rue ou le parking horodateur Maillochon côté Boivre",
	},
	{ id: 5, output: 5, text: "Autre : préciser : _________" },
];
const ligneBus = [
	{ id: 1, output: 1, text: "Ligne 1 (arrêt sur le viaduc Leon Blum)" },
	{ id: 2, output: 2, text: "Ligne 2, 2A ou 2B (devant le bâtiment voyageur)" },
	{ id: 3, output: 3, text: "Ligne 1E (devant le bâtiment voyageur)" },
	{ id: 4, output: 4, text: "Ligne O (devant le bâtiment voyageur)" },
	{ id: 5, output: 5, text: "Ligne 11 (arrêt sur le viaduc Leon Blum)" },
	{ id: 6, output: 6, text: "Ligne 13 (devant le bâtiment voyageur)" },
	{ id: 7, output: 7, text: "Ligne 16 (arrêt sur le viaduc Leon Blum)" },
	{ id: 8, output: 8, text: "Ligne 20 (arrêt sur le viaduc Leon Blum)" },
	{ id: 9, output: 9, text: "Ligne 21 (devant le bâtiment voyageur)" },
	{ id: 10, output: 10, text: "Ligne 33 ou 33E (arrêt dans gare routière)" },
	{ id: 11, output: 11, text: "Ligne 35 (arrêt dans gare routière)" },
	{ id: 12, output: 12, text: "Ligne 36 (arrêt dans gare routière)" },
	{
		id: 13,
		output: 13,
		text: "Ligne régionale 100 (arrêt dans gare routière)",
	},
	{
		id: 14,
		output: 14,
		text: "Ligne régionale 101 (arrêt dans gare routière)",
	},
	{
		id: 15,
		output: 15,
		text: "Ligne régionale 111 (arrêt dans gare routière)",
	},
	{
		id: 16,
		output: 16,
		text: "Ligne régionale 112 (arrêt dans gare routière)",
	},
	{
		id: 17,
		output: 17,
		text: "Ligne régionale 113 (arrêt dans gare routière)",
	},
	{
		id: 18,
		output: 18,
		text: "Ligne régionale 114 (arrêt dans gare routière)",
	},
	{
		id: 19,
		output: 19,
		text: "Ligne régionale 126 (arrêt dans gare routière)",
	},
	{
		id: 20,
		output: 20,
		text: "Ligne régionale 240 (arrêt dans gare routière)",
	},
	{
		id: 21,
		output: 21,
		text: "Ligne régionale 241 (arrêt dans gare routière)",
	},
	{ id: 22, output: 22, text: "Car scolaire (arrêt dans gare routière)" },
	{
		id: 23,
		output: 23,
		text: "Flixbus ou BlaBlaBus (arrêt dans gare routière)",
	},
	{ id: 24, output: 24, text: "Autre : préciser : _________" },
];
const stationnementTrotinette = [
	{
		id: 1,
		output: 1,
		text: "Sur les arceaux devant le bâtiment voyageur (parvis et ses abords)",
	},
	{ id: 2, output: 2, text: "Dans les consignes vélo du parking Toumaï" },
	{
		id: 3,
		output: 3,
		text: "Dans les box à côté de l’accès à la passerelle côté Maillochon à l’ouest",
	},
	{ id: 4, output: 4, text: "Je le transporte avec moi dans le train" },
	{ id: 5, output: 5, text: "Autre : préciser : _________" },
];
const accesGare = [
	{
		id: 1,
		output: 1,
		text: "Par le bâtiment voyageur à l’est (niveau parvis)",
	},
	{
		id: 2,
		output: 2,
		text: "Par le niveau +1 du bâtiment voyageur depuis le centre-ville à l’est",
	},
	{
		id: 3,
		output: 3,
		text: "Par la passerelle depuis l’ouest côté Maillochon",
	},
	{
		id: 4,
		output: 4,
		text: "Par le viaduc Leon Blum et via le parking Toumaï au Nord",
	},
	{ id: 5, output: 5, text: "Autre : préciser : _________" },
];
const accesQuai = [
	{ id: 1, output: 1, text: "Par la passerelle" },
	{
		id: 2,
		output: 2,
		text: "Par le passage souterrain dans le bâtiment voyageur",
	},
];
const motif = [
	{ id: 1, output: 1, text: "Je me rends sur mon lieu de travail" },
	{ id: 2, output: 2, text: "Je me rends sur mon lieu d’études" },
	{ id: 3, output: 3, text: "Je rentre à mon domicile principal" },
	{ id: 4, output: 4, text: "Déplacement professionnel" },
	{ id: 5, output: 5, text: "Loisirs, tourisme" },
	{
		id: 6,
		output: 6,
		text: "Autres, préciser (Achats, démarches administratives, RDV médical…) : _______",
	},
];
const raisonVenue = [
	{ id: 1, output: 1, text: "Mon lieu de travail se situe à Poitiers" },
	{ id: 2, output: 2, text: "Mon lieu d’études se situe à Poitiers" },
	{ id: 3, output: 3, text: "Je suis venu pour un déplacement professionnel" },
	{ id: 4, output: 4, text: "Loisirs, tourisme" },
	{
		id: 5,
		output: 5,
		text: "Autres (Achats, démarches administratives, RDV médical, visite…)",
	},
];
const frequence = [
	{
		id: 1,
		output: 1,
		text: "Tous les jours de la semaine ou presque (Plus de 3 fois par semaine)",
	},
	{ id: 2, output: 2, text: "Régulièrement (au moins une fois par mois)" },
	{ id: 3, output: 3, text: "Occasionnellement (moins d’une fois par mois)" },
];
const age = [
	{ id: 1, output: 1, text: "Moins de 18 ans" },
	{ id: 2, output: 2, text: "Entre 18 et 30 ans" },
	{ id: 3, output: 3, text: "Entre 30 et 40 ans" },
	{ id: 4, output: 4, text: "Entre 40 et 55 ans" },
	{ id: 5, output: 5, text: "Entre 55 et 65 ans" },
	{ id: 6, output: 6, text: "Plus de 65 ans" },
];
const gare = [
	{id: 1,output: 1,text: "Aigrefeuille-Le Thou"},
		{id: 2,output: 2,text: "Anché-Voulon"},
		{id: 3,output: 3,text: "Angoulême"},
		{id: 4,output: 4,text: "Bellac"},
		{id: 5,output: 5,text: "Bordeaux Saint-Jean"},
		{id: 6,output: 6,text: "Chalais"},
		{id: 7,output: 7,text: "Chasseneuil-du-Poitou"},
		{id: 8,output: 8,text: "Châtellerault"},
		{id: 9,output: 9,text: "Coutras"},
		{id: 10,output: 10,text: "Dangé-Saint-Romain"},
		{id: 11,output: 11,text: "Dissay"},
		{id: 12,output: 12,text: "Epanvilliers"},
		{id: 13,output: 13,text: "Futuroscope"},
		{id: 14,output: 14,text: "Ingrandes sur Vienne"},
		{id: 15,output: 15,text: "Iteuil"},
		{id: 16,output: 16,text: "Jaunay-Clan"},
		{id: 17,output: 17,text: "La Crèche"},
		{id: 18,output: 18,text: "La Jarrie"},
		{id: 19,output: 19,text: "La Mothe-Saint-Héray"},
		{id: 20,output: 20,text: "La Rochelle"},
		{id: 21,output: 21,text: "La Tricherie"},
		{id: 22,output: 22,text: "Lathus"},
		{id: 23,output: 23,text: "Le Dorat"},
		{id: 24,output: 24,text: "Les Eglisottes"},
		{id: 25,output: 25,text: "Les Oremes"},
		{id: 26,output: 26,text: "Libourne"},
		{id: 27,output: 27,text: "Ligugé"},
		{id: 28,output: 28,text: "Limoges Bénédictins"},
		{id: 29,output: 29,text: "Lusignan"},
		{id: 30,output: 30,text: "Lussac-les-Châteaux"},
		{id: 31,output: 31,text: "Luxé"},
		{id: 32,output: 32,text: "Maillé"},
		{id: 33,output: 33,text: "Massy TGV"},
		{id: 34,output: 34,text: "Mauzé"},
		{id: 35,output: 35,text: "Mignaloux-Nouaillé"},
		{id: 36,output: 36,text: "Montmoreau"},
		{id: 37,output: 37,text: "Montmorillon"},
		{id: 38,output: 38,text: "Monts"},
		{id: 39,output: 39,text: "Naintré Les Barres"},
		{id: 40,output: 40,text: "Nantiat"},
		{id: 41,output: 41,text: "Nerpuy"},
		{id: 42,output: 42,text: "Nieul"},
		{id: 43,output: 43,text: "Niort"},
		{id: 44,output: 44,text: "Pamproux"},
		{id: 45,output: 45,text: "Paris Montparnasse"},
		{id: 46,output: 46,text: "Peyrilhac-Saint-Jouvent"},
		{id: 47,output: 47,text: "Port-de-Piles"},
		{id: 48,output: 48,text: "Prin-Deyrançon"},
		{id: 49,output: 49,text: "Rouillé"},
		{id: 50,output: 50,text: "Ruffec"},
		{id: 51,output: 51,text: "Saint-Aigulin - La Roche-Calais"},
		{id: 52,output: 52,text: "Saint-Denis-de-Pile"},
		{id: 53,output: 53,text: "Sainte-Maure-Noyant"},
		{id: 54,output: 54,text: "Saint-Maixent-L'Ecole"},
		{id: 55,output: 55,text: "Saint-Pierre-Des-Corps"},
		{id: 56,output: 56,text: "Saint-Saviol"},
		{id: 57,output: 57,text: "St-Benoît"},
		{id: 58,output: 58,text: "Surgères"},
		{id: 59,output: 59,text: "Tours"},
		{id: 60,output: 60,text: "Vaulry"},
		{id: 61,output: 61,text: "Vayres"},
		{id: 62,output: 62,text: "Vendôme-Villiers-Sur-Loir TGV"},
		{id: 63,output: 63,text: "Villeperdue"},
		{id: 64,output: 64,text: "Vivonne"},
		{id: 65,output: 65,text: "Autre gare : préciser : _________"},
];

		
export { raison, origine, modeTransport, stationnement, depose, ligneBus, stationnementTrotinette, accesGare, accesQuai, motif, raisonVenue, frequence, age, gare};
