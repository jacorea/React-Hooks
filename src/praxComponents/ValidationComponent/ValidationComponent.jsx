import React from 'react'

const validationComponent = (props) => {
  //checking validation 
  let validation = null;
  if (props.textLength < 5 ) {
      validation = (
        <div>
            <p>Text is too short</p>
        </div>
      )
  } else {
      validation = (
          <div>
              <p>text long enough</p>
          </div>
      )
  }

  return (
    <div>
        {validation}
    </div>
  )
}

export default validationComponent
