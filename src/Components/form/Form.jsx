import './form.css'
import { Link, useNavigate } from 'react-router-dom';

function Form(props) {
  const { 
          mobileData, 
          mobileList, 
          setMobileList ,
          setMobileData,
          mobileListId,
          isEditing,
          setIsEditing,
          handleInputChange
        } = props; 

  const navigate = useNavigate();

  const handleAddMobileList = (event) => {
    event.preventDefault();
  
    if(mobileData.brandName.trim() !== "" && mobileData.mobileName.trim() !== "" && mobileData.mobileQuantity.trim() !== "" && mobileData.mobilePrice.trim() !== ""){
      setMobileList([...mobileList, {id: Date.now(), brandName: mobileData.brandName, mobileName: mobileData.mobileName, mobileQuantity: mobileData.mobileQuantity, mobilePrice: mobileData.mobilePrice } ]);
      setMobileData({brandName: "", mobileName: "", mobileQuantity: "", mobilePrice: "" });
      alert("Successfully Added List");
      navigate('/mobile');
    }
    else{
      alert("Please Enter All Input Data");
    }
  }

  const handleUpdateFormSubmit = (event) => {
    event.preventDefault();
  
    if(mobileData.brandName.trim() !== "" && mobileData.mobileName.trim() !== "" && mobileData.mobileQuantity.trim() !== "" && mobileData.mobilePrice.trim() !== ""){
      const updatedMobileList = mobileList.map((item) => {
        if(item.id === mobileListId){
          return {id: Date.now(), brandName: mobileData.brandName, mobileName: mobileData.mobileName, mobileQuantity: mobileData.mobileQuantity, mobilePrice: mobileData.mobilePrice } 
        }else{
         return item ;
        }
      });
      setMobileList(updatedMobileList);
      setMobileData({brandName: "", mobileName: "", mobileQuantity: "", mobilePrice: "" });
      alert("Successfully Updated");
      setIsEditing(false);
      navigate('/mobile');
    }
    else{
      alert("Please Enter All Input Data");
    }
  };
 
  const handleMobileListCancel = () => {
    setMobileData({brandName: "", mobileName: "", mobileQuantity: "", mobilePrice: "" });
    setIsEditing(false);
  };

  return (
    <div className='container'>
        <div className="form_background"> 
            <nav>
              <div>
                { isEditing ?
                  <h1>Update Mobile</h1> 
                  : 
                  <h1>Add Mobile </h1>
                }
                </div>
            </nav>  

          <form onSubmit= {handleAddMobileList}>
            <div className='form_item_container'>
                <div>
                    <label htmlFor="brand">Brand Name</label>
                    <input type="text" name='brandName' value={mobileData.brandName} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="book">Mobile Name</label>
                    <input type="text" name='mobileName' value={mobileData.mobileName} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="">Quantity</label>
                    <input type="number" name='mobileQuantity' value={mobileData.mobileQuantity} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="">Price</label>
                    <input type="number" name='mobilePrice' value={mobileData.mobilePrice} onChange={handleInputChange}/>
                </div>
                <div className='SubmitButtonContainer'>
                {
                  isEditing ? 
                   <div className='SubmitButtonContainer'>
                     <button className="button muted-button" onClick={handleUpdateFormSubmit}>Update</button>
                     <button className="button muted-button" onClick={handleMobileListCancel}>Cancel</button>
                  </div> 
                  :
                  <button> Submit</button>
                }
                </div>
            </div>
          </form>

          <div className="home_page_container">

              <Link to="/">
                <button>Go To Home Page</button>
              </Link>

           </div>
        </div>
    </div>
  )
}

export default Form