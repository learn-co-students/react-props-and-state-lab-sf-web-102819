import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  fetchPets = async () =>  {
    const fetchUrl = "/api/pets"
    const response = await fetch(fetchUrl)
    const apiData = await response.json();
    // console.log(apiData)
    this.setState({
      pets: apiData
    })
    }

componentDidMount(){  
  this.fetchPets()
}

  onFindPetsClick = (event) => {
    this.setState({
      filters: {type: event.target.value}
    // filters: {...this.state.filters, type: event.target.value}
    })
  }

  onAdoptPet = (petId) => {
    this.setState (previousState => {
      const petIndex = previousState.pets.findIndex(pet => pet.id === petId);
      previousState.pets[petIndex].isAdopted = true;
      return previousState
    })
  }



  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onFindPetsClick = {this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser allPets = {this.state.pets} onAdoptPet ={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
