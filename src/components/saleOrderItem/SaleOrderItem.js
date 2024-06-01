import React, { useState } from 'react'
import './SaleOrderItem.css'
const schema = [
    {
        "customer_id": 11908,
        "items": [
        {
        "sku_id": 220,
        "price": 120,
        "quantity": 25
        } ],
        "paid": false,
        "invoice_no": "Invoice - 1212121",
        "invoice_date": "7/5/2024"
    },
    {
        "customer_id": 11909,
        "items": [
        {
        "sku_id": 221,
        "price": 1200,
        "quantity": 120
        } ],
        "paid": false,
        "invoice_no": "Invoice - 1212122",
        "invoice_date": "17/5/2024"
    },
    {
        "customer_id": 11910,
        "items": [
        {
        "sku_id": 222,
        "price": 550,
        "quantity": 55
        } ],
        "paid": true,
        "invoice_no": "Invoice - 1212122",
        "invoice_date": "10/5/2024"
    }

]
const SaleOrderItem = () => {
    const [saleOrder, setSaleOrder] = useState(schema)
    const [quantity, setQuantity] = useState(0)
  return (
    <div className='sale-main-container'>
        {
            saleOrder.map((order, index) => (
                <ul key={index} mt={4} className='list-card'>
                    {order.items.map((item, index) =>(
                        <li key={index}>
                            <div className='list-item-container'>
                                <div className='quantity-container'>
                                    <p>SKU ID: {item.sku_id}</p>
                                    <p>Quantity: {item.quantity}</p>
                                </div>                                
                                <div className='price-container'>
                                    <p>Price: Rs.{item.price}</p>
                                </div>
                            </div>
                            <hr />
                            <div className='input-list-container'>
                                <div className='input-container'>
                                    <label htmlFor='selling_rate'>Selling Rate</label>
                                    <input type='text' id='selling_rate' placeholder='Enter Selling Rate...' className='input'/>
                                </div>
                                <div className='input-container'>
                                    <label htmlFor="Total">Total Items</label>
                                    <input type='text' id='Total'placeholder='Enter Total Quantity...' className='input'/>
                                </div>
                            </div>
                            <p className='remaining-item'>{item.quantity - quantity} Item(s) Remaining</p>
                        </li>
                    ))}
                </ul>
            ) 
        )}
    </div>
  )
  
  
}



export default SaleOrderItem