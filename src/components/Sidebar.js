import React from 'react'

export default function Sidebar() {
    return (
        <div>
            <div className="d-flex vh-100 position-fixed sidebar">
                <ul className="nav flex-column bg-info">
                <a href="#" className="navbar-brand text-white p-2">Logo</a>
                    <li className="nav-item"><a href="#" className="text-white nav-link">Users</a></li>
                    <li className="nav-item"><a href="#" className="text-white  nav-link">Posts</a></li>
                </ul>
            </div>
        </div>
    )
}
