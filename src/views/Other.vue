<template>
  <div class="home">
  	<h1>首页</h1>
    <h2>{{helperInfo + '111'}}</h2>
    <h3>{{userName}}</h3>
    <h3>{{date}}</h3>
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
import { Component , Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import {delayFunc} from 'utils/dateFormat';
import helper from 'utils/helper';
import userName from 'utils/userName';
import request from 'utils/request';

delayFunc(() => {
  //console.log('1秒延时');
} , 1000);

@Component({
  components : {
    HelloWorld
  }
})
export default class Other extends Vue {
  helperInfo : string = helper()
  userName : string = ''
  date : string = ''

  async created() {
    const data: any = await request({
      url : '/api/test' ,
      method : 'get'
    });
    this.userName = data.name;
    // eslint-disable-next-line
    console.log('data' , data);
  }
}
</script>