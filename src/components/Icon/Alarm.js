// @flow
import React from 'react';

export default function Alarm(props: SVGProps) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M19.04 8.2a8.005 8.005 0 0 1-1.18 9.246l1.847 1.847a1 1 0 0 1-1.414 1.414l-1.973-1.972a8.01 8.01 0 0 1-8.64 0l-1.973 1.972a1 1 0 1 1-1.414-1.414l1.847-1.847A8.005 8.005 0 0 1 4.958 8.2a3 3 0 1 1 4.573-3.81 8.034 8.034 0 0 1 4.938 0 3 3 0 1 1 4.572 3.81zm-3.366-.944A6.002 6.002 0 0 0 7.29 8.281a6 6 0 1 0 8.383-1.025zM13 11.5h2.5a1 1 0 0 1 0 2H12a1 1 0 0 1-1-1V9a1 1 0 1 1 2 0v2.5zM6.343 6.343c.41-.41.857-.77 1.336-1.077a1 1 0 0 0-1.523 1.27c.061-.065.123-.13.187-.193zm11.313 0c.064.064.126.129.188.194A.999.999 0 0 0 17 5a1 1 0 0 0-.68.266c.48.308.927.668 1.336 1.077z" />
    </svg>
  );
}
