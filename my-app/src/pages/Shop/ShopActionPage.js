import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';
import callApi from '../../utils/apiCaller';



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
            callApi(`products/${id}`, 'GET', null).then(res => {
                var data = res.data;
                this.setState({
                    name: data.name,
                    id: data.id,
                    price: data.price,
                    inventory: data.inventory,
                    rating: data.rating,
                    img: data.img
                })
            })
        }
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
        var _id = match.params.id;
        if (id) {
            callApi(`products/${_id}`, 'PUT', {
                name: name,
                id: id,
                price: price,
                inventory: inventory,
                rating: rating,
                img: img
            }).then(res => {
                history.push("/shop")
            }).catch(err => {
                console.log(err)
            })
        } else {
            callApi('products', 'POST', {
                name: name,
                id: id,
                price: price,
                inventory: inventory,
                rating: rating,
                img: img
            }).then(res => {
                history.push("/shop")
            }).catch(err => {
                console.log(err)
            })
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
export default ShopActionPages;