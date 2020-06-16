let menu = {};

/**
 * 首页
 * @type {{name: string, path: string, icon: string}}
 */
menu.home = {
    name: '用户信息审核',
    path: '/',
    // icon: 'fa fa-tachometer',
};


/**
 * 字体图标
 * @type {{name: string, icon: string, children: {}}}
 */
menu.font_icon = {
    name: '考勤管理',
    // icon: 'fa fa-th',
    children: {}
};
let icon = menu.font_icon.children;

icon.font_awesome = {
    name: '请假/外出申请',
    path: '/font_awesome',

};
icon.element_icon = {
    name: '审批',
    path: '/element_icon',
};
icon.element_aaa = {
    name: '考勤记录',
    path: '/attendancerecord',
};
icon.element_bbb = {
    name: '个人考勤记录',
    path: '/grattendancerecord',
};

/**
 * 内容管理
 * @type {{name: string, icon: string, children: {}}}
 */
menu.content_manage = {
    name: '部门/职位管理',
    path: '/department',

};


/**
 * 用户管理
 * @type {{name: string, icon: string, children: {}}}
 */
menu.user_manage = {
    name: '员工管理',
    path: '/administration',


};


/**
 * 分类管理
 * @type {{name: string, icon: string, children: {}}}
 */
menu.category_manage = {
    name: '个人质料',

    path: '/personaldata',

};




menu.permission_manage = {
    name: '用户信息',
    path: '/information',

};

menu.a_manage = {
    name: '公海池',

    path: '/Highseaspool',
};

menu.b_manage = {
    name: '业务池',

    path: '/Businesspool',

};

menu.c_manage = {
    name: '员工录入',

    path: '/Employeeentry',

};
menu.d_manage = {
    name: '用户组',

    path: '/Usergroups',
};

menu.e_manage = {
    name: '修改密码',

    path: '/ChangePassword',
};

export default menu;

// if (__DEV__) {

//     menu.development_tools = {
//         name: '开发工具',
//         icon: 'fa fa-wrench',
//         children: {}
//     };

//     let DevelopmentTools = menu.development_tools.children;

//     DevelopmentTools.code = {
//         name: '构建代码',
//         path: '/build_code',
//     };

// }