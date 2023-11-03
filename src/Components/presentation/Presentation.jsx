import React from 'react'
import './css/Presentation.css'


function Card() {
    return (
        <div className='card'>
            <div className='card--image'>

            </div>
            <div className='card--body'>
                <h3 className='card--title'>
                    Madepices.mg
                </h3>
                <p className='card--description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eos sequi eius maxime animi hic incidunt error blanditiis accusantium tempora illum voluptatum dolorem cupiditate laborum dolor? Dolore amet eveniet nihil voluptate omnis officia distinctio odit.
                </p>
            </div>
        </div>
    )
}

function Skill() {
    return (
        <div className='skill--card'>
            <div className='skill--image'>
                <h4 className='skill--description'>NodeJS</h4>
            </div>
        </div>
    )
}

export default function Presentation() {
    return (
        <>
            <div className='presentation'>
                <div className="presentation--left">

                </div>
                <div className="presentation--right">
                    <h1 className='presentation--title'>WHO AM I ?</h1>
                    <div className="presentation--description">
                        Lorem ipsum dolor sit amet aliquid fuga consectetur consequatur maxime repellat reiciendis dolorem itaque cumque eius dicta soluta doloribus maiores suscipit modi. Fuga obcaecati est nulla dolorem. Velit incidunt temporibus nam minima nesciunt aliquid inventore accusamus, officiis perspiciatis facilis aperiam sed deleniti quod harum tempore excepturi fugiat a beatae quidem ex. Officiis ad debitis temporibus blanditiis ex?
                    </div>
                </div>
            </div>
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

            <div className='education'>
                <div className="education--list">
                    <h1 className='education--title'>WHERE DID I LEARN THINGS ?</h1>
                    <div className="education--description">
                        Lorem ipsum dolor sit amet fugiat a beatae quidem ex. Officiis ad debitis temporibus blanditiis ex?
                    </div>
                </div>
                <div className='education--card--list'>
                    <div className='education--card'>
                        <div className='education--left'>

                        </div>
                        <div className='education--right'>
                            <h3 className='education--title'>
                                ETP
                            </h3>
                            <p className="education--description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem provident omnis obcaecati inventore reprehenderit. Adipisci ullam sed quis voluptate mollitia voluptatem ipsam! Magnam, tempora distinctio?
                            </p>
                        </div>
                    </div>

                    <div className='education--card'>

                        <div className='education--right'>
                            <h3 className='education--title'>
                                CNTEMAD
                            </h3>
                            <p className="education--description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem provident omnis obcaecati inventore reprehenderit. Adipisci ullam sed quis voluptate mollitia voluptatem ipsam! Magnam, tempora distinctio?
                            </p>
                        </div>
                        <div className='education--left'>

                        </div>
                    </div>
                </div>

            </div>

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

            <div className='footer'>
                <div className='footer--left'>
                    <h4 className='footer--title'>Contact me on</h4>
                    <p><span>mail: </span>taratra.cscs@gmail.com</p>
                    <p><span>tel: </span>+261342556259</p>
                </div>
                <div className='footer--right'>
                    <h4 className='footer--title'>Be at ease to see my</h4>
                    <div>
                        <p>Insta</p>
                        <p>face</p>
                        <p>link</p>
                    </div>

                </div>
            </div>
        </>

    )
}
