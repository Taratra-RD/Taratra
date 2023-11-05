import React from 'react'
import Card from '../../card/Card'

export default function Project() {
    return (
        <div className='project'>
            <div className="project--list">
                <h1 className='project--title'>WHAT DID I EVER DONE ?</h1>
                <div className="project--description">
                    Lorem ipsum dolor sit amet fugiat a beatae quidem ex. Officiis ad debitis temporibus blanditiis ex?
                </div>
            </div>
            <div className='project--card--list'>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}
