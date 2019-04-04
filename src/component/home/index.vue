<template>
	<div>
		<router-view></router-view>
		<ul class="footer">
			<li><router-link to='/home'>首页</router-link></li>
			<li><router-link to='/store'>商城</router-link></li>
			<li><router-link to='/live'>直播</router-link></li>
			<li><router-link to='/mine'>我</router-link></li>
		</ul>
	</div>
</template>

<script>
</script>

<style>
	*{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	html{
		font-size: 42.6667px !important;
	}
	.footer{
		position: fixed;
		background:#fff;
		bottom: 0;
		width: 100%;
		height: 1rem;
		display: flex;
	}
	.footer li{
		min-width: 1rem;
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 25%;
	}
	.router-link-exact-active{
		color: rgb(255, 63, 120);

	}
	a{
		font-size: .32rem;
		color: #666;
		text-decoration: none;
	}
</style>