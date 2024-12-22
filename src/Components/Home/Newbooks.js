import React from 'react'
import './Newbooks.css'
import img1 from './assets/alvido.png'
import img2 from './assets/dorostidagiodam.png'
import img3 from './assets/ichindagiichindadur.png'
import img4 from './assets/alfido.png'

function Newbooks() {

    const data = [
        { img: img1, name: 'Alvido vatan', author: ' Azam Xoshimiy', part: 7 },
        { img: img2, name: 'Dor ostidagi odam', author: 'Amina Shenlikogli', part: 7 },
        { img: img3, name: 'Ichindagi ichindadur', author: 'Jaloliddin Rumiy', part: 7 },
        { img: img4, name: 'Alfido', author: ' Onur Qoplon', part: 7 }
    ]
    return (
        <div className='Newbooks'>
            <h1>New Release Books</h1>
            <div className="newaudio-part">
                {
                    data.map((item, index) => (
                        <div className="audios-cart" key={index}>
                            <div className="imgs-part">
                                <img src={item.img} alt="" />
                            </div>
                            <h2>{item.name}</h2>
                            <span>{item.author}</span>
                            <p>Qism: {item.part}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Newbooks