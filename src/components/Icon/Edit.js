import React from 'react'
import PropTypes from 'prop-types'

export default function Edit (props) {
  const {className, color, height, width, ...restProps} = props

  return (
    <svg className={className} width={`${width}px`} height={`${height}px`} {...restProps} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(2.000000, 2.000000)">
        <path fill={color} d="M15.5,8.08578644 L17.0857864,6.5 L13.5,2.91421356 L11.9142136,4.5 L15.5,8.08578644 Z M14.0857864,9.5 L10.5,5.91421356 L2.5,13.9142136 L2.5,17.5 L6.08578644,17.5 L14.0857864,9.5 Z M6.5,19.5 L1.5,19.5 C0.94771525,19.5 0.5,19.0522847 0.5,18.5 L0.5,13.5 C0.5,13.2347835 0.60535684,12.9804296 0.792893219,12.7928932 L12.7928932,0.792893219 C13.1834175,0.402368927 13.8165825,0.402368927 14.2071068,0.792893219 L19.2071068,5.79289322 C19.5976311,6.18341751 19.5976311,6.81658249 19.2071068,7.20710678 L7.20710678,19.2071068 C7.0195704,19.3946432 6.76521649,19.5 6.5,19.5 Z" />
      </g>
    </svg>
  )
}

Edit.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string
}
