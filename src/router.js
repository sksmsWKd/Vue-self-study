import Vue from 'vue'
import VueRouter from "vue-router"
import Home from "./views/Home"
import About from "./views/About"

Vue.use(VueRouter);
//라우터 쓰겠다

const router = new VueRouter({
	mode: "history",
	routes: [{
		path: "/",
		component: Home
	}, {
		path: "/about",
		component: About
	}]
	//path 들어왔을떄 어디로 넘길지
})

export default router;