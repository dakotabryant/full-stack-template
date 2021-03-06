/* eslint-disable */
import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Restaurant from './components/Restaurant';
import RestaurantListing from './components/RestaurantListing';
import './App.css';
import Searchbar from './components/Searchbar';
import Header from './components/Header';
import {connect} from 'react-redux';


export function App(props) {
  let searchBar = <Searchbar/>;
  let listings;
  if(props.listingsShowing) {
    searchBar = <Header/>;
    listings = RestaurantListing
  }

  return (
    <Router>
      <div>
        {searchBar}
        <Route exact path="/" component={listings}/>
        <Route exact path="/:restaurantId" component={Restaurant}/>
      </div>
    </Router>
  )
}

const mapStateToProps = state => ({
  restaurants: state.restaurants,
  listingsShowing: state.listingsShowing
})

export default connect(mapStateToProps)(App);
