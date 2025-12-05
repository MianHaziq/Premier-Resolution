import React from 'react'

function BookButton() {
  return (
<>
  <button className="cursor-pointer w-[90px] sm:w-[105px] min-h-11 rounded-sm overflow-hidden relative z-100 border border-[#0B9444] group px-2 py-2 sm:p-1">
      <span className="relative z-10 text-[#0B9444] group-hover:text-white text-[14px] sm:text-[16px] duration-500">Contact us</span>
      <span className="absolute w-full h-full bg-[#0B9444] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500" />
      <span className="absolute w-full h-full bg-[#0B9444] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500" />
    </button>
</>  )
}

export default BookButton