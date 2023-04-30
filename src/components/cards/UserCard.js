import React from 'react'

export const UserCard = ({name, playlist, follower, following}) => {
  return (
    <div>
      <div className="user-card">
        <div>
          <img src='/images/rema.png' alt="user" />
        </div>
        <div className='user-dets'>
          <h3>{name}</h3>
          <div className='user-count'>
            <div className='count'>
              <p>Playlist</p>
              <span>{playlist}</span>
            </div>
            <div className='count'>
              <p>Followers</p>
              <span>{follower}</span>
            </div>
            <div className='count'>
              <p>Following</p>
              <span>{following}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
