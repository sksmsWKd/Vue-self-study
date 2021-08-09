import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
	// ...
	state: {
		count: 0,
	},
	mutations: {
		increment(state) {
			state.count++;
		},
		decrement(state) {
			state.count--;
		},
		doubleadd(state, n = 2) {
			state.count += n;
		}
	},
	getters: {
		counting(state) {
			return state.count;
		}
	}
});

Vue.config.productionTip = false