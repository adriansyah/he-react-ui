import React from 'react';

const Subtract: React.SFC = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24">
    <g transform="translate(5.000000, 5.000000)">
      <path d="m 12.651252,6 c 0.552285,0 1,0.4477152 1,1 0,0.5522847 -0.447715,1 -1,1 H 1.3375439 C 0.78525911,8 0.33754386,7.5522847 0.33754386,7 c 0,-0.5522848 0.44771525,-1 1.00000004,-1 11.3137081,0 0,0 11.3137081,0 z" />
    </g>
  </svg>
);

Subtract.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default Subtract;
