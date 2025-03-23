import profileIcon from "../assets/profile-icon.svg"

function Profile() {
    return (
        <button className="circle-button">
            <img className="circle-button-image" src={profileIcon} />
        </button>
    )
}

export default Profile

// import { darkText } from "../constants"
// import ProfileImage from "./images/ProfileImage"

// function Profile() {
//     return (
//         <button>
//             <ProfileImage color={darkText} />
//         </button>
//     )
// }

// export default Profile