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
                              ** componentWillUnmount()
                                ---------------

                                  componentWillUnmount is the last function to be called immediately 
                                  before the component is removed from the DOM. It is generally used 
                                  to perform clean-up for any DOM-elements or timers created in 
                                  componentWillMount . At a picnic, componentWillUnmount 
                                  corresponds to just before you pick up your picnic blanket.


                                --------------
                              **getBoundingClientRect()
                                ---------------

                                Getting Size and Position of an Element in React
                                Getting the size and position of elements in React is not a great story. 
                                Each option I researched has at least one gotcha. I’ll share the best options 
                                I came up with and explain pros and cons of each.
                                 First let’s take a look at the basic way to get an element’s size and position in React.


                                Getting the Size and Position
                                You can use Element.getClientRects() and Element.getBoundingClientRect() 
                                to get the size and position of an element. In React, you’ll first need to
                                get a reference to that element. Here’s an example of how you might do that.

                                https://www.pluralsight.com/tech-blog/getting-size-and-position-of-an-element-in-react/


                    **  THE PROBLEM 



                        This basic approach will fail if the size or position of the element is 
                        dynamic, such as in the following scenarios.

                        The element contains images and other resources which load asynchronously
                        Animations
                        Dynamic content
                        Window resizing





*/

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    // getBoundingClientRect , will get the size and the position of the div, you need it for when the user will scroll: getBoundingClientRect().top > this.state.scrollPos,
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
