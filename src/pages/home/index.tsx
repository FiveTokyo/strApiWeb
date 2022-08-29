/**
 * @author tokyo
 * @date 2022-08-24 14:41
 * @since 0.1.0
 */

import React, { FC, useEffect, useContext } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import request from '../../api/request';
import classnames from 'classnames';

import style from './style.module.less';
export interface HomeProps {
  [key: string]: any;
}

const Home: FC<HomeProps> = (props) => {

  const navigate = useNavigate();

  return (
    <div className={style.home}>
      home页面
      <span className={style.goJump} onClick={() => navigate('/home/chef')}>
        goChef
      </span>
      <span
        className={style.goJump}
        onClick={() => navigate('/home/dingniRoom')}
      >
        goDiningRoom
      </span>
      <div>{<Outlet />}</div>
    </div>
  );
};

export default Home;
