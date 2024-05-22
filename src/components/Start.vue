<template>
	<div class="container">

		<div id="enqueteur" v-if="level === 0">
			<h2>Prénom enqueteur :</h2>
			<input class="form-control" type="text" v-model="ENQUETEUR" />
			<button v-if="ENQUETEUR" @click="next" class="btn-next">Suivant</button>
		</div>

		<div id="start" v-if="level === 1">
			<h2>« Bonjour, pour mieux connaître les usagers de la gare de Poitiers, Grand Poitiers
				et la SNCF souhaiteraient en savoir plus sur votre déplacement en cours. Auriez-vous quelques
				secondes à nous accorder ?»</h2>
			<button @click="startSurvey" class="btn-next">COMMENCER QUESTIONNAIRE</button>
		</div>


		<div id="q1" v-if="level === 2">
			<h2>Quelle est la raison de votre présence en gare ?</h2>
			<select v-model="Q1" class="form-control">
				<option v-for="option in raison" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Q1" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q2" v-if="level === 3 && Q1 !== 2">
			<h3>D’où êtes-vous parti pour arriver à la gare?</h3>
			<select v-model="Q2" class="form-control">
				<option v-for="option in origine" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<div><br><br></div>
			<div v-if="Q2 === 1">
				<h2>De quelle rue de Poitiers venez-vous?</h2>
				<br>
				<h2>Si le répondant ne sait pas ou ne veut pas répondre - remplir « NSP » et passer à la question
					suivante.
					La réponse « centre-ville » est acceptée à défaut de quelque chose de plus précis.</h2>
				<input class="form-control" type="text" v-model="Q2a"
					placeholder="Nom de la rue où se situe le point d’origine du déplacement :">
			</div>
			<input v-if="Q2 === 2" class="form-control" type="text" v-model="Q2_Autre"
				placeholder="préciser nom de la commune :">

			<button v-if="Q2 === 1 && Q2a || Q2 === 2 && Q2_Autre" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q3" v-if="level === 4 && Q1 !== 2">
			<h2>Quel mode de transport avez-vous utilisé pour vous rendre à la gare ?</h2>
			<select v-model="Q3" class="form-control">
				<option v-for="option in modeTransport" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="Q3 === 10" class="form-control" type="text" v-model="Q3_DETAIL" placeholder="Precisions">
			<button v-if="Q3 !== 10 || Q3 === 10 && Q3_DETAIL" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>


		<div id="q3a" v-if="level === 5 && Q1 !== 2 && Q3 === 2">
			<h2>Où avez-vous stationné votre voiture?</h2>
			<select v-model="Q3a" class="form-control">
				<option v-for="option in stationnement" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="Q3a === 5" class="form-control" type="text" v-model="Q3a_voirie"
				placeholder="Préciser nom voirie">
			<input v-if="Q3a === 6" class="form-control" type="text" v-model="Q3a_parking"
				placeholder="Préciser nom parking">
			<button v-if="Q3a !== 5 && Q3a !== 6 || Q3a === 5 && Q3a_voirie || Q3a === 6 && Q3a_parking" @click="next"
				class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>


		<div id="q3b" v-if="level === 5 && Q1 !== 2 && Q3 === 3">
			<h2>Où vous êtes-vous fait déposer ?</h2>
			<select v-model="Q3b" class="form-control">
				<option v-for="option in depose" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="Q3b === 5" class="form-control" type="text" v-model="Q3b_DETAIL" placeholder="Precisions">
			<button v-if="Q3b !== 5 || Q3b === 5 && Q3b_DETAIL" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q3c" v-if="level === 5 && Q1 !== 2 && Q3 === 4">
			<h2>Quelle ligne de bus avez-vous emprunté?</h2>
			<select v-model="Q3c" class="form-control">
				<option v-for="option in ligneBus" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="Q3c === 24" class="form-control" type="text" v-model="Q3c_DETAIL" placeholder="Precisions">
			<button v-if="Q3c !== 24 || Q3c === 24 && Q3c_DETAIL" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q3d" v-if="level === 5 && Q1 !== 2 && (Q3 === 5 || Q3 === 6 || Q3 === 7)">
			<h2>Où avez-vous stationné votre vélo/trottinette?</h2>
			<select v-model="Q3d" class="form-control">
				<option v-for="option in stationnementTrotinette" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="Q3d === 5" class="form-control" type="text" v-model="Q3d_DETAIL" placeholder="Precisions">
			<button v-if="Q3d !== 5 || Q3d === 5 && Q3d_DETAIL" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q3e" v-if="level === 5 && Q1 !== 2 && Q3 === 1">
			<h2>Par où avez-vous accédé à la gare?</h2>
			<select v-model="Q3e" class="form-control">
				<option v-for="option in accesGare" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="Q3e === 5" class="form-control" type="text" v-model="Q3e_DETAIL" placeholder="Precisions">
			<button v-if="Q3e !== 5 || Q3e === 5 && Q3e_DETAIL" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q4"
			v-if="(level === 5 && Q1 === 1 && (Q3 === 8 || Q3 === 9 || Q3 === 10)) || (level === 6 && Q1 === 1 && Q3 < 8)">
			<h2>Par où avez-vous/allez-vous accéder aux quais pour prendre votre train ?</h2>
			<select v-model="Q4" class="form-control">
				<option v-for="option in accesQuai" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Q4" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q5"
			v-if="(level === 6 && Q1 === 1 && (Q3 === 8 || Q3 === 9 || Q3 === 10)) || (level === 7 && Q1 === 1 && Q3 < 8)">
			<h2>Pour ce trajet en train, quelle sera votre gare de descente ? </h2>
			<h2>Précisez que l’on demande la gare de descente même si celle-ci sera une gare de correspondance vers
				la destination finale.</h2>
			<h2>Exemple: un voyageur monte à Poitiers se rend à Rennes avec une correspondance à Paris
				Montparnasse ? Rentrer «Paris Montparnasse» dans le questionnaire</h2>
			<select v-model="Q5" class="form-control">
				<option v-for="option in gare" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Q5" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q6"
			v-if="(level === 7 && Q1 === 1 && (Q3 === 8 || Q3 === 9 || Q3 === 10)) || (level === 8 && Q1 === 1 && Q3 < 8)">
			<h2>Quel est le motif de votre déplacement?</h2>
			<select v-model="Q6" class="form-control">
				<option v-for="option in motif" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="Q6 === 6" class="form-control" type="text" v-model="Q6_DETAIL" placeholder="Precisions">
			<button v-if="Q6 && Q6 !== 6 || Q6 === 6  && Q6_DETAIL" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q6a"
			v-if="(level === 8 && Q1 === 1 && (Q3 === 8 || Q3 === 9 || Q3 === 10)) || (level === 9 && Q1 === 1 && Q3 < 8)">
			<h2>Quel était la raison de votre venue à Poitiers ?</h2>
			<select v-model="Q6a" class="form-control">
				<option v-for="option in raisonVenue" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="Q6a === 5" class="form-control" type="text" v-model="Q6a_DETAIL" placeholder="Precisions">
			<button v-if="Q6a && Q6a !== 5 || Q6a === 5 && Q6a_DETAIL" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q7"
			v-if="(level === 9 && Q1 === 1 && (Q3 === 8 || Q3 === 9 || Q3 === 10)) || (level === 10 && Q1 === 1 && Q3 < 8)">
			<h2>A quelle fréquence réalisez-vous ce déplacement en train?</h2>
			<select v-model="Q7" class="form-control">
				<option v-for="option in frequence" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Q7" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q8"
			v-if="(level === 10 && Q1 === 1 && (Q3 === 8 || Q3 === 9 || Q3 === 10)) || (level === 11 && Q1 === 1 && Q3 < 8) || (level === 5 && Q1 > 2 && (Q3 === 8 || Q3 === 9 || Q3 === 10)) || (level === 6 && Q1 > 2 && Q3 < 8)">
			<h2>Quel âge avez-vous ?</h2>
			<select v-model="Q8" class="form-control">
				<option v-for="option in age" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Q8" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q9"
			v-if="(level === 11 && Q1 === 1 && (Q3 === 8 || Q3 === 9 || Q3 === 10)) || (level === 12 && Q1 === 1 && Q3 < 8) || (level === 6 && Q1 > 2 && (Q3 === 8 || Q3 === 9 || Q3 === 10)) || (level === 7 && Q1 > 2 && Q3 < 8)">
			<h3>Selon vous, que faudrait-il faire en priorité pour améliorer les conditions d’accès à cette gare ?</h3>
			<h2>Si besoin orienter vers :<br>
				1: Sentiment des voyageurs sur les différentes infrastructures (souterrains, passerelle, quais…)<br>
				2: Sentiment des voyageurs sur les conditions d’attente et les services en gare (dans le BV
				notamment)</h2>
			<input class="form-control" type="text" v-model="Q9" placeholder="Réponse">
			<button v-if="Q9" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="fin"
			v-if="level === 3 && Q1 === 2 || (level === 12 && Q1 === 1 && (Q3 === 8 || Q3 === 9 || Q3 === 10)) || (level === 13 && Q1 === 1 && Q3 < 8) || (level === 7 && Q1 > 2 && (Q3 === 8 || Q3 === 9 || Q3 === 10)) || (level === 8 && Q1 > 2 && Q3 < 8)">
			<h2>Merci pour votre réponse et bon voyage.</h2>
			<button @click="submitSurvey" class="btn-next">FINIR QUESTIONNAIRE</button>
			<button @click="back" class="btn-return">retour</button>
		</div>
		<img class="logo" src="../assets/Alycelogo.webp" alt="Logo Alyce">

		<button class="btn-fin" @click="downloadData">download DATA</button>

	</div>
	<div>
		<span style="margin-left: 10px;">Nombre de questionnaires : {{ docCount }}</span>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { raison, origine, modeTransport, stationnement, depose, ligneBus, stationnementTrotinette, accesGare, accesQuai, motif, raisonVenue, frequence, age, gare } from "./reponses";
