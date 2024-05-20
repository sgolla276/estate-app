import { useState } from "react";
import "./chat.scss";

function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="/person.jpeg"
            alt=""
          />
          <span>John</span>
          <p>Hii. How are you doing today?</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Sai</span>
          <p>I just received your text.</p>
        </div>
        <div className="message">
          <img
            src="/person.jpeg"
            alt=""
          />
          <span>John</span>
          <p>Is this still available ?</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Sai</span>
          <p>Yes this is available</p>
        </div>
        <div className="message">
          <img
            src="/person.jpeg"
            alt=""
          />
          <span>John</span>
          <p>Can i look this place today?</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Sai</span>
          <p>Yes, does 9 AM works for you?</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              John Doe
            </div>
            <span className="close" onClick={()=>setChat(null)}>X</span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Hii. How are you doing today?</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>I just received your text.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Is this still available ?</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Yes this is available</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Can i look this place today?</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Yes, does 9 AM works for you?</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Message by John</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Message by Sai</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Message by John</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Message by Sai</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
