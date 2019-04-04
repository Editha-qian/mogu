import VueRouter from 'vue-router'
import home from '../component/home/home.vue'
import store from '../component/home/store.vue'
import live from '../component/home/live.vue'
import mine from '../component/home/mine.vue'
import index from '../component/home/index.vue'
import goods from '../component/goods/goods.vue'
import shoppingcar from '../component/goods/shoppingcar.vue'
import details from '../component/goods/details.vue'

export default new VueRouter({
	routes:[
		{
			path:'/goods',
			component:goods
		},
		{
			path:'/shoppingcar',
			component:shoppingcar
		},
		{
			path:'/details',
			component:details
		},
		{
			path:'/index',
			component:index,
			children:[
				{
					path:'/home',
					component:home
				},
				{
					path:'/store',
					component:store
				},
				{
					path:'/live',
					component:live
				},
				{
					path:'/mine',
					component:mine
				},
				{
					path:'/*',
					redirect:'/home'
				},
			]
		}
	]
})
