import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createEventThunk} from "../services/event-thunks.js";

const EventPost = () => {
  let [whatsHappening, setWhatsHappening] = useState('');
  const dispatch = useDispatch();
  const postClickHandler = () => {
    const today = new Date();
    const twoWeeksLater = new Date(today.getFullYear(), today.getMonth(), today.getDate() + Math.floor(Math.random() * 3) + 7);
    const sentences = whatsHappening.split(/[.?!]/);
    const title = sentences[0];
    const event = sentences.slice(1).join('.');
    const newTuit = {
      event,
      username: "Event host",
      title,
      time: twoWeeksLater.toDateString(),
      editing: false,
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