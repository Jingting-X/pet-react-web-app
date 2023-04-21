import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createEventThunk} from "../services/event-thunks.js";

const EventPost = () => {
  let [whatsHappening, setWhatsHappening] = useState('');
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const postClickHandler = () => {
    const sentences = whatsHappening.split(/[.?!]/);
    const title = sentences[0];
    const time = sentences[1];
    const event = sentences.slice(2).join('.');
    const newTuit = {
      userId: currentUser._id,
      event,
      username: "Event host",
      title,
      time,
      editing: false,
      image: "../img/services.png",
    }
    dispatch(createEventThunk(newTuit));
  }
  return (
      <div className="row">
        <div className="col-auto">
          <img className="rounded-circle" src="../img/services.png" alt="" width={70} height={70}/>
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