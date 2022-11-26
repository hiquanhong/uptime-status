// 配置
window.Config = {

  // 显示标题
  SiteName: 'Kim',
  
  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only
  ApiDomain: 'https://mute-bonus-5f1a.aimate.workers.dev',
  ApiKeys: [
    'ur1501073-8b18f91551aec01224a13594',
  ],

    // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 是否显示检测站点的链接
  ShowLink: true,

  // 导航栏菜单
  Navi: [
    {
      text: 'HomePage',
      url: 'https://aimate.top'
    },
    {
      text: 'cdn',
      url: 'https://cdn.aimate.top'
    },
    
  ],
};
