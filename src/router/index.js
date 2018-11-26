import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Splash = (resolve) => {
    import('../pages/splash/splash.vue').then((splash) => {
        resolve(splash);
    })
}
const AppShow = (resolve) => {
    import('../pages/appShow/appShow.vue').then((appShow) => {
        resolve(appShow);
    })
}
const Recommend = (resolve) => {
    import('../pages/recommend/recommend.vue').then((recommend) => {
        resolve(recommend);
    })
}
const UserCenter = (resolve) => { 
    import('../pages/user-center/user-center.vue').then((userConter) => { 
        resolve(userConter);
    })
}
const About = (resolve) => { 
    import('../pages/about/about.vue').then((about) => { 
        resolve(about);
    })
}
export default new Router({
    routes: [
        {
            path: '*',
            redirect: '/splash'
        },
        {
            path: '/splash',
            component: Splash
        },
        {
            path: '/appShow',
            component: AppShow,
            children: [
                {
                    path: '',
                    redirect:'/appShow/recommend'
                },
                {
                    path: 'recommend',
                    component:Recommend
                },
                {
                    path: 'about',
                    component:About
                },
                {
                    path: 'user',
                    component:UserCenter
                }
            ]
        }
    ]
})
