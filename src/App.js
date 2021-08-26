import React, { useState } from "react";
import "./styles.css";

const emojiDicsnory = {
  "🙈": "See-No-Evil Monkey",
  "🙉": " Hear-No-Evil Monkey",
  "🙊": " speak-No-Evil Monkey",
  "🦊": "fox",
  "🐩": " Poodle",
  "🦄": "unicorn",
  "🐿️": "Chipmunk",
  "🐉": "dragon"
};

var emojisWeKnow = Object.keys(emojiDicsnory);

export default function App() {
  const [meaning, setInput] = useState("");

  function changeHandler(event) {
    var userinput = event.target.value;
    var meaning = emojiDicsnory[userinput];
    if (meaning === undefined) {
      meaning = "We dont have this in our databse";
    }
    setInput(meaning);
  }

  function emojiClick(emoji) {
    var meaning = emojiDicsnory[emoji];
    setInput(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ color: "orange" }}>
        <em>emojiCon</em>
      </h1>
      <p style={{ color: "gray" }}>put your emoji below...</p>
      <input onChange={changeHandler} />
      <div className="mean">{meaning}</div>
      <h3>emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClick(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
