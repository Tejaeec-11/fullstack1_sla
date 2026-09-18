import profileImg from "../assets/hero.png"

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img className="profile-img" src={profileImg} alt="profile" />
      <h2 className="profile-name">John Doe</h2>
      <p className="profile-role">Frontend Developer</p>
      <button className="profile-btn">Follow</button>
    </div>
  )
}
export default ProfileCard