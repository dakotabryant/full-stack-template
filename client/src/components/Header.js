/* eslint-disable */
import React from 'react';
import {connect} from 'react-redux';
import {FETCH_RESTAURANT_REQUEST, FETCH_RESTAURANT_SUCCESS, FETCH_RESTAURANT_FAILURE, fetchRestaurants} from '../actions'
import Link from 'react-router-dom';

export class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this)
  }

  onSearch(event){
    event.preventDefault();
    const query = {
      search: this.searchInput.value,
      location: this.locationInput.value
    }
    this.form.reset();
    return this.props.dispatch(fetchRestaurants(query))
  }
  render() {
    return(
      <form ref={form => this.form = form} className="header" onSubmit={e=>{this.onSearch(e)}}>
        <div className="label-container">
          <label htmlFor="search-input">Find</label>
        </div>
        <input type="text" className="search-input" placeholder="tacos, cheap dinner, The Brook" required
                ref={input => this.searchInput = input} />
        <div className="label-container">
          <label htmlFor="location-input">Near</label>
        </div>
        <input type="text" className="location-input" placeholder="Tulsa, OK" required
                ref={input => this.locationInput = input} />
        <button type="submit">Search</button>
      </form>
    )
  }
}

 export const mapStateToProps = state => ({
   restaurants: state.restaurants
 })

export default connect(mapStateToProps)(Searchbar);
