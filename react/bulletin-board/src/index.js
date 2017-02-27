/*jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';

import Board from "./Board";
import './index.css';

const app = document.getElementById('react-container');
ReactDOM.render(<Board count={15}></Board>, app);
