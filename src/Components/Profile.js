import { useState, useEffect } from "react";

const Profile = (props) => {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    const fetchGithubProfile = async () => {
      const response = await fetch(
        `https://api.github.com/users/${props.name}`
      );
      const data = await response.json();
      setProfile(data);
    };
    fetchGithubProfile();
  }, []);
  return (
    <>
      <h2>Profile</h2>
      {profile && (
        <div className="card" style={{ marginBottom: "100px" }}>
          <img
            src={profile.avatar_url}
            alt={profile.name}
            style={{ width: "100%" }}
          />
          <div className="card-body">
            <h3>{profile.name}</h3>
            <p>{profile.bio}</p>
            <p>{profile.company}</p>
            <p>
              Repo Link: <a href={profile.repos_link}>Go</a>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
