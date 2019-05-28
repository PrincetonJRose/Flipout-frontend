import React, {Component} from 'react';
import { Icon, Menu, Grid, Modal, Button, Header, Image, Form } from 'semantic-ui-react'

export default class Nav extends Component {
  state = {}
  

  handleChange = (e, { value, cardBack }) => this.setState({ value, cardBack })

  render() {
    const { value, cardBack } = this.state
    return (
        <Grid.Column centered>
        <Menu compact icon='labeled'>
          <Menu.Item name='flag checkered'>
            <Icon name='flag checkered' />
            <br></br>
            <Modal id='newGameModal' trigger={<Button basic color='green'>New Game</Button>} centered={false} closeIcon>
              <Modal.Header>Create A New Game</Modal.Header>
              <Modal.Content image>
                <Image wrapped size='medium' src='https://scontent-sin6-2.cdninstagram.com/vp/791c65b62980199a42228a557f194242/5D19610D/t51.2885-15/e35/46099340_103715900616147_6366816526032884159_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com' />
                <Modal.Description>
                  <Header>Select A Board Size</Header>
                  <Form onSubmit={() => this.props.newGame(this.state.value, this.state.cardBack)}>
                    <Form.Group inline>
                      <label>Size:</label>
                      <Form.Radio
                        label='4x4'
                        value='sm'
                        checked={value === 'sm'}
                        onChange={this.handleChange}
                      />
                      <Form.Radio
                        label='4x5'
                        value='md'
                        checked={value === 'md'}
                        onChange={this.handleChange}
                      />
                      <Form.Radio
                        label='4x6'
                        value='lg'
                        checked={value === 'lg'}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    {/* <Form.Group inline>
                      <label>Card Background:</label>
                      {this.props.cardBacks.map( cardPic => {
                        return (
                          <Form.Radio
                            label={cardPic}
                            value={cardPic}
                            checked={value === cardPic
                            onChange={this.handleChange}
                          />
                        )
                      })}
                    </Form.Group> */}
                    <Form.Button type='submit'>Create Game!</Form.Button>
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
