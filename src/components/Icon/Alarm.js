import React from 'react'
import PropTypes from 'prop-types'

export default function Alarm (props) {
  const {className, color, height, width, ...restProps} = props

  return (
    <svg className={className} width={`${width}px`} height={`${height}px`} {...restProps} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(4.000000, 3.000000)">
        <path fill={color} d="M15.0409254,5.19919446 C16.6340889,8.14823593 16.2403805,11.8867379 13.8598005,14.4455869 L15.7071068,16.2928932 C16.0976311,16.6834175 16.0976311,17.3165825 15.7071068,17.7071068 C15.3165825,18.0976311 14.6834175,18.0976311 14.2928932,17.7071068 L12.320378,15.7345916 C9.69677463,17.421676 6.3029609,17.4218029 3.6792405,15.7349731 L1.70710678,17.7071068 C1.31658249,18.0976311 0.683417511,18.0976311 0.292893219,17.7071068 C-0.0976310729,17.3165825 -0.0976310729,16.6834175 0.292893219,16.2928932 L2.13969436,14.4460921 C-0.241462295,11.8870543 -0.635218116,8.1479209 0.958426547,5.19859245 C0.362610922,4.64488988 1.77635684e-15,3.85696061 1.77635684e-15,3 C1.77635684e-15,1.34314575 1.34314575,0 3,0 C4.05578153,0 4.99550387,0.548604454 5.53118943,1.38857386 C7.13331436,0.870388378 8.86656393,0.87047539 10.4686442,1.38883492 C11.0042973,0.54872586 11.9440985,0 13,0 C14.6568542,0 16,1.34314575 16,3 C16,3.85728368 15.6371171,4.64546837 15.0409254,5.19919446 Z M11.6739378,4.25615174 C9.51767043,2.58136374 6.48175307,2.58128306 4.32539929,4.25590936 C4.12709627,4.40984443 3.9374044,4.57716007 3.75724177,4.75733528 C3.59081091,4.92377765 3.43528182,5.09841762 3.29098637,5.28057058 C1.42620519,7.63573974 1.58159759,11.0668696 3.75724256,13.2426622 C6.10019228,15.5857792 9.89883516,15.5857792 12.2417837,13.2426604 C14.4173784,11.0669216 14.5728159,7.63590549 12.7080959,5.28079481 C12.5638406,5.098527 12.4082659,4.92382979 12.241782,4.7573346 C12.0617144,4.57725423 11.8721275,4.41001982 11.673998,4.2560602 Z M9,8.5 L11.5,8.5 C12.0522847,8.5 12.5,8.94771525 12.5,9.5 C12.5,10.0522847 12.0522847,10.5 11.5,10.5 L8,10.5 C7.44771525,10.5 7,10.0522847 7,9.5 L7,6 C7,5.44771525 7.44771525,5 8,5 C8.55228475,5 9,5.44771525 9,6 L9,8.5 Z M2.3429791,3.34317082 C2.75249898,2.93362237 3.20009885,2.57328624 3.67877856,2.26556041 C3.49956592,2.10024678 3.26026287,2 3,2 C2.44771525,2 2,2.44771525 2,3 C2,3.19546353 2.056606,3.38019899 2.15593231,3.53652049 C2.21710239,3.47115622 2.27945582,3.4066985 2.3429791,3.34317082 Z M13.6560445,3.34317003 C13.7197691,3.4068989 13.7823164,3.4715637 13.8436728,3.53714072 C13.9432428,3.380689 14,3.19572381 14,3 C14,2.44771525 13.5522847,2 13,2 C12.7395413,2 12.5000769,2.10039702 12.3208216,2.26592976 C12.7992853,2.57357499 13.2466902,2.93378655 13.6560445,3.34317003 Z" />
      </g>
    </svg>
  )
}

Alarm.propTypes = {
  width: PropTypes.string,
  height: PropTypes.number,
  color: PropTypes.number,
  className: PropTypes.string
}
