import React from 'react'

function MyProfile({ data }) {
    return (
        <div>
            <h1>My Name is {data.name}</h1>
        </div>
    )
}

export default MyProfile
