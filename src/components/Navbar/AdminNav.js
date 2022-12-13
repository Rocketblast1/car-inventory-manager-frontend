import React, { Component } from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';


class NavbarAdmin extends Component {
  render() {
    return (
      <Menu mode='horizontal'>
        <Menu.Item key='home'>
          <NavLink to='/' exact>
            Home
          </NavLink>
        </Menu.Item>
        <Menu.Item key='car'>
          <NavLink to='/car/add' exact>
            Add Car
          </NavLink>
        </Menu.Item>
        <Menu.Item key='profile'>
          <NavLink to='/profile' exact>
            Empolyees profile
          </NavLink>
        </Menu.Item>
        <Menu.Item key='car'>
          <NavLink to='/car/delete' exact>
            Delete Car
          </NavLink>
        </Menu.Item>
        <Menu.Item key='signout'>
          <Signout/>
        </Menu.Item>
      </Menu>
    );
  }
}

export default NavbarAdmin;