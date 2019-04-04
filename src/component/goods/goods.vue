<template>
	<div>
		<div class="search">
			<div class="search_left" @click="nav">
				<img src="../../../img/chat.png"/>
			</div>
			<form action="">
				<input type="text" value="	宽松衬衫" />
			</form>
			<router-link to="/shoppingcar">
				<div class="search_right">
					<img src="../../../img/shop.png"/>
				</div>
			</router-link>
		</div>
		<div>
			<ul class="list">
				<li v-for="(v,i) in list" @click="change(i)" :class="{current:num==i}">{{v.title}}</li>
			</ul>
			<div class="right" v-show="index==0">
				<ul class="items">
					<li v-for="(v,i) in items">
						<div>
							<img :src="v.src" alt="" />
						</div>
						<p>{{v.title}}</p>
					</li>
				</ul>
				<div>
					<div v-for="(v,i) in "></div>
				</div>
				<div>
				    <ul class="tabs">
				        <li class="li-tab" v-for="(item,i) in lists" @click="toggleTabs(i)" :class="{active:i!=nowIndex}">
				        {{item}}
				       		<em v-show="nums==i"></em>
				        </li>
				       
				    </ul>
				    <div class="divTab" v-show="nowIndex==0">
				    	<ul class="ic">
				    		<li v-for="(v,i) in classify">
				    			<router-link to="/details">
					    			<img :src="v.src" alt="" />
					    			<div class="opc">{{v.sold}}</div>
					    			<p>{{v.title}}</p>
					    			<div class="flex">
										<div class="price">
											<em>￥{{v.price}}</em>
										</div>
										<div class="collect">
											{{v.collect}}
										</div>
									</div>
								</router-link>
				    		</li>
				    	</ul>
				    </div>
				    <div class="divTab" v-show="nowIndex==1">
				    	<ul class="ic">
				    		<li v-for="(v,i) in classify2">
				    			<img :src="v.src" alt="" />
				    			<div class="opc">{{v.sold}}</div>
				    			<p>{{v.title}}</p>
				    			<div class="flex">
									<div class="price">
										<em>￥{{v.price}}</em>
									</div>
									<div class="collect">
										{{v.collect}}
									</div>
								</div>
				    		</li>
				    	</ul>
				    </div>
				    <div class="divTab" v-show="nowIndex==2">我是tab3</div>
				</div>
			</div>
			<div class="right" v-show="index==1"
				>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		mounted(){
			var a=this
			this.$http.get('./data/goods.json')
			  .then(function (response) {
			    console.log(response);
				//console.log(response.data)
			    a.list=response.data.list
			    a.items=response.data.items
			    a.classify=response.data.classify
			    a.classify2=response.data.classify2
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
				num:0,	
				list:[],
				items:[],
				classify:[],
				classify2:[],
				lists:['综合','销量','新品'],
				index:0,
				nowIndex:0,//默认第一个tab为激活状态
	        	show:true,
	        	nums:0
			}
		},
		methods:{
			nav(){
				
			},
			change(a){
				this.num=a;
				this.index=a;
			},
			toggleTabs:function(i){
		        this.nowIndex=i;
		        this.nums=i;
	        }	
		}
	}
</script>

<style scoped="">
	body{
		background:#f6f6f6;
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
	
	.list{
		width: 1.8rem;
		position: fixed;
		overflow-y: auto;
		margin-top: 0.93rem;
		top: 0;
		bottom: 0;
		left: 0;
	}
	::-webkit-scrollbar {
		display: none;/*隐藏滚轮*/
	}
	.list li{
		/*overflow-y: auto;*/
		font-size: 0.28rem;
		color: #666;
		width: 1.8rem;
		line-height: 0.9rem;
	}
	.right{
		padding-left: 1.8rem;
		margin-top: 0.92rem;
	}
	.items{
		overflow: hidden;	
		background: #fff;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	.items li{
		width: 1.76rem;
		height: 1.9rem;
		/*float: left;*/
		margin: 0.2rem 0;
	}
	.items img{
		width: 1.3rem;
		height: 1.3rem;
	}
	.items p{
		font-size: 0.24rem;
	}
	.list .current{
		background: #fff;
		color: #ef4562;
		font-weight: bold;
		border-left: solid #FF5577 4px;
	}
	.tabs{
		font-size: 0.35rem;
		display: flex;
		background: #fff;
	}
	.li-tab{
		flex: 1;
		color: #ff5777;
		line-height: 1rem;
		display:inline-block;
		text-align: center;
		position: relative;
	}
	.tabs em{
		position: absolute;
		bottom: 0rem;
		left: 25%;
		width: 1rem;
		height: 0.04rem;
		border-radius: 0.02rem;
		background: #ff5777;
	}
	.active{
		color: #333;
	}
	.divTab{
		width: 100%;
		height: 300px;
	}
	.flex{
		display: flex;
		justify-content: space-between;
	}
	.ic{
		display: flex;
		flex-wrap: wrap;
		background: #fff;
	}
	.ic li{
		position: relative;
		width: 2.7rem;
		height: 4.8rem;
		margin: 2% 0 0 2%;
		border-radius: 0.06rem;
	}
	.ic img{
		width: 100%;
	}
	.opc{
		position: absolute;
		bottom: 1.3rem;
		height: 0.5rem;
		line-height: 0.5rem;
		background: url(../../../img/opacity.png) no-repeat;
		background-size: 100%;
		padding: 0 .4rem 0 .2rem;
		color: #fff;
		font-size: 0.2rem;
	}
	.ic p{
		font-size: 0.24rem;
		color: #333;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.price{
		display: inline-flex;
		color: #FF5777;
	}
	.ic em{
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
</style>