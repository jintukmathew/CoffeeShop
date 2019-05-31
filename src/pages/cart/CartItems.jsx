

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeFromCart} from "../../action/index";
import LayoutContainer from "../../components/LayoutContainer"

class CartItems extends Component {

    render(){
        console.log(this.props);

        return (
            <LayoutContainer>
                <div>
                    {this.getdata()}
                </div>
                
                <div className="text-center">
                    <label className="h1 control-label">Total: {this.props.stateArray.total.totalvalue}</label>
                </div>
            </LayoutContainer>
        );
    }

     getdata(){
        console.log(this.props.stateArray);
        return this.props.stateArray.cart.map((item) => {
            return (
                <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="row justify-content-md-center">
                            <div className="panel panel-primary itemCards cartcard">
                                <div className="panel-body">
                                    <div className="row justify-content-md-center">
                                        <div className="col-md-12 col-xs-12 col-lg-12 col-sm-12">
                                            <div
                                                className="col-md-4 col-lg-4 col-sm-4 col-xs-4 col-md-offset-0 col-xs-offset-0 col-lg-offset-0">
                                                <label>{item.fooditem}</label>
                                            </div>
                                            <div
                                                className="col-md-3 col-lg-3 col-sm-3 col-xs-3 col-md-offset-1 col-xs-offset-1 col-lg-offset-1">
                                                <label>Price: ${item.price} <br/> QTY: {item.qty}</label>
                                            </div>
                                            <div
                                                className="col-md-2 col-lg-2 col-sm-2 col-xs-2 col-md-offset-1 col-xs-offset-1 col-lg-offset-1">
                                                <input type="button" value="Remove"
                                                    className="btn-group-lg btn-group-sm btn-group-xs btn-primary"
                                                    id="btnAdd"
                                                    onClick={() => {
                                                        this.props.removeFromCart(item);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
        })
    }
}

function mapStateToProps(state) {
    
    const stateArray = state.todos;
    console.log('jiiiiiiiiiiiiii',stateArray);
    return {stateArray};
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart : (item) => dispatch(removeFromCart(item))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
