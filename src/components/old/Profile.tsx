import profileIcon from "../assets/profile-icon.svg"

function Profile() {
    return (
        <button className="circle-button">
            <img className="circle-button-image" src={profileIcon} />
        </button>
    )
}

export default Profile