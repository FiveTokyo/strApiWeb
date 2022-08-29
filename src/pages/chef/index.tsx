/**
 * @author tokyo
 * @date 2022-08-24 15:43
 * @since 0.1.0
 */

import React, { FC, useState, useEffect, useMemo } from 'react';
// import classnames from 'classnames';
import Table, { ColumnsType } from 'antd/lib/table';
import { Button, message, Popconfirm, Space, Tooltip } from 'antd';
import { deleteChefOne, getChefsList } from 'src/api/strApi/chefAction';
import Search from 'antd/lib/input/Search';
import ChefAction from './components/chefAction';
import { tableDataActionType } from 'src/common/types';
import style from './style.module.less';
import { getDingniRoomList } from 'src/api/strApi/dingniRoom';
import { useNavigate } from 'react-router-dom';

export interface ChefProps {
  [key: string]: any;
}

const Chef: FC<ChefProps> = (props) => {
  const [chefsListData, setChefsListData] = useState<StrApi.ResChefsListItem[]>(
    [],
  );

  const [dinniRoomListData, setDinniRoomListData] = useState<
    StrApi.ResDingniRoomListItem[]
  >([]);

  // const a = MemoryRouter({});
  console.log('a', );

  const [isShow, setIsShow] = useState<boolean>(false);

  const [filter, setFilter] = useState<any>({});

  const [loading, setLoading] = useState<boolean>(true);

  const [type, setType] = useState<tableDataActionType>(
    tableDataActionType.add,
  );

  const [actionData, setActionData] = useState<StrApi.ResChefsListItem>({});

  const navigate = useNavigate();

  const columns: ColumnsType<StrApi.ResChefsListItem> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'createdAt',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'dingniRoom',
      key: 'dingniRoom',
      dataIndex: 'dingniRoom',
      render: (_, { dingni_rooms }) => (
        <>
          {dingni_rooms?.data?.map((val, index) => {
            return (
              <span key={val.id}>
                {val?.attributes?.name}
                {index !== dingni_rooms?.data.length - 1 && '、'}
              </span>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => {
        const confirm = async () => {
          setLoading(true);
          try {
            await deleteChefOne({ id: record.id as number });
            message.success(`${record.name}删除成功`);
            await initData();
          } catch (error) {
            console.log('error:', error);
          }
          setLoading(false);
        };
        return (
          <Space size="middle">
            <Tooltip title="更改">
              <a
                href="#"
                onClick={() => {
                  setActionData(record);
                  setIsShow(true);
                  setType(tableDataActionType.edit);
                }}
              >
                edit
              </a>
            </Tooltip>

            <Popconfirm
              title="Are you sure to delete this task?"
              onConfirm={confirm}
              okText="Yes"
              cancelText="No"
            >
              <Tooltip title="删除">
                <a href="#">Delete</a>
              </Tooltip>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  useEffect(() => {
    (async () => {
      await initData();
    })();
  }, [filter]);

  const initData = async () => {
    await getChefsLists();
    await getDingniRoomLists();
  };

  const getChefsLists = async () => {
    setLoading(true);

    try {
      const chefsList: StrApi.ResChefsList = await getChefsList({
        filters: filter,
        populate: '*',
      });
      setChefsListData(
        chefsList.data.map((val) => {
          return { ...val.attributes, id: val.id };
        }) as StrApi.ResChefsListItem[],
      );
    } catch (error) {
      console.log('error:', error);
    }

    setLoading(false);
  };

  const onSearch = (value: string) => {
    navigate(-1);
    setFilter({ name: { $contains: value } });
  };

  const getDingniRoomLists = async () => {
    setLoading(true);
    try {
      const res = await getDingniRoomList({
        populate: '*',
      });
      setDinniRoomListData(
        res.data.map((val) => {
          return { ...val.attributes, id: val.id };
        }) as StrApi.ResDingniRoomListItem[],
      );
    } catch (error) {
      console.log('error:', error);
    }
    setLoading(false);
  };

  return (
    <div>
      <div className={style.searchAdd}>
        <div className={style.search}>
          <Search
            placeholder="input search name"
            onSearch={onSearch}
            enterButton
            width={400}
          />
        </div>

        <Button
          type="primary"
          size="large"
          key={'chef'}
          onClick={() => {
            setIsShow(true);
            setActionData({});
            setType(tableDataActionType.add);
          }}
        >
          +Add
        </Button>
      </div>

      <Table
        columns={columns}
        loading={loading}
        rowKey="id"
        dataSource={chefsListData}
      />

      <ChefAction
        type={type}
        isShow={isShow}
        data={actionData}
        dingniRoomList={dinniRoomListData}
        onClose={async () => {
          await getChefsLists();
          setIsShow(false);
        }}
      ></ChefAction>
    </div>
  );
};

export default Chef;
