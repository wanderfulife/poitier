<template>
	<!-- Your HTML template remains the same -->
</template>

<script>
import { ref, computed } from 'vue';

export default {
	setup() {
		const Q1 = ref(0);
		const Q3 = ref(0);
		const Q6a = ref(0);
		const Q6a_DETAIL = ref('');
		const Q7 = ref(0);
		const Q8 = ref(0);
		const level = ref(0);

		#explain
		
		const showQ6a = computed(() => (level.value === 8 && Q1.value === 1 && (Q3.value === 8 || Q3.value === 9 && Q3.value === 10)) || (level.value === 9 && Q3.value < 8));
		const showQ7 = computed(() => (level.value === 9 && Q1.value === 1 && (Q3.value === 8 || Q3.value === 9 && Q3.value === 10)) || (level.value === 10 && Q3.value < 8));
		const showQ8 = computed(() => (level.value === 10 && Q1.value === 1 && (Q3.value === 8 || Q3.value === 9 && Q3.value === 10)) || (level.value === 11 && Q3.value < 8) || level.value === 6 && Q1.value > 2);

		const next = () => {
			// Your next function logic
		};

		const back = () => {
			// Your back function logic
		};

		return {
			Q1,
			Q3,
			Q6a,
			Q6a_DETAIL,
			Q7,
			Q8,
			level,
			showQ6a,
			showQ7,
			showQ8,
			next,
			back
		};
	}
};
</script>