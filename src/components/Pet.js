import React from 'react'

class Pet extends React.Component {

  adopt = (event) => {
    this.props.onAdoptPet(this.props.pet.id)
  }


  render() {

   let buttons = <div className="extra content">
          {/* <button className="ui disabled button" >Already adopted</button> */}
          <button className="ui primary button" onClick={this.adopt}>Adopt pet</button>
        </div>

    if (this.props.pet.isAdopted) {
      buttons = 
      <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          {/* <button className="ui disabled button">Adopt pet</button> */}
        </div>
    }
    

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === "female" ? '♀' : '♂' }
           {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        {buttons}
      </div>
    )
  }
}

export default Pet
