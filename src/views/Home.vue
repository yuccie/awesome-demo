<template>
  <div class="home">
  	<h1>首页</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>
<style scoped>
	:root {
		--hColor: #ff0;
	}
	.home {
		& h1 {
			color: var(--hColor);
			display: flex;
		}
	}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
  HelloWorld,
  },
  })
export default class Home extends Vue {}
</script>
