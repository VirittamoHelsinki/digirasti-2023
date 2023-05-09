import React from "react";
var readyForRender = true

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      this.props.difficulty
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    readyForRender = true
    this.setState({
      date: new Date()
    });    
  
  }
  
  
  render() {
    if(readyForRender === true){
      readyForRender = false
    return (
      <div>
        {this.props.word(true)}
     </div>
    );
  }else if (this.props.arrayOfWords.length > 0){
    return  (<div>
        {this.props.word(false)}
           </div>)
  }else
  return(
    <div className="emptyGame"></div>)
}
}


export default Timer;