import React from 'react'
import { useParams } from 'react-router-dom'

import UserSidebar from '../UserProfile/UserSidebar'
import AccountSettings from '../UserProfile/AccountSettings'
import './UserProfile.css'
import ChangePassword from '../UserProfile/ChangePassword'
import UserAddress from '../UserProfile/UserAddress'
import FeedbackForm from '../FeedbackForm/FeedbackForm'

const UserProfile = () => {

    const {activepage} = useParams()


    // alert(activepage)
  return (
    <div className='userprofile'>
    
        
        UserProfile , showing {activepage}
        

         <div className='userprofilein'>
            <div className='left'>
              <UserSidebar activepage={activepage}/>
            </div>
            <div className='right'>
              {activepage === 'accountsettings' && <AccountSettings/>}
              {activepage === 'changepassword' && <ChangePassword/>}
              {activepage === 'FeedbackForm' && <FeedbackForm/>}
              {activepage === 'address' && <UserAddress/>}
              
            </div>
         </div>
        

        </div>
        
  )
}

export default UserProfile