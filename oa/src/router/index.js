import Vue from 'vue'
import Router from 'vue-router'
import Personal from './personal'

Vue.use(Router)



let RouteList = [{
        path: '/',
        component: resolve => require(['~/views/Layout/App.vue'], resolve),
        meta: {
            title: '首页',
            keepAlive: false,
        },
        children: [{
                path: '/',
                name: 'yhsh',
                meta: {
                    title: '用户审核',
                    keepAlive: false
                },
                component: resolve => require(['~/views/Icon/yhsh.vue'], resolve),
            },
            {
                path: '/font_awesome',
                name: 'FontAwesome',
                meta: {
                    title: '请假外出',
                    keepAlive: false
                },
                component: resolve => require(['~/views/Icon/FontAwesome.vue'], resolve),
            },
            {
                path: '/element_icon',
                name: 'ElementIcon',
                meta: {
                    title: '审批',
                    keepAlive: false
                },
                component: resolve => require(['~/views/Icon/ElementIcon.vue'], resolve),
            },
            {
                path: '/attendancerecord',
                name: 'attendancerecord',
                meta: {
                    title: '考勤记录',
                    keepAlive: false
                },
                component: resolve => require(['~/views/Icon/attendancerecord.vue'], resolve),
            },
            {
                path: '/grattendancerecord',
                name: 'grattendancerecord',
                meta: {
                    title: '个人考勤记录',
                    keepAlive: false
                },
                component: resolve => require(['~/views/Icon/grattendancerecord.vue'], resolve),
            },
            {
                path: '/department',
                name: 'department',
                meta: {
                    title: '部门',
                    keepAlive: false
                },
                component: resolve => require(['~/views/Icon/department.vue'], resolve),

            },
            {
                path: '/administration',
                name: 'administration',
                meta: {
                    title: '管理',
                    keepAlive: false
                },
                component: resolve => require(['~/views/Icon/administration.vue'], resolve),
            },
            {
                path: '/personaldata',
                name: 'personaldata',
                meta: {
                    title: '资料',
                    keepAlive: false
                },
                component: resolve => require(['~/views/Icon/personaldata.vue'], resolve),
            },
            {
                path: '/information',
                name: 'information',
                meta: {
                    title: '用户信息',
                    keepAlive: false
                },
                component: resolve => require(['~/views/Icon/information.vue'], resolve),
            },


            {
                path: '/Highseaspool',
                name: 'Highseaspool',
                meta: {
                    title: '公海池',
                    keepAlive: false
                },
                component: resolve => require(['~/views/Icon/Highseaspool.vue'], resolve),
            },

            {
                path: '/Businesspool',
                name: 'Businesspool',
                meta: {
                    title: '业务池',
                    keepAlive: false
                },
                component: resolve => require(['~/views/Icon/Businesspool.vue'], resolve),
            },
            {
                path: '/Employeeentry',
                name: 'Employeeentry',
                meta: {
                    title: '员工录入',
                    keepAlive: false
                },
                component: resolve => require(['~/views/Icon/Employeeentry.vue'], resolve),
            },
            {
                path: '/Usergroups',
                name: 'Usergroups',
                meta: {
                    title: '用户组',
                    keepAlive: false
                },
                component: resolve => require(['~/views/Icon/Usergroups.vue'], resolve),
            },
            {
                path: '/ChangePassword',
                name: 'ChangePassword',
                meta: {
                    title: '修改密码',
                    keepAlive: false
                },
                component: resolve => require(['~/views/Icon/ChangePassword.vue'], resolve),
            },






















            //个人中心，可能有修改密码，头像修改等路由
            Personal.index,
        ]
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '后台登录',
            keepAlive: false
        },
        components: {
            blank: resolve => require(['~/views/Login/Login.vue'], resolve),
        }
    },

]


// RouteList[0].children.push({
//     path: '/build_code',
//     name: 'BuildCode',
//     meta: {
//         title: '构建代码',
//         keepAlive: true
//     },
//     component: resolve => require(['~/views/DevelopmentTool/Build.vue'], resolve),
// });

export default new Router({ routes: RouteList })