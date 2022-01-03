import React from 'react'
import Weapon from './Weapon'
import WeaponBan from './WeaponBan'
import '../../CSS/Weapons.css'
import '../../CSS/Weapon.css'

function Weapons() {

    return (
        <div className='main'>
            <WeaponBan />
            <div className="Weapons">
                <div className="container2 reveal">
                    <Weapon
                        source="Classic"
                        title="Classic"
                        type="Side Arm"
                        description="Lightweight and versatile, this standard weapon for all agents is a classic choice"
                    />

                    <Weapon
                        source="Shorty"
                        title="Shorty"
                        type="Side Arm"
                        description="Surprise your opponent at close range for max effectiveness"
                    />

                    <Weapon
                        source="Frenzy"
                        title="Frenzy"
                        type="Side Arm"
                        description="Close range, hold the trigger. Long distance..try something else"
                    />

                    <Weapon
                        source="Ghost"
                        title="Ghost"
                        type="Side Arm"
                        description="Sleek, dampened, and excels at any distance"
                    />

                    <Weapon
                        source="Sheriff"
                        title="Sheriff"
                        type="Side Arm"
                        description="The modern six-bullet gun for those aiming for a head shot"
                    />

                    <Weapon
                        source="Stinger"
                        title="Stinger"
                        type="SMGS"
                        description="They'll know they're finished when the Stinger's scattering ham hits them"
                    />

                    <Weapon
                        source="Spectre"
                        title="Spectre"
                        type="SMGS"
                        description="When in doubt, Specter of your choice"
                    />

                    <Weapon
                        source="Bucky"
                        title="Bucky"
                        type="SHOTGUNS"
                        description="Attacker. Defense. You are the carrier of the pompoa action gents"
                    />

                    <Weapon
                        source="Judge"
                        title="Judge"
                        type="SHOTGUNS"
                        description="An automatic shotgun with a fast fire that deals continuous high damage"
                    />

                    <Weapon
                        source="Bulldog"
                        title="Bulldog"
                        type="RIFLES"
                        description="One form of happiness is to overthrow the opponent with the Bulldog"
                    />

                    <Weapon
                        source="Guardian"
                        title="Guardian"
                        type="RIFLES"
                        description="Excellent in patient shooting hands"
                    />

                    <Weapon
                        source="Phantom"
                        title="Phantom"
                        type="RIFLES"
                        description="Balanced weapon designed for steady, continuous fire"
                    />

                    <Weapon
                        source="Vandal"
                        title="Vandal"
                        type="RIFLES"
                        description="This accurate favorite weapon excels in short streaks"
                    />

                    <Weapon
                        source="Marshal"
                        title="Marshal"
                        type="SNIPER"
                        description="Aim, breathe, and they will regret being there"
                    />

                    <Weapon
                        source="Operator"
                        title="Operator"
                        type="SNIPER"
                        description="Find a comfortable place and you can control the important terrain"
                    />

                    <Weapon
                        source="Ares"
                        title="Ares"
                        type="HEAVY"
                        description="Don't underestimate the big size"
                    />

                    <Weapon
                        source="Odin"
                        title="Odin"
                        type="HEAVY"
                        description="Using the machine hammer will bring glory to the wielder and destruction to the opponent"
                    />

                    <Weapon
                        source="TacticalKnife"
                        title="Tactical Knife"
                        type="Side Arm"
                        description="An intimate solution"
                    />
                </div>
            </div>
        </div>
    )
}

export default Weapons
