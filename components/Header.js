import react,{Component} from 'react';
import {Menu, Button,Icon, Label} from 'semantic-ui-react';
import {Link,Router} from '../routes';
import web3 from '../ethereum/web3';

class HeaderFile extends Component{
  onClickMyDocs = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    const address = accounts[0];
    Router.pushRoute(`/documents/my/${address}`);
  }

  onClickMyReceivedDocs = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    const address = accounts[0];
    Router.pushRoute(`/documents/my/received/${address}`);
  }

  onClickUsers = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    const address = accounts[0];
    Router.pushRoute(`/users/allUsers/${address}`);
  }
  render() {
    return (
      <Menu>
        <Link route='/'>
          <Label color='orange' size='huge'><Icon name='file alternate outline'/>PaperDApp<Label.Detail><Icon name='paper plane outline'/></Label.Detail></Label>
        </Link>
        <Menu.Menu position='right'>
        <Button animated='fade' inverted color='purple' className="item" onClick={this.onClickUsers}>
          <Button.Content visible>All Users</Button.Content>
          <Button.Content hidden>
            <Icon name='users' />
          </Button.Content>
        </Button>

        <Button animated='fade' inverted color='red' className="item" onClick={this.onClickMyDocs}>
          <Button.Content visible>My Created Docs</Button.Content>
          <Button.Content hidden>
            <Icon name='file' />
          </Button.Content>
        </Button>

        <Button animated='fade' inverted color='violet' className="item" onClick={this.onClickMyReceivedDocs}>
          <Button.Content visible>Received Docs</Button.Content>
          <Button.Content hidden>
            <Icon name='file outline' />
          </Button.Content>
        </Button>

        <Link route='/'>
          <Button animated='fade' inverted color='green' className="item" >
            <Button.Content visible>Documents</Button.Content>
            <Button.Content hidden>
              <Icon name='file alternate' />
            </Button.Content>
          </Button>
        </Link>

        <Link route='/documents/new'>
          <Button content="Add Document" icon="add circle" primary />
        </Link>

        </Menu.Menu>
      </Menu>
    );
  }
}

export default HeaderFile;
