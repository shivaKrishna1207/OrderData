
import React from 'react';
import Table from './Table';

const OrderBook = (props) => {

    const title = "Order Book";

    return (
        <>
            {((props.data && JSON.stringify(props.data).length > 0) ? <Table title={title}
                tableData={props.data}
            /> : "Loading Order data...")}
        </>

    )
}

export default OrderBook
