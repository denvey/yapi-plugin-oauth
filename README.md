# yapi-plugin-oauth 
支持oauth2.0

第三方插件，在生成的配置文件中，添加如下配置即可：  

```
"plugins": [
    {
         "name": "oauth",
         "options": {
            "type": "sso",
            "loginUrl": "https://sso.xxxx.com/oauth2.0/profile?access_token=",
            "accessTokenAPI": "https://sso.xxxx.com/oauth2.0/accessToken?grant_type=code",
            "emailPostfix": "",
            "loginText": "登录",
            "appId": {
               "key": "client_id",
               "value": "xxxx"
            },
            "secret": {
               "key": "client_secret",
               "value": "xxxxx"
            },
            "accessToken": {
               "key": "access_token"
            },
            "redirectUri": {
               "key": "redirect_uri"
            },
            "accessCode": {
               "key": "code"
            },
            "AUTH_SERVER": "https://sso.xxxx.com/oauth2.0/authorize?"
         }
      }
  ]
```   
这里面的配置项含义如下：  

- `type` 登陆类型，目前只支持sso登陆  
- `loginUrl` 服务端在获取token之后，可以通过这个url来获取用户的详细信息
- `emailPostfix` 登陆邮箱后缀
- `loginText` 按钮显示文字 默认显示 'sso 登录'
- `appId` APPID key为自定义字段名，value为字段值
- `secret` secret密钥 key为自定义字段名，value为字段值
- `accessToken` accessToken 字段名
- `redirectUri` redirectUri 字段名
- `accessTokenAPI` 获取access_token API
- `accessCode` code 字段名
- `AUTH_SERVER` 点击登陆按钮式需要跳转的url，用户通过该页面登录以后会向服务器发送一个token

