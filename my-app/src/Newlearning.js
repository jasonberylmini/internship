import React from 'react'

function Newlearning() {
  let array = ["abc","dbc","rdc","hdf"]
  return (
    <div>
      {array.map((item)=>(<li>{item}</li>))}
    </div>
  )
}

export default Newlearning
