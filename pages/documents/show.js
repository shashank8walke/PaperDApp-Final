import react,{ Component } from 'react';
import Layout from '../../components/Layout';
import FileInstance from '../../ethereum/fileinstance';
import {Card, Reveal,Button,Container, Grid, Icon, Label, Form, Message, Input, Segment, Divider} from 'semantic-ui-react';
import UploadForm from '../../components/UploadForm';
import { saveAs } from 'file-saver';
import ipfs from '../../ipfs/ipfs';
import { Link } from '../../routes';
import web3 from '../../ethereum/web3'

class DocumentShow extends Component{
  state = {
    visible : false,
    account : '',
    owner: '',
    receiver: '',
    add:'',
    nameR:'',
    loading: false,
    errorMessage:''
  };
  static async getInitialProps(props){
    const fileInstance = FileInstance(props.query.address);

    const summary = await fileInstance.methods.getSummary().call();
    const receiver = await fileInstance.methods.getReceiver().call();
    const address = props.query.address;
    const fileName = summary[0];
    const fileHash = summary[1];
    const fileOwnerName = summary[3];
    const date = summary[2];
    const fileOwner = summary[4];
    return {
      address,
      fileName,
      fileHash,
      date,
      fileOwnerName,
      fileURL: "https://ipfs.infura.io/ipfs/"+summary[1],
      fileOwner,
      receiver
    };
  }
  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    this.setState({owner:this.props.fileOwner,receiver:this.props.receiver[0]});
    this.setState({account:accounts[0]});
    if((this.state.owner==this.state.account)||(this.state.receiver==this.state.account)) {
      this.setState({visible:true});
    }
  }

  onDownload = async () =>{
    event.preventDefault();
    /*const chunks = [];
    for await (const chunk of ipfs.cat(ipfsHash)) {
      chunks.push(chunk)
    }
    console.log(Buffer.concat(chunks).toString())*/
    const fileBuf = await ipfs.cat(this.props.fileHash);
    const blob = new Blob([fileBuf]);
    try {
        saveAs(blob,this.props.fileName);
    } catch (e) {
      console.log(e);
    }


  }

  onShare = async(event) => {
    event.preventDefault();
    const fileInstance = FileInstance(this.props.address);
    console.log(this.props.address);
    console.log(this.state.addR);
    console.log(this.state.nameR);
    this.setState({loading: true, errorMessage:''});
      try{
        const accounts = await web3.eth.getAccounts();

        await fileInstance.methods.setReceiver(this.state.addR,this.state.nameR).send({
          from:accounts[0]
        });
      }catch(err){
        this.setState({errorMessage:err.message});
      }
      this.setState({loading:false});
  }

  render(){
    
    return (
      <Layout>
        <h3>Document Details</h3>
        <Grid>
          <Grid.Column width={10}>
            <Reveal animated='move right'>
              <Reveal.Content visible>
                <Card
                  color = 'red'
                  header = { this.props.fileName }
                  extra = {<div>File Hash: { this.props.fileHash} </div>}
                  meta = 'File Name'
                  description = {<div><br/> Created On: {this.props.date}</div>}
                  style ={{ overflowWrap: 'break-word' }}
                  />
                <Card 
                  color = 'red'
                  header = {this.props.fileOwnerName}
                  meta = 'Owner Name'
                  extra = {<div>Owner Address: {this.props.fileOwner} </div>}
                  style ={{ overflowWrap: 'break-word' }}
                  />
              </Reveal.Content>
              <Reveal.Content hidden >
                <Container color='red' >
                  <Button inverted color='red' icon labelPosition='left' style={{marginTop:'50px',marginLeft:'80px'}} href={this.props.fileURL} download><Icon name='eye'/>View File</Button>
                </Container>
              </Reveal.Content>
            </Reveal>
          </Grid.Column>
          <Grid.Column width={6}>
          <div style={this.state.visible ? { display: 'none' } : {}}>
            <Label size='big' basic color='red' pointing='left'><Icon name='user'/> You cannot make changes to this file...!!</Label>          
          </div>
          <div style={this.state.visible ? {} :{ display: 'none' }}>
          <Label size='medium' basic color='green' pointing='below' >Make changes to this file here!!<Icon name='user'/></Label>
            <UploadForm address={this.props.address}/>
          </div>
          </Grid.Column>
        </Grid>
        <Container style={{marginTop:'50px'}}>
          <Button inverted color='brown' icon labelPosition='left' style={{marginRight: '10px'}} onClick={this.onDownload} >
            <Icon name='download'/>
            Download File
          </Button>
          <Link route={`/documents/${this.props.address}/versions`}>
              <Button inverted color='brown' icon labelPosition='left'><Icon name='truck'/>Track Update History</Button>
          </Link>
        </Container>
        <Segment style={(this.state.account==this.state.owner) ? {} : { display: 'none' }} basic textAlign='center'>
            <Divider >To share file for editing purpose</Divider>
        </Segment>
        
        <Form style={(this.state.account==this.state.owner) ? {} : { display: 'none' }} onSubmit={this.onShare} error = {!!this.state.errorMessage}>
        <Form.Field >
          <label>Receiver Name</label>
          <Input placeholder='Receiver Name' value={this.state.nameR} onChange={(event) => {this.setState({nameR: event.target.value})}}/>
          <label>Receiver Address</label>
          <Input placeholder='Receiver Address' value={this.state.addR} onChange={(event) => {this.setState({addR: event.target.value})}}/>
        </Form.Field>
        <Message error heading='Oops!' content={this.state.errorMessage} />
        <Button inverted color='brown' icon labelPosition='left' loading = {this.state.loading}><Icon name='certificate'/>Share File</Button>
        </Form>
        <br/>
        <br/>
        
      </Layout>
    );
  }
}

export default DocumentShow;
