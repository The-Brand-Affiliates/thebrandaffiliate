import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../DashboardComponent/body.css"
import img from '../../img/image.png'
import { useState} from 'react';
import Avatar from 'react-avatar-edit';


function Sidebar(){

    const[dialogs, setDialogs] = useState(false);
    const [Crop, setCrop] = useState(false);

    const onCrop = (view) =>{
        setCrop(view)
    }
    const onClose = (view) =>{
        setCrop(view)
    }

    return <>
    <nav className='sidebar p-auto rounded-2'>
            <div className=" list">
                <a href="#" className=" " >
                    <img src={img} 
                    alt="profile"
                    onClose={onClose}
                    onCrop= {onCrop} 
                    className='rounded-circle img logo'
                    onClick={() => setDialogs(true)}
                    />
                </a>
            
            <ul className="list-unstyled components">
            <li className="">
            <a href="/profile/basicdetail"className="btn-1 nav-link">Basic Details</a>
            </li>
            <li>
            <a href="/profile/wallet" className='btn-1 nav-link'>Wallet</a>
            </li>
            <li>
            <a href="/profile/Thistory"className="btn-1 nav-link">Transaction History</a>
            </li>
            <li>
            <a href="/profile/bankDetail" className= 'btn-1 nav-link'>Bank Details</a>
            </li>
            </ul>
            </div>
    </nav>
    

</>
    
}

export default Sidebar;
