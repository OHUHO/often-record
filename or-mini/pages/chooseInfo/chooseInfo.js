// pages/chooseInfo/chooseInfo.js
const app = getApp()
const defaultAvatarUrl = '/assets/default-portrait.png'
var COS = require('../../utils/cos-wx-sdk-v5.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: defaultAvatarUrl,
    portrait:'',
    nickname:''
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail 
    this.setData({
      avatarUrl,
    })
    console.log(e)
    this.uploadImage()
  },

  handleInput(e){
    this.setData({
      nickname: e.detail.value
    })
  },
  uploadImage(){

    var cos = new COS({
      SimpleUploadMethod: 'putObject', // 强烈建议，高级上传、批量上传内部对小文件做简单上传时使用 putObject,SDK 版本至少需要v1.3.0
    //   // 必选参数
    //   getAuthorization: function (options, callback) {
    //       // 服务端 JS 和 PHP 示例：https://github.com/tencentyun/cos-js-sdk-v5/blob/master/server/
    //       // 服务端其他语言参考 COS STS SDK ：https://github.com/tencentyun/qcloud-cos-sts-sdk
    //       // STS 详细文档指引看：https://cloud.tencent.com/document/product/436/14048
    //       wx.request({
    //           url: app.serverUrl + "",
    //           data: {
    //               // 可从 options 取需要的参数
    //           },
    //           success: function (result) {
    //               var data = result.data;
    //               var credentials = data && data.credentials;
    //               if (!data || !credentials) return console.error('credentials invalid');
    //               callback({
    //                   TmpSecretId: credentials.tmpSecretId,
    //                   TmpSecretKey: credentials.tmpSecretKey,
    //                   // v1.2.0之前版本的 SDK 使用 XCosSecurityToken 而不是 SecurityToken
    //                   SecurityToken: credentials.sessionToken,
    //                   // 建议返回服务器时间作为签名的开始时间，避免用户浏览器本地时间偏差过大导致签名错误
    //                   StartTime: data.startTime, // 时间戳，单位秒，如：1580000000
    //                   ExpiredTime: data.expiredTime, // 时间戳，单位秒，如：1580000900
    //               });
    //           }
    //       });
    //   }
      

      // 不安全
      SecretId: 'AKIDqWp2B7rQnzzqY4OXUHtJbgZGl4B6pLgo',
      SecretKey: 'DG6jAQULzS6aqsfMuJWYO4av41oNipjR',
    });

    // 生成唯一的标识，用作下面的 图片名称
    var uuid = new Date().getTime() + Math.random().toString(36).substr(2);
    var that = this
    cos.uploadFile({
      Bucket: 'often-record-1304958359', /* 填写自己的 bucket，必须字段 */
      Region: 'ap-chengdu',     /* 存储桶所在地域，必须字段 */
      Key: "/user-avatar/" + uuid + '.png',              /* 存储在桶里的对象键（例如:1.jpg，a/b/test.txt，图片.jpg）支持中文，必须字段 */
      FilePath: this.data.avatarUrl, /* 上传文件路径，必须字段 */
      SliceSize: 1024 * 1024 * 5,     /* 触发分块上传的阈值，超过5MB使用分块上传，小于5MB使用简单上传。可自行设置，非必须 */
      onProgress: function(progressData) {
          console.log(JSON.stringify(progressData));
      }
    }, function(err, data) {
      if (err) {
        console.log('上传失败', err);
      } else {
        console.log('上传成功');
        that.setData({
          portrait: "https://" + data.Location
        })
        // console.log(that.data.portrait)
      }
    })
  },
  
  // 登录
  save(e) {
    if(this.data.portrait.length != 0 && this.data.nickname.length !== 0){
      var that = this
      // 登录并将数据传递给服务器
      wx.login({
        success (res) {
          // console.log(res.code)
          if (res.code) {
            //发起网络请求通过code 获取 openid

            wx.request({
              url: app.serverUrl+"/login",
              data:{
                code: res.code,
                nickname: that.data.nickname,
                portrait: that.data.portrait
              },
              header: {'content-type': 'application/x-www-form-urlencoded'},
              method:'POST',
              success(res){
                var userInfo = res.data.data
                // console.log(userinfo)
                wx.setStorageSync('userInfo', userInfo)
                wx.navigateBack({
                  url: '1',
                })
              }
            })
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      })
    }
  },
  // 暂不授权
  cancel() {
    // app.common.route.navigateBack(1)
    wx.navigateBack({
      delta: 1,
    })
  },
  
})