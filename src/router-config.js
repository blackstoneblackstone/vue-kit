import index from './pages/index.vue'

const decorator = '/'

export default [{
  path: decorator + '/',
  component: index,
  title: '首页'
  },
  {
    path: decorator + '/index',
    component: index,
    title: '首页'
  }
]