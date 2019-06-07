import React from 'react'

function Controls(props){
    return(
        <div className='controls-container'>
            <button onClick={props.prev}>{`< Previous`}</button>
            <button onClick={props.next}>{`Next >`}</button>
        </div>
    )
}

export default Controls