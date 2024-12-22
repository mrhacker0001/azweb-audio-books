import React from 'react'
import './Categories.css'
import img from './assets/Rectangle 11.png'
import img1 from './assets/Rectangle 11 (1).png'
import img2 from './assets/Rectangle 11 (2).png'

function Categories() {

    const data = [
        { img: img, category: 'Fiction', description: 'Immerse yourself in the world of imagination with fiction books. From captivating stories of love and mystery to thrilling plots and unexpected twists ' },
        { img: img1, category: 'Children’s Books)', description: 'Introduce young minds to the joy of reading with children’s books. These stories are filled with colorful illustrations, magical adventures' },
        { img: img2, category: 'Adventure', description: 'Adventure books take you on a rollercoaster ride through thrilling expeditions, daring escapades, and exotic locations. Whether you’re climbing towering mountains' },
    ]
    return (
        <div className='Categories'>
            <h2>Explore our Top Categories</h2>
            <div className="carts">
                {
                    data.map((item, index) => (
                        <div className="cart" key={index}>
                            <img src={item.img} alt="..." />
                            <span>{item.category}</span>
                            <p>{item.description}</p>
                        </div>
                    ))
                }
            </div>
            <button>View more</button>
        </div>
    )
}

export default Categories