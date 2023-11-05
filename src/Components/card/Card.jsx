import React, { useState } from 'react'
import './css/Card.css'

export default function Card() {
    const [showForm, setShowForm] = useState(false)
    return (
        <div className='card' onClick={() => setShowForm(!showForm)}>
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
            <div className='card--modal' style={showForm ? { display: "block" } : { display: "none" }}>
                <div className='card--modal--layout'>
                    <div className="card--modal--image">
                        <div className="card--modal--image--left"></div>
                        <div className='card--modal--image--right'>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="card--modal--body">
                        <h1 className="card--modal--title">Card body title</h1>
                        <p className="card--modal--description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, in explicabo? Delectus in quis hic placeat aperiam cumque aut rem, atque molestias amet ab possimus dicta quibusdam ad sed reiciendis odio. Vitae nihil ipsa incidunt sit illo! Labore obcaecati, ex nemo nisi odio maiores laudantium perspiciatis autem, dolor aperiam suscipit nihil amet quae voluptate libero in. Nisi voluptatibus quod alias nesciunt asperiores dignissimos eum saepe ipsum perspiciatis in id, modi eius velit iusto cupiditate delectus voluptas architecto doloribus quae fuga quaerat. Fuga quasi recusandae mollitia quam, doloribus aperiam assumenda, ipsum eius, dolorum earum nemo. Nisi quas, tempore quisquam obcaecati dignissimos ducimus nobis facere! Cumque, aperiam non totam error excepturi repudiandae itaque inventore magni! Minima ducimus assumenda pariatur porro, atque distinctio in unde sit necessitatibus, corrupti eaque blanditiis nobis qui earum praesentium molestias. Dignissimos reprehenderit impedit veniam, sed at illum quasi similique cum unde expedita, consequatur, dolorem sunt ratione repellendus voluptate. Nobis excepturi provident, ratione dolore error impedit earum mollitia corrupti eius placeat iure consequuntur voluptatum soluta quidem reiciendis laudantium beatae, exercitationem quae accusantium? Rerum officia tempore excepturi cupiditate, sit saepe aliquam id deleniti eius, vitae quis veritatis laboriosam asperiores voluptatibus ea corrupti at. Accusamus laboriosam rerum ullam incidunt itaque. Optio.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

