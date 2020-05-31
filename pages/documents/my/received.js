import react, {Component} from 'react';
import Layout from '../../../components/Layout';
import {Card, Button, Icon} from 'semantic-ui-react';
import file from '../../../ethereum/file';
import {Link} from '../../../routes';
import web3 from '../../../ethereum/web3';
import FileInstance from '../../../ethereum/fileinstance';

class ReceivedDocs extends Component {
    static async getInitialProps(props) {
        var myadd = props.query.address;
        var files = await file.methods.getDeployedFiles().call();
        var i;
        var myFilesR=[];
        var myFileNamesR=[];
        var n;
        var o;
        var p;
        for(i=0;i<files.length;i++)
        {
        const fileInstance = FileInstance(files[i]);
        o = await fileInstance.methods.getReceiver().call();
        p = await fileInstance.methods.getOwner().call();
        if((o[0] == myadd)&&(p!=o[0])) {
            n = await fileInstance.methods.getFileName().call();
            myFileNamesR.push(n);
            myFilesR.push(files[i]);
        }
        }
        return {myFilesR,myFileNamesR}; 
    }

    renderItems() {
        const items = this.props.myFilesR.map((address,index) => {
            return{
              color: 'orange',
              description: `File Hash : ${address}`,
              meta: 'File Name',
              extra: (
                <Link route={`/documents/${address}`}>
                  <Button inverted color='purple' icon labelPosition='left'><Icon name='eye'/>View File</Button>
                </Link>),
              header : this.props.myFileNamesR[index],
              fluid: true
            };
          });
      
          return <Card.Group items={items} />;
    }
    render() {
        return (
            <Layout>
              <div>
                <h3>Received Documents</h3>
                {this.renderItems()}
              </div>
            </Layout>
          );
    }
}

export default ReceivedDocs;