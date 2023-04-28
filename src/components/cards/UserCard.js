import React from 'react'

export const UserCard = () => {
  return (
    <div>
      <div className="user-card">
        <div>
          <img src='/images/rema.png' alt="user" />
        </div>
        <div className='user-dets'>
          <h3>Victoria Adams</h3>
          <div className='user-count'>
            <div className='count'>
              <p>Playlist</p>
              <span>25</span>
            </div>
            <div className='count'>
              <p>Followers</p>
              <span>25</span>
            </div>
            <div className='count'>
              <p>Following</p>
              <span>25</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
