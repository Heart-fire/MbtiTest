export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/doQuestion/index',
    'pages/result/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'MBTI 性格测试',  //全局配置标题
    navigationBarTextStyle: 'black'
  }
})
