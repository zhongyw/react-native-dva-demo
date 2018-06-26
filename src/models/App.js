import { request, API } from '../utils'
export default {
  namespace: 'app',
  state: {
    name: 'z', // 名字

  },
  reducers: {
    /**
     * 处理同步的action
     */
    setUserInfo(state, { payload: data }) {
      return { ...state, ...data };
    },

  },
  effects: {
    /**
     * 处理异步的action
     * 主要使用redux-saga
     * 语法就是 es6 generator
     */
    *login({ payload }, { call, put, select }) {
      /**
       * call 调用自己定义的业务方法
       * put 发起action
       * select 选择某个namespace的state
       */
      try{
        const result = yield call(request, API.login, {
          body: {
            ...payload.data
          }

        });
        if(result){
          yield put({
            type: 'setUserInfo',
            payload: result.data,
          })
          payload.callback(result)
        }
      }catch(e){
        console.log(e);
      }


    },


  },
}
