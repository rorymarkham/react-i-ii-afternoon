import React from 'react'

function Card(props){
    const mappedUser = props.filterdUser.map(user => (
        <div className='page-container'>
            <h1>{user.id}/25</h1>
        </div>    
    ))
    return(
        <div className='card-container'>
            {mappedUser}
        </div>
    )
}

export default Card