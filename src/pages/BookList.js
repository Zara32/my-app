/**
 * 图书列表页面
 */
import React from 'react';
// 引入 antd 组件
import { Table, Button, Popconfirm } from 'antd';
// 引入 prop-types
//import PropTypes from 'prop-types';
import http from '../server'

class BookList extends React.Component {
  // 构造器
  constructor(props) {
    super(props);
    // 定义初始化状态
    this.state = {
      bookList: []
    };
  }

  async workorder(){
    //请求数据
    let data = await http.get('http://localhost:3000/api/workorder')
    console.log("========="+data.data.wo_info)
    return  data.data.wo_info
  }
  /**
   * 生命周期
   * componentWillMount
   * 组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次
   */
  componentWillMount() {
    let a = this.workorder();
    a.then((v)=>{
      this.setState({
        bookList: v
      });
    })
    
  }

  /**
   * 编辑
   */
  handleEdit(book) {
    // 跳转编辑页面
    //this.context.router.push('/book/edit/' + book.id);
  }

  /**
   * 删除
   */
  handleDel(book) {
    // 执行删除数据操作
    // del('http://localhost:8000/book/' + book.id, {
    // })
    //   .then(res => {
    //     /**
    //      * 设置状态
    //      * array.filter
    //      * 把Array的某些元素过滤掉，然后返回剩下的元素
    //      */
    //     this.setState({
    //       bookList: this.state.bookList.filter(item => item.id !== book.id)
    //     });
    //     message.success('删除用户成功');
    //   })
    //   .catch(err => {
    //     console.error(err);
    //     message.error('删除用户失败');
    //   });
  }

  render() {
    // 定义变量
    const { bookList } = this.state;
    // antd的Table组件使用一个columns数组来配置表格的列
    const columns = [
      {
        title: '图书ID',
        dataIndex: 'v_id'
      },
      {
        title: '书名',
        dataIndex: 'domain_name'
      },
      // {
      //   title: '价格',
      //   dataIndex: 'price',
      //   render: (text, record) => <span>¥{record.price / 100}</span>
      // },
      {
        title: '所有者ID',
        dataIndex: 'operator'
      },
      {
        title: '操作',
        render: (text, record) => (
          <Button.Group type="ghost">
            <Button size="small" onClick={() => this.handleEdit(record)}>编辑</Button>
            <Popconfirm
              title="确定要删除吗?"
              okText="确定"
              cancelText="取消"
              onConfirm={() => this.handleDel(record)}>
              <Button size="small">删除</Button>
            </Popconfirm>
          </Button.Group>
        )
      }
    ];

    return (
      <Table columns={columns} dataSource={bookList} rowKey={row => row.v_id+''} />
    );
  }
}

/**
 * 任何使用this.context.xxx的地方，必须在组件的contextTypes里定义对应的PropTypes
 */
// BookList.contextTypes = {
//   router: PropTypes.object.isRequired
// };

export default BookList;