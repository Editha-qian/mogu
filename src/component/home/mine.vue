<template>
	<div>
		<div class="head">
			<div v-for="(v,i) in user">
				<div class="information">
					<div class="headportrait">
						<img :src="v.src" alt="" />
					</div>
					<div class="info_wrap">
						<p>{{v.username}}</p>
						<div class="page">{{v.homepage}}</div>
					</div>
				</div>
			</div>
		</div>
		
		<!--<div>
			<div class="item_wrap" v-for="(v,i) in item">
				<div>
					<p><img :src="v.src" alt="" /></p>
					<p>{{v.text}}</p>
				</div>
			</div>
			<div class="gap"></div>
		</div>
	</div>-->
		<div :style="{'background':'#fff'}">
			<div class="item_wrap">
				<div>
					<p><img src="../../../img/news.png"/></p>
					<p class="news">消息</p>
				</div>
				<div :style="{'border':'none'}">
					<p><img src="../../../img/collect.png"/></p>
					<p class="news">收藏</p>
				</div>
			</div>
		</div>
		<div class="gap"></div>
		<div :style="{'background':'#fff'}">
			<div class="item_wrap">
				<div>
					<p><img src="../../../img/shoppingcar.png"/></p>
					<p class="news">购物车</p>
				</div>
				<div>
					<p><img src="../../../img/order.png"/></p>
					<p class="news">我的订单</p>
				</div>
				<div :style="{'border':'none'}">
					<p><img src="../../../img/card.png"/></p>
					<p class="news">卡券红包</p>
				</div>
			</div>
		</div>
		<div class="gap"></div>
		<div :style="{'background':'#fff'}">
			<div class="item_wrap">
				<div>
					<p><img src="../../../img/wallet.png"/></p>
					<p class="news">我的钱包</p>
				</div>
				<div>
					<p><img src="../../../img/address.png"/></p>
					<p class="news">收货地址</p>
				</div>
				<div :style="{'border':'none'}">
					<p><img src="../../../img/service.png"/></p>
					<p class="news">客服</p>
				</div>
			</div>
		</div>
		<div class="exit">退出登录</div>
		<!--<div class="item_wrap">
			<div>
				<p><img src="../../../img/news.png"/></p>
				<p class="news">消息</p>
			</div>
		</div>-->
	</div>
	
</template>

<script>
	export default({
		mounted(){
			var a=this
			this.$http.get('./data/data.json')
			  .then(function (response) {
			    console.log(response);
				//console.log(response.data)
			    a.user=response.data.user
			    a.item=response.data.item
			  })
			  .catch(function (error) {
			    console.log(error);
			  })
			  .then(function () {
			    // always executed
			  });
		},
		data(){
			return{
				user:[],
				item:[]
			}
		}
	})
</script>

<style scoped="">
	/*body{
		background:#f6f6f6;
		margin-bottom: 1rem;
	}*/
	.head{
		position: relative;
		background:url(../../../img/mybg.png) no-repeat #fff;
		background-size: 7.5rem 3.42rem;
		height: 4.1rem;
	}
	.head p{
		font-size: 0.3rem;
		font-weight: 700;
	}
	.headportrait{
		width: 1.3rem;
		height: 1.3rem;
		position: absolute;
		left: 2.7rem;
		top: -0.65rem;
	}
	.headportrait img{
		width: 100%;
		border-radius: 50%;
	}
	.information{
		position: relative;
		width: 6.78rem;
		height: 2.27rem;
		top: 1.8rem;
		border-radius: 0.1rem;
		background: #fff;
		margin: 0 auto;
		box-shadow: 0 0.02rem 0.32rem rgba(0,0,0,.12);
	}
	.page{
		width: 1.74rem;
		height: 0.46rem;
		border: 0.01rem solid #d2d2d2;
		font-size: 0.28rem;
		color: #5e5e5e;
		margin: 0 auto;
		margin-top: 0.18rem;
	}
	.info_wrap{
		padding-top: 0.83rem;
		text-align: center;
	}
	.item_wrap{
		line-height: 1.1rem;
		margin-left: 0.35rem;
	}
	.item_wrap>div{
		height: 1.1rem;
		font-size: 0.32rem;
		line-height: 1.1rem;
		border-bottom: 1px solid #e5e5e5;
	}
	.item_wrap p{
		width: 0.74rem;
		height: 1.1rem;
		float: left;
	}
	.item_wrap img{
		width: 0.44rem;
		height: 0.44rem;
		margin: 0.28rem 0.3rem 0.28rem 0;
	}
	.item_wrap p:nth-of-type(2){
		width: 6.06rem;
		height: 1.1rem;
		color: #333;
		text-align: left;
	}
	.gap{
		width: 7.5rem;
		height: 0.2rem;
		/*background: #f6f6f6;*/
	}
	.exit{
		width: 6.6rem;
		line-height: 0.8rem;
		margin: 0 auto;
		color: #fff;
		background: #ff5777;
		font-size: 0.3rem;
		border-radius: 0.04rem;
		margin-top: 0.3rem;
		margin-bottom: 1rem;
	}
</style>