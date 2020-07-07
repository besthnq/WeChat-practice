// pages/login/login.js
import request from "../../utils/request";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    phone: "",
    password: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
  handleInput(event) {
    // console.log(event);
    // let key = event.currentTarget.id;
    let key = event.currentTarget.dataset.xxx;
    this.setData({
      [key]: event.detail.value,
    });
  },
  // 用户登录
  async login() {
    const { phone, password } = this.data;
    if (!phone || !password) {
      this.showToast("用户名或密码错误");
    } else {
      const result = await request(
        `/login/cellphone?phone=${phone}&password=${password}`
      );
      if (result.code === 400) {
        this.showToast("用户名错误");
      } else if (result.code === 502) {
        this.showToast("密码错误");
      } else {
        this.showToast("登录成功~");
        wx.setStorageSync("userInfo", JSON.stringify(result.profile));
        wx.switchTab({
          url: "/pages/personal/personal",
        });
      }
    }
  },
  // 封装提示消息函数
  showToast(title = "", icon = "none") {
    wx.showToast({
      title,
      icon,
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
