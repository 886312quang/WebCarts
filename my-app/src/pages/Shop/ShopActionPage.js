import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';

import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from './../../actions/index';
import { connect } from 'react-redux';



class ShopActionPages extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            id: '',
            price: '',
            inventory: '',
            rating: '',
            img: '',
        }
    }
    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id
            this.props.onEditProduct(id);
        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.itemEditing)
        var {itemEditing} =nextProps;
        this.setState({
            name: itemEditing.name,
            id: itemEditing.id,
            price: itemEditing.price,
            inventory: itemEditing.inventory,
            rating: itemEditing.rating,
            img: itemEditing.img,

        })
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({

            [name]: value

        })
    }
    onSave = (e) => {
        e.preventDefault();
        var { id, name, img, rating, inventory, price } = this.state;
        var { history, match } = this.props;
        var product = {
            name: name,
            id:id,
            img:img,
            rating:rating,
            inventory:inventory,
            price:price
        }

        var _id = null;
        if (match) {
            _id = match.params.id;
        }
        else {
            _id = 0;
        }
        if (_id === 0) {
            this.props.onAddProduct(product);
            history.goBack();
        }
        else{
           this.props.onUpdateProduct(product,_id);
           history.goBack();
        }
    }

    render() {
        var { id, name, img, rating, inventory, price } = this.state;
        return (
            <Container>
                <form onSubmit={this.onSave}>
                    <label >Name</label>
                    <input type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        value={name}
                        onChange={this.onChange}
                    />
                    <label >Img</label>
                    <input type="text"
                        name="img"
                        id="img"
                        className="form-control"
                        value={img}
                        onChange={this.onChange}
                    />
                    <label >Id</label>
                    <input type="Number"
                        name="id"
                        id="id"
                        className="form-control"
                        value={id}
                        onChange={this.onChange}
                    />
                    <label >Inventory</label>
                    <input type="Number"
                        name="inventory"
                        id="inventory"
                        value={inventory}
                        onChange={this.onChange}
                        className="form-control"
                    />
                    <label >Prices</label>
                    <input type="Number"
                        name="price"
                        id="price"
                        value={price}
                        onChange={this.onChange}
                        className="form-control"
                    />
                    <label>Rating</label>
                    <input type="Number"
                        name="rating"
                        id="rating"
                        value={rating}
                        onChange={this.onChange}
                        className="form-control"
                    />
                    <Button type="submit" className="btn btn-danger">Create</Button>
                </form>
            </Container>
        )
    }
}
const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing
    }
}
const mapDispatchToProps = (dispatch,props)=>{
    return {
        onAddProduct: (product) =>{
            dispatch(actAddProductRequest(product))
        },
        onEditProduct: (id) =>{
            dispatch(actGetProductRequest(id))
        },
        onUpdateProduct: (product,id) => {
            dispatch(actUpdateProductRequest(product,id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ShopActionPages);