import React, { Component } from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';


class NavbarCustomer extends Component {
  render() {
    return (
      <Menu mode='horizontal'>
        <Menu.Item key='home'>
          <NavLink to='/' exact>
            Home
          </NavLink>
        </Menu.Item>
        <Menu.Item key='car'>
          <NavLink to='/car/view' exact>
            View Cars
          </NavLink>
         
        </Menu.Item>
        <Menu.Item key='car'>
          <NavLink to='/car/hold' exact>
            Put Car on hold
          </NavLink>
        
        
        </Menu.Item>
        <Menu.Item key='car'>
          <NavLink to='/car/reserve' exact>
            Reserve Car for test drive
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