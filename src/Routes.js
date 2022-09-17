import React from "react";
import {Route , Switch,Redirect} from 'react-router-dom'
import DogsList from "./Dogs.List";
import FilterDogList from "./FilterDogList";



const Routes = ({img}) => {

    return(

<Switch>
<Route exact path={'/dogs'}>
<DogsList img={img} />
      </Route>

      <Route path="/dogs/:name">
        <FilterDogList dogs={img}/>
      </Route>
      <Redirect to="/dogs" />

</Switch>
    )
}


export default Routes;