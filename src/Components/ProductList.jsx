import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./body.css"

function Body(){


    return <>
    <div className="container-sm right-box">
    
    <table class="table">
    <thead className='thead'>
         <tr>
            <th scope="col">Product</th>
            <th scope="col">Status</th>
            <th scope="col">End Date</th>
            <th scope="col"> Comission(%)</th>
            <th scope="col"> Orders </th>
            <th scope="col"> Clicks</th>
            <th scope="col"> Comission Spent</th>
            <th scope="col"> Salse</th>
            <th scope="col"> Edits</th>
         </tr>
    </thead>
    
  <tbody className='table-borderless'>
    
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="1"> product</td>
      <td colspan="1"> jidjs </td>
      <td colspan="">Larry </td>
      <td>@twitter</td>
    </tr>

  </tbody>
  
</table>

</div>
    </>
    
}

export default Body;
