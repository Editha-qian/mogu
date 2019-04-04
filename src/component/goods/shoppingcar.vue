<template>
	<div>
		<div class="header">
			<span class="iconfont icon-fanhui" @click="go()"></span>
			<p>购物车</p>
			<div>
				<span>编辑</span>
				<span></span>
			</div>
		</div>
	</div>
</template>


<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			go(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped="">
	body{
		background:#f6f6f6;
		/*margin-bottom: 1rem;*/
		margin-top: 0;
	}
	.header{
		display: flex;
		height: 0.9rem;
		line-height: 0.9rem;
		width: 100%;
		background: #fff;
	}
	.header>div{
		width: 1.4rem;
		height: 0.9rem;
		color: #727272;
	}
	.header>span{
		width: 0.9rem;
		display: block;
	}
	.header p{
		font-size: 0.36rem;
		color: #5e5e5e;
		flex: 1;
	}
	.header>div span{
		width: 0.5rem;
		height: 0.5rem;
		font-size: 0.26rem;
	}
	.header>div span:nth-of-type(2){
		background: url(../../../img/chat.png) no-repeat;
		width: 0.5rem;
		height: 0.5rem;
		background-size: 100%;
		display: inline-block;
	}
</style>