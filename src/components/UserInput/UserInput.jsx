import React from 'react'

const UserInput = (props) => {
  return (
    <div>
    <form>
        <input type="text" onChange={props.changeUser} name={props.user} value={props.userName} />
        <input type="text" onChange={props.changeUser} name={props.user} value={props.userName} />
      </form>
    </div>
  )
}

export default UserInput
