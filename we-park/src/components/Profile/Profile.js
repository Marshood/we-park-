import React, { useState, useEffect } from "react";
import "./Profile.css";
import user from "../../assets/user(1).png";
import editIcon from "../../assets/edit.png";

const Profile = (props) => {
  const [userDetailes, setUserDetailes] = useState({
    // we need to agree about the structure/names of this object with the backend
    // this is a temporary solution
    name: "Rasheed Hisham",
    phoneNumber: "05274748246",
    email: "Omriza5@gmail.com",
    carNumber: "9999999",
  });

  const [isEdit, setIsEdit] = useState(true);

  useEffect(() => {
    // call the server (get method) to populate the form
    // set the userDetailes state
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // call the server (post method)

    setIsEdit(true);
  };

  const handleEditClick = () => {
    setIsEdit(!isEdit);
  };

  const handleInputChange = (e) => {
    const name = e.target.name;
    setUserDetailes({ ...userDetailes, [name]: e.currentTarget.value });
  };

  const inputClasses = () => {
    return isEdit ? "textInfos disabled" : "textInfos";
  };

  return (
    <div className="profileContainer">
      <div className="imageFile">
        <img src={user} />
      </div>
      <div className="editIcon" onClick={handleEditClick}>
        <img src={editIcon} />
      </div>
      <form className="userProfileForm" onSubmit={handleSubmit}>
        <div className="userDetailesInputs">
          <input
            className={inputClasses()}
            onChange={handleInputChange}
            value={userDetailes.name}
            name="name"
            disabled={isEdit}
          />

          <input
            className={inputClasses()}
            onChange={handleInputChange}
            value={userDetailes.phoneNumber}
            name="phoneNumber"
            disabled={isEdit}
          />
          <input
            className={inputClasses()}
            onChange={handleInputChange}
            value={userDetailes.email}
            name="email"
            disabled={isEdit}
          />
          <input
            className={inputClasses()}
            onChange={handleInputChange}
            value={userDetailes.carNumber}
            disabled={isEdit}
            name="carNumber"
          />
        </div>
        <button className="button" style={{ width: "100%" }} disabled={isEdit}>
          Update
        </button>
      </form>
    </div>
  );
};

export default Profile;
