import React, { Component } from "react";

class AboutContainer extends React.Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>
            Before Google had a good idea of who I am and what my politics are,
            it would occasionally suggest news headlines that I wouldn't
            normally see, next to something that I already agreed with.
          </p>
          <br />
          <p>
            It was truly chilling to see the same facts spun to draw confident,
            opposite conclusions and state those conclusions as obvious,
            inescapable fact. We all know it's bad, but seeing it side-by-side
            is to me a necessary reminder.{" "}
          </p>
          <br />
          <p>
            This is not to discredit real journalism, but to call out the
            hyper-partisan drumbeats and ever-narrowing people-pleasing telling
            us each exactly what we want to hear, and showing us only what we
            already want to see.
          </p>
          <br />
          <p>
            Never forget that Andrew Breitbart also launched the Huffington
            Post.
          </p>
          <br />
          <p className="tiny-text">Site v1.0</p>
        </Modal>
        <p className="text-button" type="button" onClick={this.showModal}>
          About this site
        </p>
      </div>
    );
  }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <p className="text-button" onClick={handleClose}>
          Close
        </p>
      </section>
    </div>
  );
};

const container = document.createElement("div");
document.body.appendChild(container);

export default AboutContainer;
//import Modal from "./Modal";

/*
class AboutContainer extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <h1>React Modal</h1>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </Modal>
        <button type="button" onClick={this.showModal}>
          open
        </button>
      </main>
    );
  }
}


/*const container = document.createElement("div");
document.body.appendChild(container);
ReactDOM.render(<Dashboard />, container);
*/

//export default AboutContainer;
