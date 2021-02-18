import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";
import { Context } from "../store/appContext";

function Profile() {
  const { store, actions } = useContext(Context);

  const history = useHistory();

  useEffect(() => {
    if (store.profile === null) history.push("/login");
  }, []);

  return (
    <>
      <div
        className="card border-success mb-3 m-auto"
        style={{ "max-width": "38rem" }}
      >
        <div className="card-header bg-success border-success py-5">
          <img
            src={!!store.profile && store.profile.images[0].url}
            alt="Avatar"
            id="profileAvatar"
          />
          <h1 className="text-white d-inline-block ml-4">
            {!!store.profile && store.profile.display_name}
          </h1>
        </div>
        <div className="card-body list-group-flush">
          <li className="list-group-item border-success ">
            <i className="fas fa-users"></i>{" "}
            {!!store.profile && store.profile.followers.total}
          </li>
          <li className="list-group-item border-success">
            <i className="fas fa-music" onClick={actions.getUserArtists}></i>{" "}
            {/* {!!store.artists && store.artists} */}
          </li>
          <li className="list-group-item border-success">
            Gustos Musicales: Pop
          </li>
          <button
            type="button"
            className="btn btn-success btn-lg btn-block mt-5"
          >
            Agregar amigo
          </button>
        </div>
      </div>
    </>
  );
}

export default Profile;
