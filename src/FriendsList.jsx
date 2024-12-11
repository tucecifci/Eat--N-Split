import React from 'react'
import Friend from './Friend'

function FriendsList({initialFriends}) {
  return (
    <div>
        <ul>
            {initialFriends.map((friend) => (
               <Friend key={friend.id} friend={friend} />
                
            ))}
        </ul>
    </div>
  )
}

export default FriendsList


