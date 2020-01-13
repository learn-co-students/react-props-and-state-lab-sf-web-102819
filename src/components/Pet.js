import React from 'react'

class Pet extends React.Component {

  handleAdoptClick = (event) => {
    const petId = this.props.id
    this.props.onAdoptPet(petId)
  }


  render() {

    


    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.gender === "male" ? '♂': '♀'}

            {this.props.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.title}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight} </p>
          </div>
        </div>
        <div className="extra content">
        <button onClick={this.handleAdoptClick}
              className={this.props.isAdopted === true ?  "ui disabled button" : "ui primary button"}> 
                        {this.props.isAdopted === true ? "Already Adopted" : "Adopt me!" } </button>
        </div>
      </div>
    )
  }
}

export default Pet
