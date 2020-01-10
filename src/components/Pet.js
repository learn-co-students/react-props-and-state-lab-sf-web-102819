import React from 'react'

class Pet extends React.Component {


  handleClick = (event) => {
   
    const petId = this.props.pet.id
    this.props.onAdoptPet(petId)
  }
 
  
  

  render() {

    let buttonsOne = <div><button onClick={this.handleClick} className="ui primary button">Adopt pet</button></div>
    let buttonsTwo = <div><button  className="ui disabled button">Already adopted</button></div> 
      let button;

      if (this.props.pet.isAdopted === true) {
          button = buttonsTwo}
           
      

        if(this.props.pet.isAdopted === false) {
          button = buttonsOne  }
        

    
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {(this.props.pet.gender === 'female') ? '♀' : '♂️' }
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
          
          <div className= "extra content">>
          {button}
          </div>
          </div>
       </div>
        )
        
        
  }
}

export default Pet
