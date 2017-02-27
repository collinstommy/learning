/*jshint esversion: 6 */

import React from "react";
import ReactDOM from "react-dom";

import Note from "./components/Note";
import Board from "./components/Board";

const app = document.getElementById('react-container');
ReactDOM.render(<Board count={10}></Board>, app);