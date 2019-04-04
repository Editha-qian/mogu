<template>
	<div :style="{'padding-bottom':'1rem'}">
		<div class="search">
			<router-link to="/goods">
				<div class="search_left" @click="nav">
					<img src="../../../img/nav.png"/>
				</div>
			</router-link>
			<form action="">
				<input type="text" value="	宽松衬衫" />
			</form>
			<div class="search_right">
				<img src="../../../img/chat.png"/>
			</div>
		</div>
		<ul class="kind">
			<!--<li v-for="(v,i) in kind" :src="v.src"></li>-->
			<li v-for="(v,i) in kind">
				<p>{{v.title}}</p>
			</li>
		</ul>
		<ul class="icon">
			<li v-for="(v,i) in classify">
				<router-link to="v.address">
					<img :src="v.src"/>
					<p>{{v.title}}</p>
				</router-link>
			</li>
		</ul>
		<div class="hot">
			<img src="../../../img/hot.jpg" width="100%"/>
			<em></em>
			<p>热门精选 | 解锁时髦精冬日穿搭LOOK→</p>
		</div>
		<div class="content">
			<mt-swipe :auto="0">
			  <mt-swipe-item>
			  	<ul>
			  		<li v-for="(v,i) in con">
			  			<img :src="v.src"/>
			  			<p>{{v.title}}</p>
			  			<p>{{v.txt}}</p>
			  		</li>
			  	</ul>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<ul>
			  		<li v-for="(v,i) in con2">
			  			<img :src="v.src"/>
			  			<p>{{v.title}}</p>
			  			<p>{{v.txt}}</p>
			  		</li>
			  	</ul>
			  </mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="popular">
			<div class="title-box">流行元素</div>
			<ul class="pop">
				<li v-for="(v,i) in pop">
					<p>{{v.title}}</p>
					<img :src="v.src" alt="" />
				</li>
			</ul>
		</div>
		<div class="like" v-for="(v,i) in like">
			<img :src="v.src" alt="" />
		</div>
		
		<div class="recommend">
			<ul class="recomm">
				<li v-for="(v,i) in recomm">
					<img :src="v.src" alt="" />
					<div class="opc">{{v.sold}}</div>
					<div class="rm_wrap">
						<p>{{v.title}}</p>
						<div class="flex">
							<div class="price">
								<em>￥{{v.price}}</em>
							</div>
							<div class="collect">
								{{v.collect}}
								<!--<img :src="v.bg" alt="" />-->
							</div>
						</div>
						<div class="buy">{{v.buy}}</div>
					</div>
				</li>
			</ul>
		</div>
		
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
			    a.classify=response.data.classify
			    a.kind=response.data.kind
			    a.con=response.data.con
			    a.con2=response.data.con2
			    a.pop=response.data.pop
			    a.like=response.data.like
			    a.recomm=response.data.recomm
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
				classify:[],
				kind:[],
				con:[],
				con2:[],
				pop:[],
				like:[],
				recomm:[]
			}
		},
		methods:{
			nav(){
				
			},
			change(a){
				this.num=a
			}
		}
	})
</script>

