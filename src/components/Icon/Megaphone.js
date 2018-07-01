// @flow
import React from 'react';
import PropTypes from 'prop-types';

export default function Megaphone(props: { className: string }) {
  const { className, ...restProps } = props;

  return (
    <svg
      className={className}
      {...restProps}
      viewBox="0 0 23 23"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(1.000000, 1.000000)">
        <path d="m 5.0253906,11.988281 a 1.0001,1.0001 0 0 0 -0.8769531,1.535157 l 4,6.5 a 1.0001,1.0001 0 0 0 0.00391,0.0059 c 0.8215723,1.314516 2.6352652,1.755484 3.9472652,0.771484 1.205334,-0.904 1.529919,-2.579083 0.748047,-3.830078 a 1.0001,1.0001 0 0 0 -0.01563,-0.02539 l -2.9999998,-4.5 a 1.0001,1.0001 0 1 0 -1.6640624,1.109376 l 2.9843752,4.476562 c 0.216844,0.349007 0.142084,0.872441 -0.251953,1.167969 -0.288,0.216 -0.874307,0.05697 -1.0527348,-0.228516 L 5.8515625,12.476562 A 1.0001,1.0001 0 0 0 5.0253906,11.988281 Z" />
        <path d="m 20.970703,-1 a 1.0001,1.0001 0 0 0 -0.457031,0.125 L 11.738281,4 H 4 c -2.7454545,0 -5,2.2545455 -5,5 0,2.745455 2.2545455,5 5,5 h 7.740234 l 8.773438,4.875 A 1.0001,1.0001 0 0 0 22,18 V 0 A 1.0001,1.0001 0 0 0 20.970703,-1 Z M 20,1.7011719 V 16.298828 L 12.486328,12.125 A 1.0001,1.0001 0 0 0 12,12 H 4 C 2.3454545,12 1,10.654545 1,9 1,7.3454545 2.3454545,6 4,6 h 8 a 1.0001,1.0001 0 0 0 0.486328,-0.125 z" />
      </g>
    </svg>
  );
}

Megaphone.propTypes = {
  className: PropTypes.string,
};
