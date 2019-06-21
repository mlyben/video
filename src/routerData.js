export default [
    {
        path: '/TongJiFenXi',
        name: 'TongJiFenXi',
        component: () => import('@/components/pages/TongJiFenXi/TongJi.vue'),
        meta: {
            title: '统计分析'
        },
        redirect: '/TongJiFenXi/TongJi',
        children: [
            {
                path: 'TongJi',
                name: 'TongJi',
                meta: {
                    title: '统计分析'
                },
                component: () => import('@/components/pages/TongJiFenXi/TongJi.vue'),
            }
        ]
    },
    {
        path: '/ShiKuangZhuanBo',
        name: 'ShiKuangZhuanBo',
        component: () => import('@/components/pages/ShiKuangZhuanBo/zhuanbo.vue'),
        meta: {
            title: '实况转播'
        },
        redirect: '/ShiKuangZhuanBo/ZhuanBo',
        children: [
            {
                path: 'ZhuanBo',
                name: 'ZhuanBo',
                meta: {
                    title: '实况转播'
                },
                component: () => import('@/components/pages/ShiKuangZhuanBo/zhuanbo.vue'),
            }
        ]
    },
    {
        path: '/AnJianGuanLi',
        name: 'AnJianGuanLi',
        component: () => import('@/components/pages/AnJianGuanLi/ShiPin.vue'),
        meta: {
            title: '案件管理'
        },
        redirect: '/AnJianGuanLi/ShiPin',
        children: [
            {
                path: 'ShiPin',
                name: 'ShiPin',
                meta: {
                    title: '案件视频'
                },
                component: () => import('@/components/pages/AnJianGuanLi/ShiPin.vue'),
            },
            {
                path: 'FenXi',
                name: 'FenXi',
                meta: {
                    title: '预警分析'
                },
                component: () => import('@/components/pages/AnJianGuanLi/FenXi.vue'),
            },
            {
                path: 'ShangChuan',
                name: 'ShangChuan',
                meta: {
                    title: '视频上传'
                },
                component: () => import('@/components/pages/AnJianGuanLi/ShangChuan.vue'),
            },

        ]
    },
    {
        path: '/ZongHeChaXun',
        name: 'ZongHeChaXun',
        component: () => import('@/components/pages/ZongHeChaXun/jiluyi.vue'),
        meta: {
            title: '综合查询'
        },
        redirect: '/ZongHeChaXun/JiLuYi',
        children: [
            {
                path: 'JiLuYi',
                name: 'JiLuYi',
                meta: {
                    title: '记录仪视频'
                },
                component: () => import('@/components/pages/ZongHeChaXun/jiluyi.vue'),
            },
            {
                path: 'BanGongQv',
                name: 'BanGongQv',
                meta: {
                    title: '办公区系统视频'
                },
                component: () => import('@/components/pages/ZongHeChaXun/bangongqv.vue'),
            },
        ]
    },
    {
        path: '/XiTongSheZhi',
        name: 'XiTongSheZhi',
        meta: {
            title: '系统设置'
        },
        redirect: '/XiTongSheZhi/GeRenXinXi',
        component: () => import('@/components/pages/XiTongSheZhi/GeRenXinXi.vue'),
        children: [
            {
                path: 'GeRenXinXi',
                name: 'GeRenXinXi',
                meta: {
                    title: '个人中心'
                },
                component: () => import('@/components/pages/XiTongSheZhi/GeRenXinXi.vue'),
            },
            {
                path: 'YuZhi',
                name: 'YuZhi',
                meta: {
                    title: '阈值设置'
                },
                component: () => import('@/components/pages/XiTongSheZhi/YuZhi.vue'),
            },

        ]
    },
]