<style scoped="">
	.flex{
		display: flex;
		justify-content: space-between;
	}
	body{
  		margin-top: 40px;
		margin-bottom: 1rem;
	}
	.search{
		width: 100%;
		height: 0.92rem;
		line-height: 0.92rem;
		position: fixed;
		display: flex;
		top: 0;
		border-bottom: 1px solid #e5e5e5;
		background: #fff;
	}
	.search_left,.search_right{
		display: flex;
		align-items: center;
		padding: 0.2rem;
	}
	.search_left img,.search_right img{
		width: 0.5rem;
	}
	form{
		display: flex;
		flex: 1;
		padding: 0.15rem;
	}
	input{
		width: 100%;
		color: #999;
		border: none;
		background: url(../../../img/down.png) no-repeat 0.15rem center #eee;
		background-size: 0.31rem auto;
		border-radius: 0.06rem;
		font-size: 0.24rem;
		height: 0.6rem;
	}
	
	.kind{
		padding:0.18rem 0 0 0.18rem;
		background: #fff;
		margin-top: 0.92rem;
	}
	.kind li{
		position: relative;
		width: 1.65rem;
		height: 1.65rem;
		background: url(../../../img/bg1.png);
		background-size: cover;
		margin-right: 0.18rem;
		display: inline-block;
	}
	.kind li:nth-of-type(2){
		background: url(../../../img/bg2.jpg);
		background-size: cover;
	}
	.kind li:nth-of-type(3){
		background: url(../../../img/bg3.png);
		background-size: cover;
	}
	.kind li:nth-of-type(4){
		background: url(../../../img/bg4.png);
		background-size: cover;
	}
	.kind p{
		position: absolute;
		width: 100%;
		text-align: center;
		color: #fff;
		bottom: 0.04rem;
		font-size: 0.28rem;
	}
	
	.icon{
		width: 100%;
		background: #fff;
		padding-top: 0.1rem;
	}
	.icon li{
		height: 1rem;
		margin: 0 10px;
		display: inline-block;
	}
	.icon li span{
		font-size: 0.25rem;
	}
	.icon img{
		height: 100%;
	}
	.icon p{
		font-size: 0.25rem;
	}
	.hot{
		position: relative;
		background:#fff;
	}
	.hot img{
		display: block;
	}
	.hot em{
		position: absolute;
		left: 0.4rem;
		bottom: 0;
		border-bottom: 0.12rem solid #fff;
		border-left: 0.12rem solid transparent;
		border-right: 0.12rem solid transparent;
		border-top: 0.12rem solid transparent;
	}
	.hot p{
		position: absolute;
		left: 0.4rem;
		top: 0.9rem;
		font-size: 0.32rem;
		color: #fff;
	}
	
	.content{
		height: 4.78rem;
		background:#fff;
	}
	.content li{
		width: 2.26rem;
		height: 4.78rem;
		padding: 0.12rem;
		float: left;
	}
	.content img{
		width: 100%;
	}
	.content p{
		font-size: 0.28rem;
		color: #333;
	}
	.content p:nth-of-type(2){
		font-size: 0.24rem;
		color: #999;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-top: 0.03rem;
	}
	.mint-swipe-indicator{
		background: rgb(217, 217, 217);
		opacity: 1;
		width: 0.1rem;
		height: 0.1rem;
	}
	.mint-swipe-indicator.is-active{
		background: rgb(51, 51, 51);
		opacity: 1;
	}
	
	.popular{
		background: #fff;
		padding-left: 0.18rem;
	}
	.title-box{
		font-size: 0.32rem;
		padding:0.2rem 0 0 0.18rem;
		font-weight: 700;
		margin: 0.2rem 0 0.3rem;
		color: #666;
		text-align: left;
	}
	.pop{
		display: flex;
		width: 100%;
		flex-wrap: wrap;
	}
	.pop li{
		width: 2.26rem;
		height: 2.26rem;
		position: relative;
		background: #F3F3F3;
		margin: 0 0.18rem 0.18rem 0;
	}
	.pop p{
		position: absolute;
		top: 0.3rem;
		width: 100%;
		font-size: 0.28rem;
		font-weight: 700;
		color: #333;
	}
	.pop img{
		width: 1.6rem;
		height: 1.2rem;
		position: absolute;
		left: 50%;
		bottom: 0.2rem;
		margin-left: -0.82rem;
	}
	.like{
		width: 7.5rem;
		height: 0.77rem;
		margin: 0.2rem 0 0.2rem;
	}
	.like img{
		width: 100%;
		display: block;
	}
	.recomm{
		display: flex;
	}
	.recomm li{
		width: 3.48rem;
		height: 6.24rem;
		margin: 0 0 0.18rem 0.18rem;
		background: #fff;
		position: relative;
		display: block;
	}
	.recomm img{
		width: 100%;
		display: block;
	}
	.opc{
		position: absolute;
		bottom: 1.7rem;
		height: 0.5rem;
		line-height: 0.5rem;
		background: url(../../../img/opacity.png) no-repeat;
		background-size: 100%;
		padding: 0 .4rem 0 .2rem;
		color: #fff;
		font-size: 0.2rem;
	}
	.rm_wrap{
		/*height: 1.6rem;*/
		padding: 0.1rem 0.12rem 0.1rem 0.12rem;
	}
	.recomm p{
		color: #555;
		font-size: 0.24rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.price{
		display: inline-flex;
	}
	.recomm em{
		font-style: normal;
		font-size: 0.3rem;
		font-weight: 700;
	}
	.collect{
		font-size: 0.24rem;
		color: #666;
		background: url(../../../img/star.png) no-repeat right;
		background-size: auto 0.24rem;
		padding-right: 0.3rem;
		line-height: 0.5rem;
	}
	.buy{
		background: rgb(255, 87, 119);
		color: #fff;
		line-height: 0.5rem;
		font-size: 0.26rem;
		border-radius: 0.06rem;
	}
</style>