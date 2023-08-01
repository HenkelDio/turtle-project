import { styled } from 'styled-components';

export const Container = styled.div`
	details {
  position: relative;
  width: 300px;
  margin-right: 1rem;
}

details[open] {
  z-index: 1;
}

summary {
  padding: 1rem;
  cursor: pointer;
  border-radius: 5px;
  background-color: white;
  list-style: none;
}

summary::-webkit-details-marker {
  display: none;
}

details[open] summary:before {
  content: '';
  display: block;
  width: 100vw;
  height: 100vh;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
}

summary:after {
  content: '';
  display: inline-block;
  float: right;
  width: .5rem;
  height: .5rem;
  border-bottom: 1px solid currentColor;
  border-left: 1px solid currentColor;
  border-bottom-left-radius: 2px;
  transform: rotate(45deg) translate(50%, 0%);
  transform-origin: center center;
  transition: transform ease-in-out 100ms
}

summary:focus {
  outline: none;
}

details[open] summary:after {
  transform: rotate(-45deg) translate(0%, 0%);
}

ul {
  width: 100%;
  background: #ddd;
  position: absolute;
  top: calc(100% + .5rem);
  left: 0;
  padding: 1rem;
  margin: 0;
  box-sizing: border-box;
  border-radius: 5px;
  max-height: 200px;
  overflow-y: auto;
	list-style: none;
}

li {
  margin: 0;
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;
}

li:first-child {
  padding-top: 0;
}

li:last-child {
  padding-bottom: 0;
  border-bottom: none;
}

/* FAKE SELECT */

summary.radios {
  counter-reset: radios;
}

summary.radios:before {
  content: var(--selection);
}

input[type=radio] {
  counter-increment: radios;
  appearance: none;
  display: none;
}

input[type=radio]:checked {
  display: inline;
  --display: block;
}

input[type=radio]:after {
  content: attr(title);
  display: inline;
  font-size: 1rem;
}

ul.list {
  counter-reset: labels;
}

label {
  width: 100%;
  display: flex;
  cursor: pointer;
  justify-content: start;
	align-items: center;
	gap: 10px;
	opacity: 0.8;

	&:hover {
		opacity: 1;
	}
}

label span {
  --display: none;
  display: var(--display);
  width: 1rem;
  height: 1rem;
  border: 1px solid #727272;
  border-radius: 3px;
}

`
