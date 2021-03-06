import React from 'react';
import { useNavigate } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size, linkUrl, match}) =>{
    let navigate = useNavigate();
    return(    
        <div className={`${size} menu-item`}
            // onClick = {
            //     () => { 
            //         if(linkUrl === 'shop/hats'){
            //             navigate("/hats");
            //         }
            //     }}
            
            onClick={() => { navigate(`${linkUrl}`) }}
            
            >
            <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
            }}
            />
            <div className="content" >
                <h1 className="title">{title.toUpperCase() }</h1>    
                <span className="subtitle">Shop Now</span>
            </div>
        </div>    
    );
}
export default MenuItem;