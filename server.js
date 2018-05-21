const request = require('request');

module.exports = function (options) {
    const {
        loginUrl,
        emailPostfix,
        appId,
        secret,
        accessCode,
        accessToken,
        accessTokenAPI
    } = options;

    this.bindHook('third_login', (ctx) => {
        let code = ctx.request.body[accessCode.key] || ctx.request.query[accessCode.key];
        return new Promise((resolve, reject) => {
            request(`${accessTokenAPI}&${appId.key}=${appId.value}&${secret.key}=${secret.value}&${accessCode.key}=${code}`, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    let authInfo = JSON.parse(body);
                    request(`${loginUrl}${authInfo[accessToken.key]}`, function (error, response, body) {
                        if (!error && response.statusCode == 200) {
                            let result = JSON.parse(body);
                            if (result && result.code === 0) {
                                let ret = {}
                                result.attributes.map((item) => {
                                    if (item.email) {
                                        ret.email = item.email;
                                    }
                                    if (item.name) {
                                        ret.username = item.name;
                                    }
                                })
                                resolve(ret);
                            } else {
                                reject(result);
                            }
                        }
                        reject(error)
                    });
                } else {
                    reject(error)
                }
            });
        });
    })
}