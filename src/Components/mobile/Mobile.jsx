import React from 'react'
import './mobile.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Mobile(props) {
  const {
          mobileList, 
          setIsEditing, 
          setMobileListId, 
          setMobileData
        } = props;

  const navigate = useNavigate();

  const handleMobileEdit = (item) => {
    setIsEditing(true);
    setMobileListId(item.id);
    setMobileData({id: Date.now(), brandName: item.brandName, mobileName: item.mobileName, mobileQuantity: item.mobileQuantity, mobilePrice: item.mobilePrice });
    navigate('/form');
    console.log(item.id);
  };

  return (
    <div className='mobile_container'>
        <div className="mobile_background">
            <h1>COLLECTON OF MOBILES</h1>
            <div className="mobile_list_item_container">
             <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Brand Name</th>
                    <th>Mobile Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    mobileList.length > 0 ?(
                     mobileList.map((item, index) => {
                      return(
                        <tr key={item.id}>
                          <td>{index+1}</td>
                          <td>{item.brandName}</td>
                          <td>{item.mobileName}</td>
                          <td>{item.mobileQuantity}</td>
                          <td>{item.mobilePrice}</td>
                          <td className='action_button_container'>
                           <button className='action_edit_button'  onClick = { () => handleMobileEdit(item,item.id)}> Edit </button>
                           <button className='action_delete_button'  onClick = { () => props.handleDeleteMobileList(item.id)}> Delete </button>
                          </td>
                       </tr>
                      );
                    })
                    ) : (
                      <tr><td colSpan={6}>No Users Found</td></tr>
                    )
                  }
                </tbody>
             </table>
            </div>
            <p className='mobile_button_container'>

              <Link to="/">
                <button className='home_page_button'>GO TO HOME PAGE</button>
              </Link>

            </p>
        </div>
    </div>
  )
}

export default Mobile;