import React from 'react'

function MyButton() {
function handleClick(){
    alert(123)
}
  return (
    <div>
    <button type='button' className='btn' onClick={handleClick}>CLICK</button>
    </div>
  )
}

export default MyButton