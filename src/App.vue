<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
		list-style: none;
	}
	#app {
	  text-align: center;
	  /*margin-top: 40px;*/
	}
	html{
			font-size: 42.6667px !important;
		}
	body{
		background:#f6f6f6;
	}

</style>
