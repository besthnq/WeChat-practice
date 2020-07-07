// pages/personal/personal.js
import request from "../../utils/request";
let startY = 0;
let moveY = 0;
let distance = 0;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    coverTransform: "",
    coverTransition: "",
    userInfo: {},
    recentList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    const userInfo = JSON.parse(wx.getStorageSync("userInfo"));
    if (userInfo) {
      console.log(userInfo);
      this.setData({
        userInfo,
      });
      const recentListData = await request(
        `/user/record?uid=${this.data.userInfo.userId}&type=1`
      );

      this.setData({
        recentList: recentListData.weekData,
      });
    }
  },

  handleTouchStart(event) {
    this.setData({
      coverTransition: "",
    });
    startY = event.touches[0].clientY;
    // console.log("startY", startY);
  },
  handleTouchMove(event) {
    moveY = event.touches[0].clientY;
    distance = moveY - startY;
    // console.log("moveY", moveY);
    // console.log("distance", distance);
    if (distance <= 0) {
      return;
    }
    if (distance >= 80) {
      distance = 80;
    }
    this.setData({
      coverTransform: `translateY(${distance}rpx)`,
    });
  },
  handleTouchEnd() {
    this.setData({
      coverTransform: `translateY(0rpx)`,
      coverTransition: "transform 0.5s linear",
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
