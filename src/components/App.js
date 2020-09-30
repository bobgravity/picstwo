import React from 'react';
import SearchBar from './SearchBar'
import axios from 'axios'
import ImageList from './ImageList'


class App extends React.Component{
  state={images:[]}

onTermSubmit=async term=>{

  const response=await axios.get('https://api.unsplash.com/search/photos', {
    params:{query:term},
    headers:{
      Authorization: 'Client-ID lkSV9Xlb8Cnqhvpsev6_HZ_VFED3DW_6yF7pOVon3uc'
    }
  })
    this.setState({images:response.data.results})
}


  render(){
return <div className="ui container">
<SearchBar onTermy={this.onTermSubmit}/>
<ImageList images={this.state.images}/></div>
  }
}

export default App
