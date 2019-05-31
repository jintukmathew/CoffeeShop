import React, {Component} from 'react';
import MenuItems from "../../components/MenuItems";
import {connect} from 'react-redux';
import {fetchItems} from "../../action/index";

import LayoutContainer from "../../components/LayoutContainer"

class HomePage extends Component {

    render() {
        return (
            <LayoutContainer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="row justify-content-md-center">
                            <div className="panel panel-primary">
                                <div className="panel-body">
                                    <div>
                                        <div className="panel panel-primary">
                                            <div className="panel-body">
                                                <div className="panel-heading">
                                                    <div className="container-fluid">
                                                        <div className="row justify-content-md-center">
                                                                <h2 className="text-center">Menu</h2>
                                                        </div>
                                                        <div className="row justify-content-md-center">
                                                            <div className="card-body">
                                                                {console.log(this.props.stateArray.inventory)}
                                                                {
                                                                    this.props.stateArray.inventory.map((item,index) => {
                                                                        return(
                                                                            <MenuItems
                                                                                key={index}
                                                                                item={item}
                                                                            />
                                                                        );
                                                                    })
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </LayoutContainer>
        );
    }

    componentDidMount() {
        const { handleMount } = this.props;
        handleMount();
      }
}

function mapStateToProps(state) {
    const stateArray = state.todos;
    console.log('jiiiiiiiiiiiiii',stateArray);
    return {stateArray};
}
const mapDispatchToProps = dispatch => ({
    handleMount: () => dispatch(fetchItems())
});


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);