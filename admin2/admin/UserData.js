import React, { Component } from 'react'
import MaterialTable from 'material-table'
import axios from 'axios'
import Modal from 'react-modal'
export default class UserData extends Component {
  constructor(props) {
    super(props);
    this.state = ( 
     {
       users : [],
       modalIsOpen: false,
       iduser: '',
       user_name: '',
       password:'',
       anh_dai_dien:'',
       email:'',
       is_admin:'',
       so_thongbao: 0
     }
    )
  }

  componentDidMount() {
    axios.get('http://localhost:7000/getuser').then(response => {
      this.setState({users:response.data});
      console.log(response.data);
    })
  }

  componentWillUnmount() {
    Modal.setAppElement('body');
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name] : value
    })
  }

  handleDelete = (item) => {
    const temp = item;
    axios.post('http://localhost:7000/deleteUser', temp).then(res => {
      this.setState(prev => ({
        users: prev.users.filter(el => el.iduser !== temp.iduser)
      }));
    })
  }
  openModal =() =>{
    this.setState({
      modalIsOpen: true
    });
  }

  closeModal =() => {
    this.setState({
      modalIsOpen: false
    });
  }


  openModal =(item) => {
    this.setState({
      modalIsOpen: true,
      iduser: item.state.iduser,
      user_name: item.state.user_name,
      password : item.state.password,
      anh_dai_dien: item.state.anh_dai_dien,
      email: item.state.email,
      is_admin: item.state.is_admin,
      so_thongbao : item.state.so_thongbao
    });

  }


  handleEditSubmit = (event) => {
    event.preventDefault();

    const newUpdateUser = {
      iduser: this.state.iduser,
      user_name: this.state.user_name,
      password : this.state.password,
      anh_dai_dien: this.state.anh_dai_dien,
      email: this.state.email,
      is_admin: this.state.is_admin,
      so_thongbao : this.state.so_thongbao
    };

    axios.post('http://localhost:7000/editUser', newUpdateUser).then(res => {
      let key = this.state.iduser;
      
      this.setState(prevState => ({
        users: prevState.users.map(
          elm => elm.iduser === key ? {
            ...elm,
            user_name: this.state.user_name,
            password: this.state.password,
            anh_dai_dien: this.state.anh_dai_dien,
            email: this.state.email,
            is_admin: this.state.is_admin,
            so_thongbao : this.state.so_thongbao
          }: elm
        )
      }))
    }).catch(error => console.log(error));
  }

  render() {
    const columns = [{
      title:'IdUser',field:'iduser'
    },
    {
      title:'user_name', field:'user_name'
    },
    {
      title:'Image',field:'anh_dai_dien'
    },
    {
      title:'Email',field:'email'
    },
    {
      title:'IsAdmin',field:'is_admin'
    }];
        return (
            <div>
                <div class = "main-content">
                    <main> Bảng dữ liệu người dùng

                    <div class="Admin__table">
                <div class="table-wrapper">
                    <MaterialTable class = "table table-striped table-hover" title = "UserDetai" id = "datatable"
                          data = {this.state.users}
                          columns = {columns}
                          actions = {[
                            {
                              icon : 'edit',
                              tooltip: 'Edit',
                              onClick: (event, rowData) => this.openModal(rowData)
                            },
                            {
                              icon: 'delete',
                              tooltip: 'Delte',
                              onClick: (event, rowData ) =>this.handleDelete(rowData)
                            }
                          ]}
                        />
                        
                </div>
            </div>
                    </main>
                </div>
               
            </div>
            
        )
    }
}
