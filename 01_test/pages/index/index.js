// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('---- index onLoad() ----');
    wx.getUserInfo({
      success:(res)=>{
        this.setData({
          userInfo:res.userInfo
        })
      },
      fail:()=>{
        console.log('获取个人信息失败')
      }
    })
  },

  // 跳转到log页面
  goLog(){
    wx.navigateTo({
      url: '/pages/log/log',
    })
  },
  // 获取个人信息
  handleGetUserInfo(res){
    this.setData({
      userInfo:res.detail.userInfo
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('------  index onReady() ----------')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('------  index onShow() ----------')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('--- onHide 页面隐藏----');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('--- onUnload 页面卸载----');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})