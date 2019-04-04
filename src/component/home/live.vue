<template>
	<div>
	    <ul class="tabs">
	        <li class="li-tab" v-for="(item,i) in list" @click="toggleTabs(i)" :class="{active:i!=nowIndex}">
	        {{item}}
	       		<em v-show="num==i"></em>
	        </li>
	       
	    </ul>
	    <div class="divTab" v-show="nowIndex===0">我是tab1</div>
	    <div class="divTab" v-show="nowIndex===1">我是tab2</div>
	    <div class="divTab" v-show="nowIndex===2">我是tab3</div>
	    <div class="divTab" v-show="nowIndex===3">我是tab4</div>
	</div>
</template>

<script>
	 export default({
	    data(){
	    	return{
	    		list:['热门','关注','穿搭','美妆'],//（这个也可以用对象key，value来实现）
	        	nowIndex:0,//默认第一个tab为激活状态
	        	show:true,
	        	num:0
	    	}
	        
	    },
	    methods:{
	        toggleTabs:function(i){
	            this.nowIndex=i;
	            this.num=i
	        }
	    }
	   })
</script>

<style>
	
	.tabs{
		font-size: 0.35rem;
		display: flex;
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
		width: 200px;
		height: 300px;
	}
</style>