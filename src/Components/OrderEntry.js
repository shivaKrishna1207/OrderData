import React, { useState } from 'react';

import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import OrderBook from './OrderBook';

const OrderEntry = () => {
    const [toggle, setToggleValue] = useState({
        buy: true,
        sell: false,
    });

    const [price, setPrice] = useState();

    const [quantity, setQuantity] = useState();

    const [data, setOrderData] = React.useState();

    React.useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        return fetch(`http://localhost:3001/book`)
            .then(response => response.json().then(json => { setOrderData(json) }));
    }

    const handleChange = (event) => {
        setToggleValue({ ...toggle, [event.target.name]: event.target.checked });
    };

    const submit = (e) => {
        e.preventDefault();
        if (price && quantity) {
            const toggleValue = toggle.buy ? 'buy' : 'sell';
            fetch(`http://localhost:3001/${toggleValue}`, {
                method: 'POST',
                body: JSON.stringify({ price, quantity }),
                headers: { 'Content-Type': 'application/json' },
            })
            alert('Your ordered has been placed successfully');
            getData();
            //clearing input values
            setPrice('');
            setQuantity('');

        }
        else {
            alert("Please enter price and quantity")
        }
    };

    return (
        <>
            <h1> Order Entry </h1>
            <form onSubmit={submit}>
                <div>
                    <label>
                        Price:
                <input
                            type="text"
                            name="price"
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                    </label>
                </div>
                <br />
                <div>
                    <label>
                        Quantity:
                <input
                            type="text"
                            name="quantity"
                            value={quantity}
                            onChange={e => setQuantity(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <FormControlLabel
                        value={toggle.buy ? 'buy' : 'sell'}
                        control={
                            <Switch color="primary" checked={toggle.buy}
                                name="buy" onChange={handleChange} />}
                        label={toggle.buy ? 'buy' : 'sell'}
                        labelPlacement={toggle.buy ? 'buy' : 'sell'}
                    />
                </div>
                <div>
                    <input type="submit" name="Submit" />
                </div>
            </form>
            <br />
            <OrderBook data={data} />
        </>
    );
}

export default OrderEntry;
