import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import contact from '@/components/contact'
import details from '@/components/details'

Vue.use(Router)

export default new Router({
	 mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: home
		},
		
		{
			path: '/contact',
			name: 'contact',
			component: contact
		},
		{
			path:'/details/:Eid',
			name: 'details',
			component: details
		}
	]
})