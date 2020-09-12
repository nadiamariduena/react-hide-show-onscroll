import React from "react";

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      scrollPos: 0,
    };
  }

  /*
                                ---------------
                                MOUNTING EVENTS 
                                ---------------


                                IN REACT COMPONENT LIFE CYCLE,  you have 4 methods, 
                                We are already familiar with 2 Methods of mounting
                                events which is CONSTRUCTOR and RENDER, this 2 methods
                                are part of MOUNTING EVENTS

                                ---------------
                              ** componentDidMount
                                ---------------
                                The componentDidMount() method is called after the component is rendered.


                                Example:
                                At first my favorite color is red, but give me a second, and it is yellow instead:


                                class Header extends React.Component {
                                constructor(props) {
                                  super(props);
                                  this.state = {favoritecolor: "red"};
                                }
                                componentDidMount() {
                                  setTimeout(() => {
                                    this.setState({favoritecolor: "yellow"})
                                  }, 1000)
                                }
                                render() {
                                  return (
                                    <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                                  );
                                }
                              }

                              ReactDOM.render(<Header />, document.getElementById('root'));

                                ---------------
                              ** componentWillUnmount
                                ---------------

                                  componentWillUnmount is the last function to be called immediately 
                                  before the component is removed from the DOM. It is generally used 
                                  to perform clean-up for any DOM-elements or timers created in 
                                  componentWillMount . At a picnic, componentWillUnmount 
                                  corresponds to just before you pick up your picnic blanket.



*/

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    // console.log(document.body.getBoundingClientRect());
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos,
    });
  };
  render() {
    console.log(this.state);
    return (
      <nav className={this.state.show ? "active" : "hidden"}>
        <h1>FLUXUS</h1>
      </nav>
    );
  }
}
