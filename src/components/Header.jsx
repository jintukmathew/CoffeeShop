

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'

class Header extends Component {

    render(){
        console.log(this.props);

        return (
            <div>
                <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <Link to="/home"><span className="navbar-brand" href="#">CCN coffee online</span></Link>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/mycart"><span className="glyphicon glyphicon-shopping-cart"></span> {this.props.stateArray.total.totalvalue}</Link></li>
                    </ul>
                </div>
                </nav>
            </div>
        );
    }

}

function mapStateToProps(state) {
    const stateArray = state.todos;
    console.log('jiiiiiiiiiiiiii',stateArray);
    return {stateArray};
}


export default connect(mapStateToProps)(Header);
