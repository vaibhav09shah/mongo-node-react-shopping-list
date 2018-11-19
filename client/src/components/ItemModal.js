import React , { Component } from 'react';
import {
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    Form,
    FormGroup, 
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux'
import * as types from '../actions/itemActions';

class ItemModal extends Component {

    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    };


    onSubmit = event => {
        event.preventDefault();
        const newItem = {
            name: this.state.name
        }

        // Add Item via AddItem Action
        this.props.addItem(newItem);   

        // CLose Modal
        this.toggle();
    }

    render(){
        return (
           
                <div>
                    <Button
                        color="dark"
                        style={{marginBottom: '2rem'}}
                        onClick={this.toggle}
                    >
                    Add Item
                    <Modal
                        isOpen={this.state.modal}
                        toggle={this.toggle}
                    >
                    <ModalHeader toggle={this.toggle}> Add to Shopping List </ModalHeader>
                    <ModalBody>
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup>
                                        <Label for="item">Item</Label>
                                        <Input
                                            type="text"
                                            name="name"
                                            id="itemm"
                                            placeholder="Add Shopping Item"
                                            onChange={this.onChange}
                                        />
                                    <Button color="dark" style={{marginTop: '2rem'}} block> Add Item </Button>   
                            </FormGroup>    
                            </Form>
                    </ModalBody>
                    </Modal>
                    </Button>
                </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.item
});

const mapDispatchToProps = dispatch => {
    return {
        addItem: (item) => dispatch(types.addItem(item))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemModal);