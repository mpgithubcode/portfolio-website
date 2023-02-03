import React from 'react'

const Button = ({ styles, text }) => {
  return (
    <a href="https://cloud.mperry.net/apps/forms/s/42cmBmZKXtpXkERXLHqA84oL">
    <button type="button" className={`py-4 px-6 bg-textPrimaryColor font-poppins font-medium text-[18px] text-textSecondaryColor outline-none ${styles} rounded-[10px]`}>{text}</button>
    </a>
  )
}

export default Button
