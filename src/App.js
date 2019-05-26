import React, {
  Component
} from 'react';
import Result from './containers/result'
import './App.css';

class App extends Component {

  state = {
    change: "",
    results: []
  }

  changeInput = (e) => {
    this.setState({
      change: e.target.value
    })
    // console.log(this.state.change);
  }

  submitSearch=(e)=>{
    e.preventDefault()
    let mathPageNum = Math.floor(Math.random()*5)
    let mathImageNum = Math.round(Math.random(15)*80)
    console.log(mathPageNum);
    console.log(mathImageNum);
      fetch(`https://api.pexels.com/v1/search?query=${this.state.change}&per_page=80&page=1`, {
        headers: {
          'Accept': 'application/json',
          "Authorization": "563492ad6f917000010000015b3a9ca8291b4f8488f76b20c81a755a"
        }
      })
      .then(res => res.json())
      // .then(console.log)
      .then(data=>this.setState({results:data.photos}))
  }

  render() {
    console.log(this.state);
    return (
      <div className = "App" >
        <form onSubmit={(e)=>this.submitSearch(e)}>
          <input type="text" onChange={this.changeInput} placeholder="Search..."></input>
        </form>
          <Result photos={this.state.results}/>
        </div>
    );
  }
}

export default App;
