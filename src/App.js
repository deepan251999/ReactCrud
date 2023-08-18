import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/home/Home';
import Form from './Components/form/Form'
import Mobile from './Components/mobile/Mobile';
import { useState } from 'react';

function App() {
  const [mobileList, setMobileList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [mobileData, setMobileData] = useState({id: Date.now(), brandName: "", mobileName: "", mobileQuantity: "", mobilePrice: ""});
  const [mobileListId, setMobileListId] = useState('');

  const handleInputChange = event => {
    setMobileData({ ...mobileData, [event.target.name]: event.target.value });
  };
 
  const handleDeleteMobileList = (id) => {
    setMobileList(mobileList.filter(item => item.id !== id));
  };

  return (
    <div>
         <Router>
            <Routes>
                <Route path='/' element = {<Home/>}/>
                <Route 
                    path='form' 
                    element = {
                      <Form 
                        mobileList={mobileList}
                        setMobileList={setMobileList}
                        isEditing={isEditing} 
                        setIsEditing={setIsEditing} 
                        mobileData={mobileData}
                        setMobileData={setMobileData}
                        handleInputChange={handleInputChange} 
                        mobileListId={mobileListId}
                      />
                  }
                 />
                <Route 
                    path='mobile' 
                    element = {
                      <Mobile 
                        mobileData={mobileData} 
                        mobileList={mobileList}
                        setIsEditing={setIsEditing}
                        setMobileData={setMobileData}
                        handleDeleteMobileList={handleDeleteMobileList}
                        setMobileListId={setMobileListId}
                      />
                  }
                />
            </Routes>
         </Router>
     </div>
  );
}

export default App;
