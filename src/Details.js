import React from "react";

const Details = ({details}) => {
    return ( 
        <div className="detail-box">
            <div className="detail1">
                <h4>Name: {details.name}</h4>
            </div>
            <div className="detail2">
                <h4>email: {details.email}</h4>
            </div>
            <div className="detail3">
                <h4>Phone no.: {details.phone}</h4>
            </div>
        </div>
     );
}
 
export default Details;