import React from 'react'

class Filters extends React.Component {
  constructor(){
    super()
  }

    handleChange = (event) => {
      const pet = event.target.value
      this.props.onChangeType(pet)
    }

    handleClick = (event) => {
      
      this.props.onFindPetsClick(event)
    }



  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.handleChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.handleClick} className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
