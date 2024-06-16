
import React from 'react';

const Uppercase = ({ children, color }) => (
  <p className='paragraf' style={{ color }}>{children.toUpperCase()}</p>
);

export default Uppercase;