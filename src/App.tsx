import React, {
  createContext,
  useEffect,
  useLayoutEffect,
  useReducer,
} from 'react';
import routes from './router';
import { removeAllPendingRequestsRecord } from 'src/api/request';
import {
  useRoutes,
  useNavigate,
  useLocation,
  useNavigationType,
} from 'react-router-dom';
import { pushHistoryUrl, historyUrls } from './utils/getViewHistory';
import { uerLogin } from './api/strApi/userAction';
import { setLockr } from './utils/localStr';
import { useRequest } from '../request/index';
import './App.css';

export let userInfoContext: any = {};

function App(_props: any) {
  const location = useLocation();
  const navigationType = useNavigationType();
  const [request, token, tokenValidity] = useRequest();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    (async () => {
      try {
        
        // const test = await request('/api/auth/local', {
        //   method: 'POST',
        //   data: {
        //     identifier: 'wudongjing',
        //     password: 'f#yxJiT56ZuFzC3',
        //   },
        // });
        // console.log('test:',  token, tokenValidity)
        // const res: StrApi.ResLogin = await uerLogin({
        //   identifier: 'wudongjing',
        //   password: 'f#yxJiT56ZuFzC3',
        // });
        // setLockr('jwt', res.jwt);
      } catch (error) {}
    })();
  }, [tokenValidity]);
  // useEffect(effectFunc, []) 类似于 componentDidMount
  useLayoutEffect(() => {
    removeAllPendingRequestsRecord();
    pushHistoryUrl(location, navigationType);
  }, [location.pathname]);

  const element = useRoutes(routes);

  return <div>{element}</div>;
}

export default App;
