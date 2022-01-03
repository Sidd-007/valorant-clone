import React from 'react'
import '../../CSS/Weapon.css'


function Weapon({ source, description, type, title }) {
    return (
        <div className='Weapons2'>
            <div class="Weapon">
                <img class="screenshot" href="#!" src={`img/weapons/${source}.png`} alt="" />
                <div class="Weapon-info">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>

    )
}

export default Weapon
