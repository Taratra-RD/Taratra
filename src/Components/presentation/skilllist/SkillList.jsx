import React from 'react'
import Skill from '../../skill/Skill'

export default function SkillList() {
    return (
        <div className='skill'>
            <div className="skill--list">
                <h1 className='skill--title'>I USE THOSE THINGS !</h1>
                <div className="skill--description">
                    Lorem ipsum dolor sit amet fugiat a beatae quidem ex. Officiis ad debitis temporibus blanditiis ex?
                </div>
            </div>
            <div className='skill--card--list'>
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />

                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </div>
        </div>
    )
}
