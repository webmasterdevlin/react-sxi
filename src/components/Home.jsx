import React, { Component, Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Home extends Component {
  state = {
    members: [],
    totalBounties: 0
  };

  async componentDidMount() {
    const { data } = await axios.get("/members");
    console.log("DATA:", data);

    const bounties = data.map(m => m.bounty);
    console.log("BOUNTIES:", bounties);

    const total = bounties.reduce((a, c) => a + c);
    console.log("TOTAL:", total);

    this.setState({ members: data, totalBounties: total });
  }

  render() {
    return (
      <>
        <h2>Home works!</h2>
        {!this.state.members.length ? (
          <h3>loading...</h3>
        ) : (
          <ul>
            {this.state.members.map(m => (
              <Fragment key={m.id}>
                <Link to={`/profile/${m.id}`}>
                  <li>{m.name}</li>
                </Link>
              </Fragment>
            ))}
          </ul>
        )}
        <p>
          Total bounties: <strong>{this.state.totalBounties}</strong>
        </p>
      </>
    );
  }
}
