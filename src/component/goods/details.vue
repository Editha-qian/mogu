<template>
	<div>
		<div class="show">
			<div class="show_top">
				<span class="iconfont icon-fanhui"  @click="go()"></span>
				<span class="iconfont icon-cart" @click="change()"></span>
			</div>
			<ul>
				<li v-for="(v,i) in show">
					<img :src="v.src" alt="" />
				</li>
			</ul>
			<div class="price_wrap" v-for="(v,i) in detail">
				<div class="price">
					<div class="price_left">
						<span><em>￥</em>{{v.price}}</span>
					</div>
					<div class="price_right">
						<span>{{v.original}}</span>
						<span>{{v.sale}}</span>
					</div>
				</div>
				<p>{{v.title}}</p>
				<div class="area">
					<p>{{v.free}}</p>
					<p>{{v.area}}</p>
				</div>
			</div>
		</div>
		<div class="gap"></div>
		
		<div>
			<div class="coupon" v-for="(v,i) in coupon">
				<div class="title">{{v.discounts}}</div>
				<div>
					<span class="discount-stores">{{v.coupon}}</span>
					<div class="minus">
						<span>{{v.oreduction}}</span>
						<span>{{v.treduction}}</span>
					</div>
				</div>
				
			</div>
		</div>
		
		<div class="footer">
			<ul class="footer_left">
				<li>
					<span class="iconfont icon-dianpu"></span>
					<span>店铺</span>
				</li>
				<li>
					<span class="iconfont icon-chats"></span>
					<span>客服</span>
				</li>
				<li>
					<span class="iconfont icon-xingxing"></span>
					<span>收藏</span>
				</li>
			</ul>
			<div class="footer_right">
				<div>加入购物车</div>
				<div>立即购买</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		mounted(){
			var a=this
			this.$http.get('./data/details.json')
			  .then(function (response) {
			    console.log(response);
				//console.log(response.data)
			    a.show=response.data.show
			    a.detail=response.data.detail
			    a.coupon=response.data.coupon
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
				show:[],
				detail:[],
				coupon:[]
			}
		},
		methods:{
			go(){
				this.$router.go(-1);
			},
			change(){
				this.$router.push('/shoppingcar')
			}
		}
	}
</script>

<style scoped="">
	body{
		background:#f6f6f6;
		margin-bottom: 1rem;
	}
	.show{
		position: relative;
		background: #fff;
	}
	.show_top{
		display: flex;
		width: 100%;
		box-sizing: border-box;
		justify-content: space-between;
		position: fixed;
		top: 0;
		left: 0;
		padding: 0.15rem;
	}
	.show_top span{
		display: inline-block;
		width: 0.8rem;
		height: 0.8rem;
		line-height: 0.8rem;
		border-radius: 50%;
		color: #fff;
		background: rgba(0, 0, 0, 0.4);
		font-size: 0.4rem;
		font-weight: bold;
	}
	.show_top span:nth-of-type(2){
		font-weight: normal;
	}
	.show ul{
		display: flex;
		margin-left: 0.2rem;
	}
	.show li{
		height: 7.8rem;
		margin-right: 0.2rem;
	}
	.show img{
		height: 100%;
	}
	.price{
		display: flex;
		margin-top: 0.2rem;
	}
	.price_left{
		padding: 0 .32rem;
		text-align: left;
	}
	/*.price_left span:nth-of-type(1){
		display: inline-block;
		font-size: 0.24rem;
		line-height: 0.3rem;
	}*/
	.price_left em{
		font-style: normal;
		font-size: 0.24rem;
		margin-top: 0.12rem;
	}
	.price_left span{
		display: flex;
		font-size: 0.72rem;
	}
	.price_right {
		margin-left: -0.2rem;
	}
	.price_right span:nth-of-type(1){
		display: block;
		font-size: 0.24rem;
		line-height: 0.5rem;
		text-decoration: line-through;
		color: #999;
		opacity: 0.7;
	}
	.price_right span:nth-of-type(2){
		display: block;
		height: 0.32rem;
		font-size: 0.2rem;
		color: rgb(255, 34, 85);
		background: rgb(255, 232, 238);
	}
	.price_wrap p{
		padding: 0.18rem 0.3rem 0;
		font-size: 0.32rem;
		text-align: left;
	}
	.area{
		display: flex;
		justify-content: space-between;
		color: #999;
		border-bottom: 1px solid #eee;
	}
	.area p{
		font-size: 0.22rem;
		line-height: 0.69rem;
		padding: 0 0.32rem 0 0.32rem;
	}
	.gap{
		height: 0.2rem;
		background: rgb(234, 234, 234);
	}
	
	.title{
		font-size: 0.26rem;
		color: #999;
	}
	.discount-stores{
		display: inline-block;
		line-height: 0.34rem;
		color: #ff5777;
		background: #ffeef3;
		padding: 0 .12rem;
		font-size: 0.22rem;
	}
	.minus span{
		font-size: 0.22rem;
		border: 1px solid #ff5777;
	}
	
	.footer{
		width: 100%;
		height: 1rem;
		display: flex;
		position: fixed;
		bottom: 0;
		background: #fff;
	}
	.footer_left{
		display: flex;
		align-items: center;
	}
	.footer_left li{
		height: 1rem;
		width: 1.16rem;
		display: flex;
		flex-flow: column;
		justify-content: center;
		border-right: 1px solid #ededed;
		border-top: 1px solid #ededed;
	}
	.footer_left span{
		font-size: 0.35rem;
	}
	.footer_left span:nth-of-type(2){
		font-size: 0.2rem;
		color: #666;
	}
	.footer_right{
		display: flex;
		width: 100%;
	}
	.footer_right>div{
		width: 100%;
		height: 100%;
		line-height: 1rem;
		background: #ffe6e8;
		color: #ff5777;
		font-size: 0.28rem;
	}
	.footer_right>div:nth-of-type(2){
		background: #ff5777;
		color: #fff;
	}
</style>