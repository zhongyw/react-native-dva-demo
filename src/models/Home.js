
export default {
    namespace: 'home',
    state: {
        name: 'zyw', // 名字
    },
    reducers: {
        /**
         * 处理同步的action
         */
        setHomeName(state, { payload: { name } }) {
            return { ...state, name };
        }
    },
    effects: {
        /**
         * 处理异步的action
         * 主要使用redux-saga
         * 语法就是 es6 generator
         */
            *fetchHomeName({ payload }, { call, put, select }) {
            /**
             * call 调用自己定义的业务方法
             * put 发起action
             * select 选择某个namespace的state
             */
            // const name = yield call(request);
            // console.log(name);
            // yield put({
            //   type: SET_HOME_NAME,
            //   payload: { name },
            // })
        }
    },
}
