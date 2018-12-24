import React, { Component } from "react";

class Intro extends Component {
  state = {};
  render() {
    return (
      <div class="jumbotron">
        <h1 className="cover-heading">Desculpa amorzinho</h1>
        <p className="lead">
          Me perdoa meu anjinho... Me perdoa por ser um babaca com você... Eu te
          amo, <i className="fa fa-heartbeat" aria-hidden="true" />
          <i className="fa fa-heartbeat" aria-hidden="true" />
          minha coalinha
          <i className="fa fa-heartbeat" aria-hidden="true" />
          <i className="fa fa-heartbeat" aria-hidden="true" />
          <br />
          Perdoa esse idiota que te ama mais que tudo na vida.{" "}
          <i className="fa fa-frown-o" aria-hidden="true" />
        </p>
      </div>
    );
  }
}

export default Intro;
