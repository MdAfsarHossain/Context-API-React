import React, { useContext } from 'react';
import { AssetContext } from '../GrandPa/GrandPa';

const Special = ({asset='ring'}) => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>Special</h2>
            {asset && <p>Has: {asset}</p>}
            {gift && <p>Has Gift: {gift}</p>}
            
        </div>
    );
};

export default Special;