import GareSelector from "./GareSelector.vue";
import CommuneSelector from './CommuneSelector.vue';
import { db } from "../firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";
import * as XLSX from "xlsx";

const docCount = ref(0);
const surveyCollectionRef = collection(db, "Poitiers");
const level = ref(0);
const startDate = ref('');
const ENQUETEUR = ref('');
const Q1 = ref('');
const Q2 = ref('');
const Q2a = ref('');
const Q2_Autre = ref('');
const Q3 = ref('');
const Q3_DETAIL = ref('');
const Q3a = ref('');
const Q3a_voirie = ref('');
const Q3a_parking = ref('');
const Q3b = ref('');
const Q3b_DETAIL = ref('');
const Q3c = ref('');
const Q3c_DETAIL = ref('');
const Q3d = ref('');
const Q3d_DETAIL = ref('');
const Q3e = ref('');
const Q3e_DETAIL = ref('');
const Q4 = ref('');
const Q5 = ref('');
const Q6 = ref('');
const Q6_DETAIL = ref('');
const Q6a = ref('');
const Q6a_DETAIL = ref('');
const Q7 = ref('');
const Q8 = ref('');
const Q9 = ref('');



const startSurvey = () => {
	startDate.value = new Date().toLocaleTimeString("fr-FR").slice(0, 8);
	level.value++;
}


