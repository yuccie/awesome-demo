import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const testPromiseFinally = () => {
	return new Promise((resolve, reject) => {
		resolve(1);
	}).finally(() => {
		console.log(1);
	});
}

testPromiseFinally().then(() => {
	console.log(2);
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
