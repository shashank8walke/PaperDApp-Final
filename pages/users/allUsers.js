import react,{Component} from 'react';
import {Card, Button, Icon, Form, Message, Input} from 'semantic-ui-react';
import file from '../../ethereum/file';
import {Link,Router} from '../../routes';
import web3 from '../../ethereum/web3';
import Layout from '../../components/Layout'

class AllUsers extends Component {
    static async getInitialProps(props) {
        const myadd = props.query.address;
        const users = await file.methods.getUserAddress().call();
        const userNames = await file.methods.getUserNames().call();
        const userEmails = await file.methods.getUserEmails().call();
        return {myadd,users,userNames,userEmails};
    }

    renderItems() {
        const items = this.props.users.map((address,index) => {
            if(address==this.props.myadd) {
                return {
                    color : 'green',
                    header : this.props.userNames[index],
                    meta : 'Name',
                    description: this.props.userEmails[index],
                    extra : <Button animated='fade' inverted color='green' className='item'>
                        <Button.Content visible>It's Me! </Button.Content>
                        <Button.Content hidden><Icon name='user circle'/></Button.Content>
                    </Button>,
                    fluid : true
                };
            }
            else {
                return {
                    color : 'red',
                    header : this.props.userNames[index],
                    meta : 'Name',
                    description: this.props.userEmails[index],
                    extra : `Address : ${address}`,
                    fluid : true
                };
            }
        });

        return <Card.Group items={items} />;
    }
    render() {
        return (
            <Layout>
              <div>
                <h3>All Users</h3>
                {this.renderItems()}
              </div>
            </Layout>
          );
    }
}

export default AllUsers;