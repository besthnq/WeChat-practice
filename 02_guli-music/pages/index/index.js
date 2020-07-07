// pages/index/index.js

import request from "../../utils/request";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [],
    recommandList: [],
    playList: {},
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 异步获取轮播数据
    const bannerListData = await request("/banner", { type: 2 });
    // 异步获取推荐歌曲数据
    const recommandListData = await request("/personalized", { limit: 10 });

    this.setData({
      bannerList: bannerListData.banners,
      recommandList: recommandListData.result,
    });
    // 异步获取排行榜数据
    const idxs = [0, 1, 2, 3, 4];
    let i = 0;
    let result;
    let Arr = [];
    while (i < idxs.length) {
      result = await request(`/top/list?idx=${i++}`);
      Arr.push({
        name: result.playlist.name,
        tracks: [...result.playlist.tracks.splice(0, 3)],
      });
    }
    this.setData({
      playList: Arr,
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
