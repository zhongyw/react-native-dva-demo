import 'whatwg-fetch';

/** 请求超时毫秒数 */
const REQ_TIMEOUT = 30000;
// let closeToastTimeout;
/** 请求超时白名单 */
const REQ_TIMEOUT_WHITE_LIST = [
  // API.x,
];

/**
 * 判断api是否在超时白名单中
 * @param apiPath
 * @returns {boolean}
 */
function isApiInReqTimeoutWhiteList(apiPath){
  let inWhiteList = false;
  for(let i = 0; i < REQ_TIMEOUT_WHITE_LIST.length; i++){
    if(apiPath.indexOf(REQ_TIMEOUT_WHITE_LIST[i]) > -1){
      inWhiteList = true;
    }
  }
  return inWhiteList;
}
/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if(response && response.json && response.ok === true){
    var result = response.json();
    return result;
  }
  return response;

}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  return response;

}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options) {
  if(!url){
    return;
  }
  if(!options.hideToast){
    // Toast.loading('加载中',50);
  }
  options.hideToast !== undefined && delete options.hideToast
  let opt = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': GLOBAL.token,
      'clientMark':'react-native',
    },
    method: 'post',
    credentials: 'include',
    ...options
  }
  if(opt.body){
    opt.body = JSON.stringify(opt.body)
  }
  let reqTimeout = REQ_TIMEOUT;
  if(isApiInReqTimeoutWhiteList(url)){
    reqTimeout = 6000000;
  }
  return _fetch(fetch_promise(url, opt), reqTimeout);
}

function _fetch(fetch_promise, timeout) {
  var abort_fn = null;
  var abort_promise = new Promise((resolve, reject) => {
    abort_fn = function() {
      reject('abort promise');
    };
  });
  var abortable_promise = Promise.race([
    fetch_promise,
    // abort_promise
  ]);
  setTimeout(function(){
    abort_fn();
  }, timeout);

  return abortable_promise;
}

function fetch_promise(url, opt = {}) {
  return new Promise((resolve, reject) => {
    return fetch(url, opt)
      .then(checkStatus)
      .then(parseJSON)
      .then((json)=>{
        if(!json.status && json.message){
          // Toast.hide();
          // Toast.fail(json.message, 4);
        }else{
          // Toast.hide();
        }
        json.reqBody = opt.body;
        resolve(json);
      })
      .catch((e)=>{

        // clearTimeout(timeoutToast);
        if(e.message == 'Network request failed'){
          // Toast.hide();
          // Toast.fail('对不起，网络不可用，请检查网络连接。', 2);
        }else if (e === 'abort promise'){
          console.log('请求超时');
        }else{
          // Toast.hide();
          // Toast.fail('网络错误', 2);
          throw e;
        }
        reject(e);
      });
  })
}
