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
	{ id: 3, output: 3, text: "Poitiers" },
	{
		id: 4,
		output: 4,
		text: "Autre commune : préciser nom de la commune : _________",
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
	"Aigrefeuille-Le Thou",
	"Anché-Voulon",
	"Angoulême",
	"Bellac",
	"Bordeaux Saint-Jean",
	"Chalais",
	"Chasseneuil-du-Poitou",
	"Châtellerault",
	"Coutras",
	"Dangé-Saint-Romain",
	"Dissay",
	"Epanvilliers",
	"Futuroscope",
	"Ingrandes sur Vienne",
	"Iteuil",
	"Jaunay-Clan",
	"La Crèche",
	"La Jarrie",
	"La Mothe-Saint-Héray",
	"La Rochelle",
	"La Tricherie",
	"Lathus",
	"Le Dorat",
	"Les Eglisottes",
	"Les Oremes",
	"Libourne",
	"Ligugé",
	"Limoges Bénédictins",
	"Lusignan",
	"Lussac-les-Châteaux",
	"Luxé",
	"Maillé",
	"Massy TGV",
	"Mauzé",
	"Mignaloux-Nouaillé",
	"Montmoreau",
	"Montmorillon",
	"Monts",
	"Naintré Les Barres",
	"Nantiat",
	"Nerpuy",
	"Nieul",
	"Niort",
	"Pamproux",
	"Paris Montparnasse",
	"Peyrilhac-Saint-Jouvent",
	"Port-de-Piles",
	"Prin-Deyrançon",
	"Rouillé",
	"Ruffec",
	"Saint-Aigulin - La Roche-Calais",
	"Saint-Denis-de-Pile",
	"Sainte-Maure-Noyant",
	"Saint-Maixent-L'Ecole",
	"Saint-Pierre-Des-Corps",
	"Saint-Saviol",
	"St-Benoît",
	"Surgères",
	"Tours",
	"Vaulry",
	"Vayres",
	"Vendôme-Villiers-Sur-Loir TGV",
	"Villeperdue",
	"Vivonne",
];


export { raison, origine, modeTransport, stationnement, depose, ligneBus, stationnementTrotinette, accesGare, accesQuai, motif, raisonVenue, frequence, age, gare};
