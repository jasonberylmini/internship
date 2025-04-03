import React from 'react'

function learning() {
  let array = ["abc","dbc","rdc","hdf"]
  return (
    <div>
      {array.map((item)=>(<li>{item}</li>))}
    </div>
  )
}

export default learning
