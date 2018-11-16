import React, { Component } from "react";
import axios from "axios";

class Profile extends Component {
  state = {
    profile: {}
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const { data: profile } = await axios.get(`/members/${id}`);
    // TODO: transfer to a service file
    this.setState({ profile });
  }

  render() {
    return (
      <>
        <h2>Profile Works!</h2>
        <p>A.K.A.: {this.state.profile.name}</p>
        <p>Age: {this.state.profile.age}</p>
        <p>Bounty: {this.state.profile.bounty}</p>
        <button
          className="btn btn-secondary"
          onClick={() => this.props.history.goBack()}
        >
          Back
        </button>
      </>
    );
  }
}

export default Profile;
