import react, {Component} from 'react';
import Layout from '../../../components/Layout';
import {Card, Button, Icon} from 'semantic-ui-react';
import file from '../../../ethereum/file';
import {Link} from '../../../routes';
import web3 from '../../../ethereum/web3';
import FileInstance from '../../../ethereum/fileinstance';

class MyCreatedDocs extends Component {
    static async getInitialProps(props) {
        var myadd = props.query.address;
        var files = await file.methods.getDeployedFiles().call();
        var i;
        var myFiles=[];
        var myFileNames=[];
        var n;
        var o;
        for(i=0;i<files.length;i++)
        {
        const fileInstance = FileInstance(files[i]);
        o = await fileInstance.methods.getOwner().call();
        if(o == myadd) {
            n = await fileInstance.methods.getFileName().call();
            myFileNames.push(n);
            myFiles.push(files[i]);
        }
        }
        return {myFiles,myFileNames}; 
    }

    renderItems() {
        const items = this.props.myFiles.map((address,index) => {
            return{
              color: 'green',
              description: `File Hash : ${address}`,
              meta: 'File Name',
              extra: (
                <Link route={`/documents/${address}`}>
                  <Button inverted color='purple' icon labelPosition='left'><Icon name='eye'/>View File</Button>
                </Link>),
              header : this.props.myFileNames[index],
              fluid: true
            };
          });
      
          return <Card.Group items={items} />;
    }
    render() {
        return (
            <Layout>
              <div>
                <h3>My Documents</h3>
                {this.renderItems()}
              </div>
            </Layout>
          );
    }
}

export default MyCreatedDocs;