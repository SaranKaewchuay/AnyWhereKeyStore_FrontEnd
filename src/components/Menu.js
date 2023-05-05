import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
    render() {
        return (
            <div>
                <div class="sidebar-box">
                    <ul class="uk-nav">
                        <li><Link to="/" ><i class="ico_home"></i><span>Home</span></Link></li>
                        <li class="uk-nav-header">Main</li>
                        <li><Link to="/game-store"><i class="ico_store"></i><span>Game Store</span></Link></li>
                        <li><Link to="/admin-product"><i class="ico_community"></i><span>Admin</span></Link></li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default Menu;