const next = () => {
	level.value++;
	console.log(level.value)
}

const back = () => {
	level.value--;
}


const getDocCount = async () => {
	try {
		const querySnapshot = await getDocs(surveyCollectionRef);
		docCount.value = querySnapshot.size;
	} catch (error) {
		console.error("Error getting document count:", error);
	}
};

onMounted(getDocCount);

const submitSurvey = async () => {
	await addDoc(surveyCollectionRef, {
		HEURE_DEBUT: startDate.value,
		DATE: new Date().toLocaleDateString("fr-FR").replace(/\//g, "-"),
		JOUR: new Date().toLocaleDateString("fr-FR", { weekday: 'long' }),
		ENQUETEUR: ENQUETEUR.value,
		HEURE_FIN: new Date().toLocaleTimeString("fr-FR").slice(0, 8),
		Q1: Q1.value,
		Q2: Q2.value,
		Q2a: Q2a.value,
		Q2_Autre: Q2_Autre.value,
		Q3: Q3.value,
		Q3_DETAIL: Q3_DETAIL.value,
		Q3a: Q3a.value,
		Q3a_voirie: Q3a_voirie.value,
		Q3a_parking: Q3a_parking.value,
		Q3b: Q3b.value,
		Q3b_DETAIL: Q3b_DETAIL.value,
		Q3c: Q3c.value,
		Q3c_DETAIL: Q3c_DETAIL.value,
		Q3d: Q3d.value,
		Q3d_DETAIL: Q3d_DETAIL.value,
		Q3e: Q3e.value,
		Q3e_DETAIL: Q3e_DETAIL.value,
		Q4: Q4.value,
		Q5: Q5.value,
		Q6: Q6.value,
		Q6_DETAIL: Q6_DETAIL.value,
		Q6a: Q6a.value,
		Q6a_DETAIL: Q6a_DETAIL.value,
		Q7: Q7.value,
		Q8: Q8.value,
		Q9: Q9.value,

	});
	level.value = 1;
	startDate.value = "";
	Q1.value = "";
	Q2.value = "";
	Q2a.value = "";
	Q2_Autre.value = "";
	Q3.value = "";
	Q3_DETAIL.value = "";
	Q3a.value = "";
	Q3a_voirie.value = "";
	Q3a_parking.value = "";
	Q3b.value = "";
	Q3b_DETAIL.value = "";
	Q3c.value = "";
	Q3c_DETAIL.value = "";
	Q3d.value = "";
	Q3d_DETAIL.value = "";
	Q3e.value = "";
	Q3e_DETAIL.value = "";
	Q4.value = "";
	Q5.value = "";
	Q6.value = "";
	Q6_DETAIL.value = "";
	Q6a.value = "";
	Q6a_DETAIL.value = "";
	Q7.value = "";
	Q8.value = "";
	Q9.value = "";

	getDocCount();
};

const downloadData = async () => {
	try {
		const querySnapshot = await getDocs(surveyCollectionRef);
		let data = [];
		let maxWidths = {}; // Object to keep track of maximum width for each column

		// Define your headers // MODIFICATION SUR L'EXCEL
		const headers = {
			ID_questionnaire: "ID_questionnaire",
			ENQUETEUR: "ENQUETEUR",
			DATE: "DATE",
			JOUR: "JOUR",
			HEURE_DEBUT: "HEURE_DEBUT",
			HEURE_FIN: "HEURE_FIN",
			Q1: "Q1",
			Q2: "Q2",
			Q2a: "Q2a",
			Q2_Autre: "Q2_Autre",
			Q3: "Q3",
			Q3_DETAIL: "Q3_DETAIL",
			Q3a: "Q3a",
			Q3a_voirie: "Q3a_voirie",
			Q3a_parking: "Q3a_parking",
			Q3b: "Q3b",
			Q3b_DETAIL: "Q3b_DETAIL",
			Q3c: "Q3c",
			Q3c_DETAIL: "Q3c_DETAIL",
			Q3d: "Q3d",
			Q3d_DETAIL: "Q3d_DETAIL",
			Q3e: "Q3e",
			Q3e_DETAIL: "Q3e_DETAIL",
			Q4: "Q4",
			Q5: "Q5",
			Q6: "Q6",
			Q6_DETAIL: "Q6_DETAIL",
			Q6a: "Q6a",
			Q6a_DETAIL: "Q6a_DETAIL",
			Q7: "Q7",
			Q8: "Q8",
			Q9: "Q9",
		};

		// Initialize maxWidths with header lengths
		Object.keys(headers).forEach((key) => {
			maxWidths[key] = headers[key].length;
		});

		querySnapshot.forEach((doc) => {
			let docData = doc.data();
			let mappedData = {
				ID_questionnaire: doc.id,
				ENQUETEUR: docData.ENQUETEUR || "",
				DATE: docData.DATE || "",
				JOUR: docData.JOUR || "",
				HEURE_DEBUT: docData.HEURE_DEBUT || "",
				HEURE_FIN: docData.HEURE_FIN || "",
				Q1: docData.Q1 || "",
				Q2: docData.Q2 || "",
				Q2a: docData.Q2a || "",
				Q2_Autre: docData.Q2_Autre || "",
				Q3: docData.Q3 || "",
				Q3_DETAIL: docData.Q3_DETAIL || "",
				Q3a: docData.Q3a || "",
				Q3a_voirie: docData.Q3a_voirie || "",
				Q3a_parking: docData.Q3a_parking || "",
				Q3b: docData.Q3b || "",
				Q3b_DETAIL: docData.Q3b_DETAIL || "",
				Q3c: docData.Q3c || "",
				Q3c_DETAIL: docData.Q3c_DETAIL || "",
				Q3d: docData.Q3d || "",
				Q3d_DETAIL: docData.Q3d_DETAIL || "",
				Q3e: docData.Q3e || "",
				Q3e_DETAIL: docData.Q3e_DETAIL || "",
				Q4: docData.Q4 || "",
				Q5: docData.Q5 || "",
				Q6: docData.Q6 || "",
				Q6_DETAIL: docData.Q6_DETAIL || "",
				Q6a: docData.Q6a || "",
				Q6a_DETAIL: docData.Q6a_DETAIL || "",
				Q7: docData.Q7 || "",
				Q8: docData.Q8 || "",
				Q9: docData.Q9 || "",
			};
			data.push(mappedData);
			// Update maxWidths for each key in mappedData
			Object.keys(mappedData).forEach((key) => {
				const valueLength = mappedData[key].toString().length;
				maxWidths[key] = Math.max(maxWidths[key], valueLength);
			});
		});
		// Convert data to a worksheet
		const worksheet = XLSX.utils.json_to_sheet(data, {
			header: Object.keys(headers),
			skipHeader: false,
		});
		// Set the widths for each column
		worksheet["!cols"] = Object.keys(maxWidths).map((key) => ({
			wch: maxWidths[key] + 2 // +2 for a little extra padding
		}));
		const workbook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(workbook, worksheet, "Data"); ``
		// Export the workbook to a .xlsx file
		XLSX.writeFile(workbook, "Poitiers.xlsx");
	} catch (error) {
		console.error("Error downloading data: ", error);
	}
};

</script>

<style>
body {
	background-color: #2a3b63;
}

.logo {
	padding: 10%;
	height: 3em;
}

h1 {
	text-align: center;
	color: #4caf50;
	font-size: 18px;
}

h2 {
	color: white;
	font-size: 16px;
}

.english {
	color: cyan;
}

.container {
	background-color: #2a3b63;
	color: white;
	padding: 5% 0;
	width: 75%;
	margin: auto;
}

.btn-next {
	width: 100%;
	background-color: green;
	color: white;
	padding: 20px 20px;
	margin-top: 20%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}


.btn-fin {
	width: 100%;
	background-color: #4c4faf;
	color: white;
	padding: 20px 20px;
	margin-top: 5%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.btn-return {
	width: 100%;
	background-color: #898989;
	color: white;
	padding: 20px 20px;
	margin-top: 5%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.btn-return:hover {
	background-color: #839684;
}

.commune-dropdown {
	/* Style your dropdown list here */
	list-style-type: none;
	padding: 0;
	margin: 0;
	border: 1px solid #ccc;
	border-radius: 4px;
	max-height: 200px;
	overflow-y: auto;
}

.form-control {
	width: 100%;
	border-radius: 5px;
	border: 1px solid white;
	background-color: #333;
	color: white;
	text-transform: uppercase;
	font-weight: bolder;
}

input.form-control {
	width: 93%;
}

.commune-dropdown li {
	padding: 5px 10px;
	cursor: pointer;
}

*:focus {
	outline: none;
}

.commune-dropdown li:hover {
	background-color: #f0f0f0;
}

input,
select,
button {
	font-size: 16px;
	padding: 10px;
}
</style>
