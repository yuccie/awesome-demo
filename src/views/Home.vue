<template>
  <div class="home">
  	<h1>首页</h1>
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
import userName from 'utils/userName';
import request from 'utils/request';
import helper from '@/utils/helper';

delayFunc(() => {
  //console.log('1秒延时');
} , 1000);

@Component({
  components : {
    HelloWorld
  }
})
export default class Home extends Vue {
  userName : string = ''
  date : string = ''

  async created() {
    //const helperInfo = helper();
    try {
      const data: any = await request({
        url : '/api/test' ,
        method : 'get'
      });
      this.userName = data.name;
      // eslint-disable-next-line
      console.log('data' , data);
    } catch (e) {
      // eslint-disable-next-line
      console.log('e', e);
    }

  }
}
</script>
