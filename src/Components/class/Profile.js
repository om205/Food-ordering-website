import { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Dummy Name",
      avatar: "https://avatars.githubusercontent.com/u/42200276?v=4",
      bio: "Dummy Bio",
      company: "Dummy Company",
      repoLink: "https://github.com",
    };
    console.log("Child - Component Constructor " + this.props.name);
  }
  async componentDidMount() {
    console.log("Child - Component Mounted 1 " + this.props.name);
    const fetchGithubProfile = async () => {
      const response = await fetch("https://api.github.com/users/om205");
      const data = await response.json();
      this.setState({
        name: data.name,
        avatar: data.avatar_url,
        bio: data.bio,
        company: data.company,
        repoLink: data.repos_url,
      });
    };
    await fetchGithubProfile();
    console.log("Child - Component Mounted 2 " + this.props.name);
  }

  componentDidUpdate() {
    console.log("Child - Component Updated " + this.props.name);
  }

  componentWillUnmount() {
    console.log("Child - Component Unmounted " + this.props.name);
  }

  render() {
    console.log("Child - Component Rendered " + this.props.name);
    return (
      <>
        <h2>Profile</h2>
        <div className="card" style={{ marginBottom: "200px" }}>
          <img
            src={this.state.avatar}
            alt="profile"
            style={{ width: "100%" }}
          />
          <div className="card-body">
            <h3>{this.state.name}</h3>
            <p>{this.state.bio}</p>
            <p>{this.state.company}</p>
            <p>
              Repo Link:{" "}
              <a href={this.state.repoLink} target="blank">
                Go
              </a>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
