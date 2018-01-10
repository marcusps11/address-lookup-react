import React, { Component } from 'react';

const dropDown = ({option}) => (
  <select>
    {option.map((item, index) =>
      <option key={index} value={item}>{item}</option>
    )}
  </select>
)

export default dropDown;
