import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  constructor(){
    super()
  }

  
  render() {
    let pets = this.props.pets
  return <div className="ui cards">{pets.map(pet=> <Pet onAdoptPet={this.props.onAdoptPet}  pet={pet}/>)}</div>
  }
}

export default PetBrowser
