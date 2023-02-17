import React, { useState, useEffect } from 'react';

export const UserStatusComponent = ({ userId = '1000' }) => {
  const [userStatus, setUserStatus] = useState('');

  const loadUserStatus = (userId) => {
    return new Promise((resolve, reject) => {
      fetch(`https://mocki.io/v1/6b447775-dcbd-43dd-8fab-2629ad8fbdde`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to load user status for user ${userId}`);
          }
          return response.text();
        })
        .then((status) => {
          resolve(status);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  useEffect(() => {
    loadUserStatus(userId)
      .then((status) => {
        setUserStatus(status);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userId]);

  return (
    <div>
      <h2>User Status</h2>
      {userStatus ? (
        <span className="dot"></span>
      ) : (
        <p>Loading user status...</p>
      )}
    </div>
  );
};

export default UserStatusComponent;
