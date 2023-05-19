import React from 'react';

function User({user}) {
    return(
        <div>
            {user.username} ({user.email})
        </div>
    );
}

function UserList() {
    const users = [
        {
            id: 1,
            username: 'donghun',
            email: 'donghun4754@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@gmail.com'
        },
        {
            id: 3,
            username: 'laugher',
            email: 'laugher@gmail.com'
        } 
    ];
    return (
        <div>
            {users.map( (user, unique) => (
                <User user={user} key={unique}/>
            ))}
        </div>
    );
}

export default UserList;