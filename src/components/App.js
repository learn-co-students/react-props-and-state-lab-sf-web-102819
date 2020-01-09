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

  changeType = (pet) => {
    this.setState(previousState => {
      previousState.filters.type =  pet 
      return previousState
  })}

  findPets = (event) => {
    
    let petURL = "/api/pets"
    if (this.state.filters.type !== 'all'){
      petURL += `?type=${this.state.filters.type}`
    }
    fetch(petURL)
    .then(response => response.json())
    .then(json => this.setState({pets: json}))
   
  }

  adoptAPet = (petId) =>{
    const index = this.state.pets.findIndex(pet => pet.id == petId)
    
    this.setState(previousState => {previousState.pets[index].isAdopted = true
    return previousState})
    
    

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
              <Filters onChangeType={this.changeType} onFindPetsClick={this.findPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoptAPet} pets ={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
