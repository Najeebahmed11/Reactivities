import  React,{useState,useEffect, Fragment } from 'react';

import { Header, Icon, List, Container } from 'semantic-ui-react'
import axios from 'axios'
import { IActivity } from '../models/activity';
import { Navbar } from '../../features/nav/Navbar';
import { ActivityDashboard } from '../../features/nav/activities/dashboard/ActivityDashboard';

const App =()=> {
  const [activities,setActivities]=useState<IActivity[]>([]);
  const[selectedActivity,setSelectedActivity]=useState<IActivity | null>(null);
  const handleSelectActivity = (id : string )=>{
    setSelectedActivity(activities.filter(a=>a.id===id)[0])
  }
  useEffect(()=>{
    //componentDidMount() {
    axios
      .get<IActivity[]>('http://localhost:5000/api/activities')
      .then((response)=>{
      //console.log(response);
        setActivities(response.data)
      });
  });

  return (
    <Fragment >
      <Navbar />
      <Container style ={{marginTop: '7em'}}>
        <ActivityDashboard 
         activities={activities}
         selectActivity={handleSelectActivity}
         selectedActivity={selectedActivity}
         />
      </Container>
    </Fragment>
  );
  
  
}

export default App;
