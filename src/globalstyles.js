import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  :root {
    --type-body: Open Sans, Helvetica, Arial, sans-serif;
    --type-quote: Vollkorn;
    --quote-image-width: 140px;
    --border-rad: 7px;
    --accent-color: hsl(322deg 85% 65%);
    --quote-bg: hsl(0 0% 97%);
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  
  h1 { 
    font-family: 'Raleway',sans-serif; 
    font-size: 25px; 
    font-weight: 800; 
    line-height: 72px; 
    margin: 0 0 30px; 
    text-align: center; 
    text-transform: uppercase; 
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 50px;
    }
  }
  
  blockquote {
    text-align: center;
    position: relative;
    margin: 40px 20px;
    padding: 40px;
    font: italic 1.2rem var(--type-quote);
    background: var(--quote-bg) no-repeat left / var(--quote-image-width);
    background-color: var(--quote-bg) no-repeat left / var(--quote-image-width);
    border-radius: var(--border-rad);
    border: 2px solid white;
    box-shadow: 2px 2px 4px hsl(0 0% 0% / 20%);
    text-indent: 1.6em;
    align-self: center;
  }
  
  @media (min-width: 768px) {
    blockquote {
      margin: 50px 60px;
    }
  }
  
  blockquote::before {
    content: "";
    pointer-events: none;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: var(--border-rad);
    box-shadow: inset -2px -2px 1px hsl(0 0% 100%),
      inset 2px 2px 4px hsl(0 0% 0% / 20%);
  }
  
  blockquote::after {
    content: "❝";
    position: absolute;
    z-index: 1;
    left: 50%;
    top: -2px;
    transform: translate(-50%, -50%);
    width: 1.3em;
    height: 1.3em;
    background: white;
    box-shadow: 0 4px 5px -1px hsla(0 0% 0% / 20%);
    border-radius: 999px;
    display: grid;
    place-content: center;
    padding-top: 0.5em;
    color: var(--accent-color);
    font-size: 36px;
    font-style: normal;
    text-indent: 0;
  }

  select {
    // A reset of styles, including removing the default dropdown arrow
    appearance: none;
    background-color: transparent;
    border: none;
    padding: 0 1em 0 0;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
  
    // Stack above custom arrow
    z-index: 1;
  
    // Remove dropdown arrow in IE10 & IE11
    // @link https://www.filamentgroup.com/lab/select-css.html
    &::-ms-expand {
      display: none;
    }
  
    // Remove focus outline, will add on alternate element
    outline: none;
  }

  .select {
    display: grid;
    grid-template-areas: "select";
    align-items: center;
    position: relative;
    font-family: 'Raleway',sans-serif; 
    font-size: 10px; 
    text-align: center; 
    text-transform: uppercase;
  
    select,
    &::after {
      grid-area: select;
    }
  
    min-width: 15ch;
    max-width: 35ch;
  
    border: 1px solid var(--select-border);
    border-radius: 0.25em;
    padding: 0.25em 0.5em;
  
    font-size: 1rem;
    cursor: pointer;
    line-height: 1.5;
  
    // Optional styles
    // remove for transparency
    background-color: #fff;
    background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
  
    // Custom arrow
    &:not(.select--multiple)::after {
      content: "";
      justify-self: end;
      width: 0.8em;
      height: 0.5em;
      background-color: var(--select-arrow);
      clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    }
  }

  select:focus + .focus {
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 2px solid var(--select-focus);
    border-radius: inherit;
  }

  label {
    font-size: 1.125rem;
    font-weight: 500;
  }
  
  .select + label {
    margin-top: 3rem;
  }

  .select-category {
    margin: 15px auto;
    width: 20%;
  }

  button {
    font-weight: 600;
    border: solid 2px black;
    outline: 0;
    padding: 1rem 4rem;
    letter-spacing: .08rem;
    background-color: white;
    border-radius: .35rem;
    position: relative;
    cursor: pointer;
    font-family: 'Raleway',sans-serif; 
    font-size: 20px; 
    text-align: center; 
    text-transform: uppercase;
    margin: 20px 30px;
    
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: pink;
        z-index: -1;
        border-radius: .35rem;
        border: solid 2px pink;
        transition: all .3s ease-in-out;
    }
  }

  @media (min-width: 768px) {
    button {
      margin: 0 20px;
    }
  }

  button.new-quotes , button.tweet-quotes , button.save-quote{
    &::after {
        border: 0;
        box-shadow: 0px 0px 0px 2px pink;
        width: calc(100%);
        height: calc(100%);
    }
    
    &:hover {
      &::after {
        top: -.5rem;
        left: -.5rem;
        width: calc(100% + .5rem * 2);
        height: calc(100% + .5rem * 2);
      }
    }
  }

  .flex-button {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .flex-button {
      flex-direction: row;
    }
  }

  .button-functions {
    justify-content: center;
  }

  .quote {
    padding: 1px 0
  }
  `;
