import React , { Component } from 'react';
import { Container , ListGroup , ListGroupItem , Button } from 'reactstrap';
import { CSSTransition , TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import * as types from '../actions/itemActions';

class ShoppingList extends Component {

    // state = {
    //     items: [
    //         { id: uuid(), name: 'Bread' },
    //         { id: uuid(), name: 'Butter' },
    //         { id: uuid(), name: 'Milk' },
    //         { id: uuid(), name: 'Jam' },
    //     ]
    // }

    componentDidMount(){
        this.props.onGetItems();
    }

    deleteItemHandler = id => {
        this.props.deleteItems(id);
    }

    render(){
    
        const {items} =  this.props.item;
        return (
            <Container>
                <ListGroup>
                        <TransitionGroup className="shopping-list">
                            {items.map( ({_id,name}) => (
                                <CSSTransition key={_id} timeout={500} classNames="fade">
                                    <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteItemHandler.bind(this,_id)}
                                        > 
                                        &times;
                                        </Button>
                                      {name} 
                                    </ListGroupItem>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onGetItems: () => dispatch(types.getItems()),
        deleteItems: (id) => dispatch(types.deleteItems(id))
    }
}

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingList);