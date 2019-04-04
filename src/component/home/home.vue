<template>
	<div>
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
		<div class="banner">
			<mt-swipe :auto="0">
			  <mt-swipe-item v-for="(v,i) in banner"><img :src="v.src" alt="" /></mt-swipe-item>
			  <!--<mt-swipe-item>2</mt-swipe-item>
			  <mt-swipe-item>3</mt-swipe-item>-->
			</mt-swipe>
		</div>
		<ul class="icon">
			<li v-for="(v,i) in list">
				<router-link to="v.address">
					<img :src="v.src" alt="" />
					<p>{{v.title}}</p>
				</router-link>
			</li>
		</ul>
		<div>
			<div id="tab">
				<div @click="change(i)" v-for="(v,i) in tab">
					{{v.text}}
					<em v-show="num==i"></em>
				</div>
			</div>
			<section>
				<div v-for="(v,i) in tabs" v-show="num==i">
					{{v.text}}
					<div class="con">
						<img :src="v.src" alt="" />
						<div class="con_left">
							<p>{{v.title}}</p>
							<p>
								<span><em>{{v.first}}</em>cm</span>
								<span><em>{{v.second}}</em>kg</span>
								<span>{{v.vertical}}</span>
								<span>{{v.third}}</span>
								<span>{{v.vertical}}</span>
								<span>{{v.fourth}}</span>
							</p>
						</div>
						<div class="con_right">
							<p>{{v.rankNumber}}</p>
							<p>{{v.weekNumber}}</p>
						</div>
					</div>
				</div>
			</section>
			<ul class="photo">
				<li v-for="(v,i) in pic">
					<img :src="v.src" alt="" />
					<div class="scanIcon">
						<img :src="v.eye" alt="" />
						<span>{{v.number}}</span>
					</div>
					<div class="bag"><img :src="v.bag" alt=""/></div>
				</li>
			</ul>
			<div class="tagBox">
				<ul class="store">
					<li v-for="(v,i) in store">
						<div class="swrap"><img src="v.src" alt="" /></div>
						<span>{{v.name}}</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>


<script>
	export default{
		mounted(){
			var a=this
			this.$http.get('./data/data.json')
			  .then(function (response) {
			    console.log(response);
				//console.log(response.data)
			    a.list=response.data.data
			    a.tab=response.data.tab
			    a.tabs=response.data.tabs
			    a.pic=response.data.pic
			    a.store=response.data.store
			    a.banner=response.data.banner
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
				list:[],
				tab:[],
				tabs:[],
				pic:[],
				store:[],
				banner:[],
				show:true,
				num:0
			}
		},
		methods:{
			nav(){
				
			},
			change(a){
				this.num=a
			}
		}
	}
</script>

<style>
	.mint-swipe-items-wrap{
		padding-bottom: 39.84%;
	}
	body{
		background:#f6f6f6;
  		/*margin-top: 40px;*/
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
		z-index: 1;
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
	.banner{
		background: #eee;
		margin-top: 0.92rem;
	}
	.banner img{
		width: 100%;
	}
	.wrap{
		width: 20%;
		height: 1rem;
		float: left;
		margin: 5px 5px;
		background: lightblue;
	}
	.pic{
		width: 1rem;
		height: 1rem;
		background:yellow;
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
	#tab{
		background:#fff;
		display: flex;
		margin-top: 0.1rem;
		height: 1rem;
		border-bottom: 0.01rem solid #e2e2e2;
	}
	#tab>div{
		position: relative;
		width: 33.33%;
		font-size: 0.32rem;
		line-height: 1rem;
		font-weight: 700;
		text-align: center;
	}
	section{
		background: #fff;
	}
	#tab em{
		position: absolute;
		bottom: 0.2rem;
		left: 41%;
		width: 0.5rem;
		height: 0.04rem;
		border-radius: 0.02rem;
		background: #ff5777;
	}
	.con{
		height: 1.1rem;
		padding: .32rem .2rem 0 .2rem;
	}
	.con>img{
		width: 0.8rem;
		height: 0.8rem;
		float: left;
		border-radius: 50%;
	}
	.con>div:nth-of-type(1){
		float: left;
		width: 4rem;
		height: 0.8rem;
		margin-left: 0.18rem;
		text-align: left;
	}
	.con p{
		font-size: 0.32rem;
		color: #333;
		font-weight: 700;
	}
	.con span{
		font-size: 0.22rem;
		color: #999;
	}
	.con span em{
		font-style: normal;
		color: #333;
	}
	.con_right{
		margin-left: 0.18rem;
		text-align: right;
	}
	.con_right p{
		font-size: 0.32rem;
		font-weight: 500;
		color: #A5AAB9;
	}
	.con_right p:nth-of-type(2){
		font-size: 0.22rem;
	}
	.photo{
		display: flex;
		justify-content: space-between;
	}
	.photo li{
		float: left;
		position: relative;
		height: 4.13rem;
	}
	.photo img{
		height: 100%;
	}
	.scanIcon{
		position: absolute;
		left: 0.12rem;
		bottom: 0.2rem;
		width: 1.5rem;
		height: 0.28rem;
		display: inline-flex;
	}
	.scanIcon img{
		vertical-align: middle;
	}
	.scanIcon span{
		font-size: 0.22rem;
		font-weight: 700;
		color: #fff;
	}
	.bag{
		position: absolute;
		display: flex;
		width: 0.28rem;
		height:0.28rem;
		right: 0.12rem;
		bottom: 0.2rem;
	}
	
	.tagBox{
		height: 0.52rem;
		padding: 0.2rem;
		padding-top: 0.24rem;
		background: #fff;
	}
	.store{
		width: auto;
		overflow-x: auto;
		height: 0.7rem;
		white-space: nowrap;
	}
	.store li{
		display: inline-block;
		height: 0.52rem;
		padding: .1rem .1rem 0 .08rem;
		background: #F2F3F7;
		border-radius: 0.04rem;
		margin-right: 0.1rem;
	}
	.store .swrap{
		width: 0.32rem;
		height: 0.32rem;
	}
	.store span{
		height: 0.32rem;
		font-size: 0.24rem;
		margin-left: 0.08rem;
		color: #666;
	}
</style>