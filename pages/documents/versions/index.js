import react,{ Component } from 'react';
import Layout from '../../../components/Layout';
import ipfs from '../../../ipfs/ipfs';
import web3 from '../../../ethereum/web3';
import FileInstance from '../../../ethereum/fileinstance';
import { Card, Button, Icon } from 'semantic-ui-react';


class VersionIndex extends Component{
  static async getInitialProps(props){
    const fileinstance = FileInstance(props.query.address);
    const versions = await fileinstance.methods.getVersion().call();
    const editer = await fileinstance.methods.getVersionEditer().call();
    const editerName = await fileinstance.methods.getVersionEditerName().call();

    return { versions,editer,editerName };
  }

  renderItems(){
    const items = this.props.versions.map((version,index)=>{
      return {
        color: 'pink',
        header: `version:${index}`,
        meta : `editor address:${this.props.editer[index]}`,
        description:`edited by:${this.props.editerName[index]}` ,
        style :{ overflowWrap: 'break-word' },
        extra: (
          <Button inverted color='blue' icon labelPosition='left' href={`https://ipfs.infura.io/ipfs/${version}`}>
            <Icon name='eye'/>View content
          </Button>
        )
      }
    });

    return <Card.Group items={items} />
  }

  render(){
    return(
      <Layout>
        <h3>Document History</h3>
        {this.renderItems()}

      </Layout>
    );
  }
}

export default VersionIndex;
