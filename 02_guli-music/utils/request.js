import config from "./config";
export default (url, data = {}, method = "GET") => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.host + url,
      data,
      method: method,
      success: (res) => {
        console.log(res.data);
        resolve(res.data);
      },
      fail: (err) => {
        console.log("请求错误", err);
        reject(err);
      },
    });
  });
};
