import React from 'react'
import Friend from './Friend'

function FriendsList({friends}) {
  return (
    <div>
        <ul>
            {friends.map((friend) => (
               <Friend key={friend.id} friend={friend} />
                
            ))}
        </ul>
    </div>
  )
}

export default FriendsList


