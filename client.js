import React, { Component } from 'react'

const qualifyURL = (url, encode) => {
  url = url || '';
  var ret = location.protocol + '//' + location.host + (url.substr(0, 1) === '/' ? '' : location.pathname.match(/.*\//)) + url;
  if (encode) {
    ret = encodeURIComponent(ret);
  }
  return ret;
}

module.exports = function (options) {
  const handleLogin = () => {
    const loginURI = '/api/user/login_by_token';
    const { AUTH_SERVER, appId, secret, redirectUri } = options;
    let ret = qualifyURL(loginURI, true);
    let redirectURL = '';
    if (AUTH_SERVER.indexOf("?") !== -1) {
        redirectURL = `${AUTH_SERVER}&${appId.key}=${appId.value}&${redirectUri.key}=${ret}`;
    } else {
        redirectURL = `${AUTH_SERVER}?${appId.key}=${appId.value}&${redirectUri.key}=${ret}`
    }
    location.href = redirectURL;
  }

  const SsoComponent = () => (
    <button onClick={handleLogin} className="btn-home btn-home-normal" >{options.loginText || 'sso登录'}</button>
  )

  this.bindHook('third_login', SsoComponent);
};










