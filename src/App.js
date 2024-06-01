import { Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import Login from './components/login/Login.js'
import Home from './components/home/Home.js'
import ProtectedRoute from './components/protectedRoute/ProtectedRoute.js'

const customerData = [
  {
    id: 9,
    customer: 11908,
    customer_profile: {
      id: 11908,
      name: "Ram",
      color: [182, 73, 99],
      email: "jesus_christ@churuch.com",
      pincode: "Mumbai",
      location_name: "Mumbai, Maharashtra, India",
      type: "C",
      profile_pic: null,
      gst: ""
    }
  },
  {
    id: 10,
    customer: 11909,
    customer_profile: {
      id: 11909,
      name: "Dhilip",
      color: [183, 74, 100],
      email: "dhilip_christ@churuch.com",
      pincode: "Mumbai",
      location_name: "Trichy, TamilNadu, India",
      type: "C",
      profile_pic: null,
      gst: ""
    }
  },
  {
    id: 11,
    customer: 11910,
    customer_profile: {
      id: 11910,
      name: "Alex",
      color: [184, 75, 101],
      email: "Alex_christ@churuch.com",
      pincode: "Trichy",
      location_name: "Trichy, TamilNadu, India",
      type: "C",
      profile_pic: null,
      gst: ""
    }
  }
];

const salesData = [
  {
    customer_id: 11908,
    items: [
      {
        sku_id: 220,
        price: 120,
        quantity: 25
      }
    ],
    paid: false,
    invoice_no: "Invoice - 1212121",
    invoice_date: "7/5/2024"
  },
  {
    customer_id: 11909,
    items: [
      {
        sku_id: 221,
        price: 1200,
        quantity: 120
      }
    ],
    paid: false,
    invoice_no: "Invoice - 1212122",
    invoice_date: "17/5/2024"
  },
  {
    customer_id: 11910,
    items: [
      {
        sku_id: 222,
        price: 550,
        quantity: 55
      }
    ],
    paid: true,
    invoice_no: "Invoice - 1212122",
    invoice_date: "10/5/2024"
  }
];

const productData = [
  {
    "id": 209,
    "display_id": 8,
    "owner": 1079,
    "name": "New Product",
    "category": "The god of War",
    "characteristics": "New Product Characteristics",
    "features": "",
    "brand": "New Product Brand",
    "sku": [
      {
        "id": 248,
        "selling_price": 54,
        "max_retail_price": 44,
        "customer": 11908,
        "customer_profile": {
          "id": 11908,
          "name": "Ram",
          "color": [182, 73, 99],
          "email": "jesus_christ@church.com",
          "pincode": "Mumbai",
          "location_name": "Mumbai, Maharashtra, India",
          "type": "C",
          "profile_pic": null,
          "gst": ""
        },
        "amount": 33,
        "unit": "kg",
        "quantity_in_inventory": 0,
        "product": 209
      },
      {
        "id": 247,
        "selling_price": 32,
        "max_retail_price": 32,
        "amount": 33,
        "unit": "kg",
        "quantity_in_inventory": 0,
        "product": 209
      },
      {
        "id": 246,
        "selling_price": 23,
        "max_retail_price": 21,
        "amount": 22,
        "unit": "kg",
        "quantity_in_inventory": 1,
        "product": 209
      }
    ],
    "updated_on": "2024-05-24T12:46:41.995873Z",
    "adding_date": "2024-05-24T12:46:41.995828Z"
  }
];

const combinedData = salesData.map(sale => {
  const customer = customerData.find(cust => cust.customer === sale.customer_id);
  const product = productData[0].sku.find(prod => prod.customer === sale.customer_id);
  return {
    CustomerName: customer?.customer_profile.name || "Unknown",
    Price: sale.items.reduce((total, item) => total + item.price * item.quantity, 0),
    LastModified: productData[0].updated_on
  };
});

console.log(combinedData);


function App() {
  const [isAthendicated, setAuthendicated] = useState(false)
  

  return (
    <Routes>
      <Route path='/login' element = {<Login setAuthendicated = {setAuthendicated}/>}/>
      <Route path='/' element = {<ProtectedRoute isAthendicated={isAthendicated}><Home combinedData={combinedData}/></ProtectedRoute>}/>
      <Route path="*" element ={<Navigate to='/login' />}/>
    </Routes>  
    
  )
}

export default App;