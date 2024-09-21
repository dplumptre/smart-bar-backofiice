import { data } from "autoprefixer";
import { useEffect, useState } from "react";


const HomePage = () => {

    const [orders, setOrders]= useState([]);

    useEffect( ()=>{
      getOrders();
    },[]);


    const apiUrl = "http://127.0.0.1:2125";
    const apiKey = "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIwNzAxMTExMTExMSIsImlhdCI6MTcyNTIxNDE4OSwiZXhwIjoxNzI1ODE4OTg5fQ.SuAO4qXws6y1-r5BC6QovG-pGZqW0z4-bzteORDyHcJCdWZ5uJYz62dE1Na91ve4";
    const getOrders = async ()=>{
      try{
      const response = await fetch(apiUrl+"/api/orders", {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data =  await response.json();

      console.log(data);
      setOrders(data.data)
    }catch(e){
      console.log("Errors: "+e.message)
    }
    }


    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-gray-700">

{orders.length > 0 && orders.map((order) => (
          
        <div className="border border-gray-700" key={order.orderReference}>
        <table className="border-collapse border border-slate-500 w-full">
          <thead>
            <tr>
              <th className="px-1 border border-slate-300 text-left">
                #{order.orderReference} Demola{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-1 border border-slate-300 ...">{order.paymentMethods.name}</td>
            </tr>
            <tr>
              <td className="border border-slate-300 ">
                <h5 className="px-1">Details</h5>
                <ul className="list-decimal px-5 text-xs ">
                  {order.menuItemEntities.map( (menu)=>(
                   <li key={menu.id}>
                   <div className="columns-2">
                     <div>{menu.title}</div>
                     <div>{menu.quantity}</div>
                   </div>
                 </li>
                  ) )}
                  {orders.length == 0 (
                    <div>There is no list!</div>
                  )}
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 font-bold px-2">
                N {order.totalPrice}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      ))}

        
      </div>
    );
  };
  
  export default HomePage;
  