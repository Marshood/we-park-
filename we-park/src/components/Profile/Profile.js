import React from "react";
import "./Profile.css";
import user from "../../assets/user(1).png";
import edit from "../../assets/edit.png";

const Profile = (props) => {
  return (
    <div>
      <form>
        <label className="imageFile">
          <img src={user} />
          <input type="file" className="image" />
        </label>
        <button className="imgEdit">
          <img src={edit} style={{ width: 32, height: 32 }} />
        </button>
        <div className="textInfos"> Guest Parker </div>
        <div className="textInfos">Test</div>
        <div className="textInfos">04-6166182</div>
        <div className="textInfos">test@test.com</div>
        <div className="textInfos">99-999-99</div>
      </form>
    </div>
  );
};

export default Profile;
