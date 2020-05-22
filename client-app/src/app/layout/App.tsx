import  React,{Component} from 'react';

import { Header, Icon, List } from 'semantic-ui-react'
import axios from 'axios'

class App extends Component {
  state={
    activities:[]

  }
componentDidMount() {
  axios.get('http://locolhost:5000/api/activities')
    .then((response)=>{
   //   console.log(response);
      this.setState({
        activities: response.data
      })

//inntro


    })
  


}

  render(){

    return (
      <div >
        <Header as='h2'>
    <Icon name='users' />
    <Header.Content>Reactivities</Header.Content>
  </Header>

  <List>
  {this.state.activities.map((activity:any)=>(
           <List.Item key={activity.id}>{activity.name}</List.Item>
          ))}
    
  </List>



        
      </div>
    );
  }
  
}

export default App;
