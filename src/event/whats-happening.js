import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createEventThunk} from "../services/event-thunks.js";

const EventPost = () => {
  let [whatsHappening, setWhatsHappening] = useState('');
  const dispatch = useDispatch();
  const postClickHandler = () => {
    const newTuit = {
      event: whatsHappening,
      username: "Event host",
      title: "Pet Event",
      image: "../img/do3.jpeg",
    }
    dispatch(createEventThunk(newTuit));
  }
  return (
      <div className="row">
        <div className="col-auto">
          <img className="rounded-circle" src="../img/do3.jpeg" alt="" width={70} height={70}/>
        </div>
        <div className="col-10 mb-4">
          <textarea value={whatsHappening}
                    placeholder="Post an new event here..."
                    className="form-control"
                    style={{width: "100%", height: "200px"}}
                    onChange={(event) => setWhatsHappening(event.target.value)}>
          </textarea>
          <div>
            <button className="rounded-pill btn btn-primary float-end mt-4 ps-3 pe-3 fw-bold"
                    onClick={postClickHandler}>
              Post
            </button>
          </div>
        </div>
      </div>
  );
}
export default EventPost;