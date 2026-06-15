import React from 'react'

export const MapDemo5 = () => {
    var products = [
  {id:1, name:"iPhone 15", category:"Electronics", price:79999, stock:25, rating:4.7, brand:"Apple", discount:10, isAvailable:false, createdAt:"2026-01-10"},
  {id:2, name:"Samsung Galaxy S24", category:"Electronics", price:69999, stock:30, rating:4.5, brand:"Samsung", discount:12, isAvailable:true, createdAt:"2026-02-15"},
  {id:3, name:"Nike Running Shoes", category:"Footwear", price:4999, stock:50, rating:4.3, brand:"Nike", discount:20, isAvailable:true, createdAt:"2026-03-01"},
  {id:4, name:"Adidas Sneakers", category:"Footwear", price:4599, stock:0, rating:2.2, brand:"Adidas", discount:18, isAvailable:true, createdAt:"2026-01-20"},
  {id:5, name:"Dell Inspiron Laptop", category:"Computers", price:55999, stock:15, rating:4.4, brand:"Dell", discount:15, isAvailable:true, createdAt:"2026-02-05"},
  {id:6, name:"HP Pavilion Laptop", category:"Computers", price:58999, stock:12, rating:4.3, brand:"HP", discount:14, isAvailable:true, createdAt:"2026-03-10"},
  {id:7, name:"Sony Headphones", category:"Accessories", price:2999, stock:60, rating:4.6, brand:"Sony", discount:25, isAvailable:true, createdAt:"2026-01-25"},
  {id:8, name:"Boat Earbuds", category:"Accessories", price:1499, stock:100, rating:4.1, brand:"Boat", discount:30, isAvailable:true, createdAt:"2026-02-18"},
  {id:9, name:"LG Smart TV", category:"Electronics", price:45999, stock:20, rating:4.5, brand:"LG", discount:17, isAvailable:true, createdAt:"2026-03-05"},
  {id:10, name:"Mi Smart Watch", category:"Wearables", price:3999, stock:70, rating:4.2, brand:"Xiaomi", discount:22, isAvailable:true, createdAt:"2026-01-30"},
  {id:11, name:"Puma T-Shirt", category:"Clothing", price:999, stock:80, rating:4.0, brand:"Puma", discount:35, isAvailable:true, createdAt:"2026-02-12"},
  {id:12, name:"Levi's Jeans", category:"Clothing", price:2499, stock:45, rating:4.4, brand:"Levis", discount:28, isAvailable:true, createdAt:"2026-03-08"},
  {id:13, name:"Canon DSLR Camera", category:"Electronics", price:65999, stock:10, rating:4.6, brand:"Canon", discount:13, isAvailable:true, createdAt:"2026-01-18"},
  {id:14, name:"Philips Trimmer", category:"Personal Care", price:1999, stock:55, rating:4.3, brand:"Philips", discount:20, isAvailable:true, createdAt:"2026-02-22"},
  {id:15, name:"Wildcraft Backpack", category:"Bags", price:1799, stock:65, rating:4.2, brand:"Wildcraft", discount:27, isAvailable:true, createdAt:"2026-03-12"}
];
  return (
    <div style={{textAlign:"center"}}>
        <table  class="table table-dark">
         <thead>
            <th>ID</th>
            <th>NAME</th>
            <th>CATEGORY</th>
            <th>PRICE</th>
            <th>STOCK</th>
            <th>RATING</th>
            <th>BRAND</th>
            <th>DISCOUNT</th>
            <th>STATUS</th>
            <th>CREADETAT</th>
         </thead>
            <tbody>
                {
                    products.map((pro)=>
                    {
                        return<tr style={{backgroundColor:pro.discount>10 ?"#c28480":"#400236",backgroundColor:pro.price>2000 ? "#c28480":"#400236"}}>
                            <td>{pro.id}</td>
                            <td>{pro.name}</td>
                            <td style={{color:pro.category=="Electronics" && "blue",fontStyle:pro.category=="Clothing" && "italic"}}>{pro.category}</td>
                            <td style={{color:pro.price>50000 ? "red":"black"}}>{pro.price}</td>
                            <td style={{color:pro.stock==0 ?"red":"green",backgroundColor:pro.stock==0 && "lightgray"}}>{pro.stock}{pro.stock==0 ? " Out of Stock":" In Stock" }</td>
                            <td style={{fontWeight:pro.rating>=4.5?"bolder":"normal",color: pro.rating < 3 ? "red" : "black"}}>{pro.rating}</td>
                            <td style={{color:pro.brand=="Apple"||pro.brand=="Sony"?"purple":"white"} }>{pro.brand}</td>
                            <td style={{backgroundColor:pro.discount>20?"yellow":"gray"}}>{pro.discount}{pro.discount>25 && "🔥"}</td> 
                            {/* <td>{pro.discount}</td> */}
                       
                            <td style={{opacity:pro.isAvailable ?1:0.5}}>{pro.isAvailable}{pro.isAvailable ? "Available":"Not Available"}</td>
                            <td>{pro.createdAt}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>

    </div>
  )
}
