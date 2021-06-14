import React, { useState, useEffect, createRef } from "react";
import { LightMode, DarkMode } from "./theme";
import { GlobalStyles } from "./globalstyles";
import { ThemeProvider } from "styled-components";
import Toggle from "./toggle";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

//declare API links
const urlApiAll = "https://api.quotable.io/random";
const urlApiTechnology = "https://api.quotable.io/random?tags=technology";
const urlApiFriendship = "https://api.quotable.io/random?tags=friendship";
const urlApiInspirational = "https://api.quotable.io/random?tags=inspirational";
const urlApiWisdom = "https://api.quotable.io/random?tags=wisdom";

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [category, setCategory] = useState("all");
  const [theme, setTheme] = useState("dark");
  const quoteRef = createRef();

  const getQuote = () => {
    if (category === "all") {
      fetch(urlApiAll)
        .then((res) => res.json())
        .then((data) => setQuotes(data));
    } else if (category === "technology") {
      fetch(urlApiTechnology)
        .then((res) => res.json())
        .then((data) => setQuotes(data));
    } else if (category === "friendship") {
      fetch(urlApiFriendship)
        .then((res) => res.json())
        .then((data) => setQuotes(data));
    } else if (category === "inspirational") {
      fetch(urlApiInspirational)
        .then((res) => res.json())
        .then((data) => setQuotes(data));
    } else {
      fetch(urlApiWisdom)
        .then((res) => res.json())
        .then((data) => setQuotes(data));
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  const getNewQuotes = () => {
    getQuote();
  };

  const tweetQuotes = () => {
    const tweet = `https://twitter.com/intent/tweet?text=${quotes.author} has said : "${quotes.content}"`;
    window.open(tweet, "_blank");
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    getQuote();
  };

  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const saveQuote = () => {
    let ref = quoteRef.current;
    domtoimage
      .toBlob(ref, {
        quality: 1.0,
        bgcolor: "violet",
      })
      .then(function (blob) {
        saveAs(blob, "saved-quote.png");
      });
  };

  const { content, author } = quotes;

  return (
    <ThemeProvider theme={theme === "dark" ? DarkMode : LightMode}>
      <>
        <GlobalStyles />
        <h1>Random Quotes Generator</h1>
        <Toggle theme={theme} toggleTheme={changeTheme} /> <br />
        <div className="select-category">
          <label htmlFor="standard-select">Select your category :</label>
          <br />
          <div className="select">
            <select
              id="standard-select"
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="all">All Categories</option>
              <option value="technology">Science & Technology</option>
              <option value="friendship">Friendship</option>
              <option value="inspirational">Inspirational</option>
              <option value="wisdom">Wisdom</option>
            </select>
            <span className="focus"></span>
          </div>
        </div>
        <div className="quote" ref={quoteRef}>
          <blockquote>
            "{content}" <br />
            <br />
            <b>--{author}--</b>
          </blockquote>
        </div>
        <div className="flex-button button-functions">
          <button className="tweet-quotes" onClick={tweetQuotes}>
            Tweet this quote
          </button>
          <button className="new-quotes" onClick={getNewQuotes}>
            Get New Quote
          </button>
          <button className="save-quote" onClick={saveQuote}>
            Save Quote Image
          </button>
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
