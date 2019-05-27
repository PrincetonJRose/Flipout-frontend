import React, {Component} from 'react';
import { Icon, Menu, Grid, Modal, Button, Header, Image, Form } from 'semantic-ui-react'

class Nav extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })
  render() {
    const { value } = this.state
    return (
        <Grid.Column centered>
        <Menu compact icon='labeled'>
          <Menu.Item name='flag checkered'>
            <Icon name='flag checkered' />
            <br></br>
            <Modal trigger={<Button basic color='green'>New Game</Button>} centered={false}>
              <Modal.Header>Create A New Game</Modal.Header>
              <Modal.Content image>
                <Image wrapped size='medium' src='https://scontent-sin6-2.cdninstagram.com/vp/791c65b62980199a42228a557f194242/5D19610D/t51.2885-15/e35/46099340_103715900616147_6366816526032884159_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com' />
                <Modal.Description>
                  <Header>Select A Board Size</Header>
                  <Form>
                    <Form.Group inline>
                     <label>Size</label>
                     <Form.Radio
                       label='4x4'
                       value='sm'
                       checked={value === 'sm'}
                       onChange={this.handleChange}
                     />
                     <Form.Radio
                       label='5x4'
                       value='md'
                       checked={value === 'md'}
                       onChange={this.handleChange}
                     />
                     <Form.Radio
                       label='6x4'
                       value='lg'
                       checked={value === 'lg'}
                       onChange={this.handleChange}
                     />
                   </Form.Group>
                    <Form.Button>Create Game!</Form.Button>
                  </Form>
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </Menu.Item>

          <Menu.Item>
            <Icon name='trophy' />
            High Scores
          </Menu.Item>

          <Menu.Item>
            <Icon name='power off' />
            Logout
          </Menu.Item>
        </Menu>
        </Grid.Column>
    )
  }
}

export default Nav
