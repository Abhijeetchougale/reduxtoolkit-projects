import React from 'react';
import DeleteAllUser from './DeleteAllUser';

const UserDetails = () => {
    return (
        <>
           <div className="container">
                <div className="row">
                    <div className="col-8">
                        <h1>List of Users</h1>
                    </div>
                    <div className="col-4">
                        <button className='btn btn-info'>Add Users</button>
                    </div>
                </div>
                <div className="row" >
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <div className="row">
                   <DeleteAllUser/>
                </div>
            </div> 
        </>
    );
};

export default UserDetails;