import React, {Component} from 'react'

class Result extends Component {

  state ={
    mouse: false
  }

  mouseOut=()=>{
    this.setState({
      mouse:false
    })
  }
  mouseOver=()=>{
    this.setState({
      mouse: true
    })
  }

  render(){

    let photo;
    if (this.props.photos) {
        photo = this.props.photos.map(photo=>

        <div key={photo.id} className="results">
          <div className="img">
            <img src={photo.src.large}/>
          </div>
          <h1 id="photographerH1">{photo.photographer}</h1>
        </div>
      )
    }

    return(
      <div id="result">

        {photo}
      </div>
    )
  }
}

export default Result
