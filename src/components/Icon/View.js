import React from 'react'
import PropTypes from 'prop-types'

export default function View (props) {
  const {className, color, height, width, ...restProps} = props

  return (
    <svg className={className} width={`${width}px`} height={`${height}px`} {...restProps} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(2.000000, 4.000000)">
        <path fill={color} d="M2.46906719,8.44641502 C2.9670099,9.1656656 3.54500183,9.88538735 4.19306768,10.5540267 C5.99123718,12.409281 7.95453144,13.5 10,13.5 C12.0454686,13.5 14.0087628,12.409281 15.8069323,10.5540267 C16.4549982,9.88538735 17.0329901,9.1656656 17.5309328,8.44641502 C17.6449299,8.28175249 17.7447902,8.13197047 17.8300517,8 C17.7447902,7.86802953 17.6449299,7.71824751 17.5309328,7.55358498 C17.0329901,6.8343344 16.4549982,6.11461265 15.8069323,5.44597329 C14.0087628,3.59071903 12.0454686,2.5 10,2.5 C7.95453144,2.5 5.99123718,3.59071903 4.19306768,5.44597329 C3.54500183,6.11461265 2.9670099,6.8343344 2.46906719,7.55358498 C2.35507005,7.71824751 2.25520984,7.86802953 2.16994833,8 C2.25520984,8.13197047 2.35507005,8.28175249 2.46906719,8.44641502 Z M0.125208644,7.51550017 C0.253030006,7.2847116 0.488172633,6.90123527 0.824682808,6.41516502 C1.3814276,5.6109781 2.02687317,4.80726235 2.75693232,4.05402671 C4.89626282,1.84678097 7.32046856,0.5 10,0.5 C12.6795314,0.5 15.1037372,1.84678097 17.2430677,4.05402671 C17.9731268,4.80726235 18.6185724,5.6109781 19.1753172,6.41516502 C19.5118274,6.90123527 19.74697,7.2847116 19.8747914,7.51550017 C20.0417362,7.81692839 20.0417362,8.18307161 19.8747914,8.48449983 C19.74697,8.7152884 19.5118274,9.09876473 19.1753172,9.58483498 C18.6185724,10.3890219 17.9731268,11.1927377 17.2430677,11.9459733 C15.1037372,14.153219 12.6795314,15.5 10,15.5 C7.32046856,15.5 4.89626282,14.153219 2.75693232,11.9459733 C2.02687317,11.1927377 1.3814276,10.3890219 0.824682808,9.58483498 C0.488172633,9.09876473 0.253030006,8.7152884 0.125208644,8.48449983 C-0.0417362146,8.18307161 -0.0417362146,7.81692839 0.125208644,7.51550017 Z M12.6272557,10.6657704 C14.0575784,9.19004059 14.0575784,6.80995941 12.6272566,5.33423049 C11.1799473,3.8409711 8.82005268,3.8409711 7.37274343,5.33423049 C5.94241856,6.80995872 5.94241856,9.19004128 7.37274522,10.6657713 C8.82005339,12.1590258 11.1799466,12.1590258 12.6272557,10.6657704 Z M8.80887878,6.72617706 C9.47039732,6.04365619 10.5296027,6.04365619 11.1911203,6.72617614 C11.8696236,7.42621916 11.8696236,8.57378084 11.1911203,9.27382386 C10.5296034,9.95634133 9.47039661,9.95634133 8.80887968,9.27382386 C8.13037404,8.57378015 8.13037404,7.42621985 8.80887878,6.72617706 Z" />
      </g>
    </svg>
  )
}

View.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string
}
