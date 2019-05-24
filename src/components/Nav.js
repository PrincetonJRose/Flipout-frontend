import React, {Component} from 'react';
import { Icon, Menu } from 'semantic-ui-react'

class Nav extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu icon='labeled'>
        <Menu.Item name='flag checkered' active={activeItem === 'flag checkered'} onClick={this.handleItemClick}>
          <Icon name='flag checkered' />
          New Game
        </Menu.Item>

        <Menu.Item
          name='trophy'
          active={activeItem === 'trophy'}
          onClick={this.handleItemClick}
        >
          <Icon name='trophy' />
          High Scores
        </Menu.Item>

        <Menu.Item
          name='clipboard'
          active={activeItem === 'clipboard'}
          onClick={this.handleItemClick}
        >
          <Icon name='clipboard' />
          Settings
        </Menu.Item>

        <Menu.Item
          name='power off'
          active={activeItem === 'power off'}
          onClick={this.handleItemClick}
        >
          <Icon name='power off' />
          Logout
        </Menu.Item>
      </Menu>
    )
  }
}

export default Nav
