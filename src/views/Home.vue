<template>
  <div class="home">
  	<h1>首页</h1>
    <h2>{{helperInfo}}</h2>
    <img alt="Vue logo" src="../assets/logo.png">
    <svg-icon iconClass="password"></svg-icon>
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
import HelloWorld from 'components/HelloWorld.vue'; // @ is an alias to /src
import {delayFunc} from 'utils/dateFormat.ts';
import helper from '@/utils/helper';
import userName from '@/utils/userName';

delayFunc(() => {
  //console.log('1秒延时');
}, 1000);

@Component({
  components: {
  HelloWorld,
  },
  data() {
    return {
      helperInfo: helper()
    }
  }
  })
export default class Home extends Vue {}
</script>
