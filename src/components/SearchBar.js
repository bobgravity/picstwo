import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component{
state={term:''}
onFormSubmit=e=>{
  e.preventDefault();
  this.props.onTermy(this.state.term);
}

  render(){
    return (
      <div className='' style={{marginTop:'10px'}}>
      <form onSubmit={this.onFormSubmit} className="ui form">
  <div className="field" >
    <label style={{position:'relative', width:'80px'}} className='ui pointing below blue basic label' >Search Images!</label>
    <input onChange={e=>this.setState({term:e.target.value})} type="text"  name="first-name" placeholder="Type in the type of Image you're looking for!" />
    <button className="ui red button">Submit</button>
  </div>
  </form>
  </div>
    )
  }
}

export default SearchBar
