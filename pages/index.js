import react, {Component} from 'react';
import LayoutIndex from '../components/LayoutIndex';
import {Card, Button, Icon, Form, Message, Input, Label, Divider, Segment} from 'semantic-ui-react';
import file from '../ethereum/file';
import {Link, Router} from '../routes';
import web3 from '../ethereum/web3';
import FileInstance from '../ethereum/fileinstance';
import Header from '../components/Header';




class PaperIndex extends Component{

  state={
    accountAdd:'',
    accountName:'',
    status:true,
    name:'',
    email:'',
    loading:false,
    errorMessage:''
  };
  static async getInitialProps(){
    const files = await file.methods.getDeployedFiles().call();
    var i;
    var names=[];
    var n;
    for(i=0;i<files.length;i++)
    {
      const fileInstance = FileInstance(files[i]);
      n = await fileInstance.methods.getFileName().call();
      names.push(n);
    }
    return {files,names};
  }

  async componentDidMount() {
    const tryAdd = await web3.eth.getAccounts();
    this.setState({accountAdd:tryAdd[0]});
    this.setState({visible:false,visibility:true});
    const statusA = await file.methods.accountStatus(this.state.accountAdd).call();
    this.setState({status:statusA});
    var i;
    const iname = await file.methods.getUserNames().call();
    const iadd = await file.methods.getUserAddress().call();
    if(this.state.status) {
      for(i=0;i<iadd.length;i++) {
        if(iadd[i]==this.state.accountAdd) {
          this.setState({accountName:iname[i]});
        }
      }
    }
    
  }

  onSubmit = async (event) =>{
    event.preventDefault();
    this.setState({loading:true, errorMessage:''});
    try{
      await file.methods.register(this.state.name,this.state.email).send({from:this.state.accountAdd});
      Router.pushRoute('/');
    }
    catch(err){
      this.setState({errorMessage: err.message});
    }
    this.setState({loading:false});
    this.setState({status:true,accountName:name});
  }

  renderItems(){
    const items = this.props.files.map((address,index) => {
      return{
        color: 'violet',
        meta: 'File Name',
        description: `File Hash : ${address}`,
        extra: (
          <Link route={`/documents/${address}`}>
            <Button inverted color='blue' icon labelPosition='left'><Icon name='eye'/>View File</Button>
          </Link>),
        header : this.props.names[index],
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }

  render(){
    
    return (
      <LayoutIndex >
        <div style={this.state.status ? { display: 'none' } : {}}>
          <Label position='top center' color='orange' size='huge'>
            <Icon name='file alternate outline'/>
            PaperDApp
            <Label.Detail>
              <Icon name='paper plane outline'/>
            </Label.Detail>
          </Label><br/>
          <Divider/>
          <h2>You are not registered please registered</h2>
          <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
            <Form.Field inline>
              <label>User Id(Account Address)</label>
              <Form.Input 
                disabled
                fluid
                value={this.state.accountAdd} 
                />
              <Label basic color='red' pointing='above'>
                Dont change this...It's Your Unique Account Address!!!
              </Label>
            </Form.Field>
            <Segment basic textAlign='center'>
            <Divider >Fill Details Below</Divider>
            </Segment>
            <Form.Field>
              <label>Your Name</label>
              <Input 
              placeholder='Your Name' 
              value={this.state.name} 
              onChange={(event) => {this.setState({name: event.target.value})}}
              />
              <Label basic color='red' pointing='above'>
                Enter Your Name here..!!
              </Label>
            </Form.Field>

            <Form.Field>
              <label>Your Email</label>
              <Input 
              placeholder='Your Email' 
              value={this.state.email} 
              onChange={(event) => {this.setState({email: event.target.value})}}
              />
              <Label basic color='red' pointing='above'>
                Enter Your Email Address here..!!
              </Label>
            </Form.Field>

            <Message error header="Oops!" content={this.state.errorMessage} />
            <Button inverted color='red' icon labelPosition='left' loading={this.state.loading} ><Icon name='add user'/>Register!</Button>
          </Form>
        </div>  
        <div style={this.state.status ? {} : { display: 'none' }}>
          <Header/>
          <h3 >All Documents <Label size='big' basic color='red' pointing='left'> Welcome... {this.state.accountName}!!<Icon name='user'/></Label> </h3>
          <Link route='/documents/new'>
            <Button  animated='fade' inverted color='blue' icon labelPosition='left' className="item" floated='right'>
              <Button.Content visible><Icon name='add'/>Add Document</Button.Content>
              <Button.Content hidden>
                <Icon name='add' />
              </Button.Content>
            </Button>
          </Link>
          {this.renderItems()}
        </div>
      </LayoutIndex>
    );
  }
}

export default PaperIndex;
