import React from 'react'
import './client.css'
import img1 from './p1.JPG'
import img2 from './Sharp_TV.JPG'
import img3 from './pxg930.JPG'
import img4 from './img4.JPG'
import img5 from './prod-1.jpg'

function Products() {
  return (
    <div className='outer-div3'>
      <h1 className='h1-style'>Products</h1>
      <div className='prod-div'>
      <div className='prod-header'>
      <img src={img5} alt="Product 1" style={{ width: '100%', height: '80%' }} />
      <div style={{ padding: '15px', backgroundColor: '#fff', padding:'20px'}}>
        <h3 style={{ margin: '10px 0 0 0', color: '#000', fontSize: '18px' }}>These are the products that our company strives to create and deliver to our clients. We ensure exellence and quality work</h3>
      </div>
    </div>
        <div className='service-list'>
          <div className='service-card2'>
            <img src={img1} alt="Product 1" />
            <h3>Car Parts</h3>
            <div className='card-text2'>
              <p>This is a Car product.</p>
            </div>
          </div>
          <div className='service-card2'>
            <img src={img2} alt="Sharp Tv" />
            <h3>Tv Parts</h3>
            <div className='card-text2'>
              <p>This is a back cabinet of a TV.</p>
            </div>
          </div>
          <div className='service-card2'>
            <img src={img3} alt="Printer" />
            <h3>Printer Parts</h3>
            <div className='card-text2'>
              <p>This is a Printer part and is also known as the printer cover.Protects the printing mechanism. Open only when installing or replacing ink cartridges.</p>
            </div>
          </div>
          <div className='service-card2'>
            <img src={img4} alt="Olly Waver" />
            <h3>FR Seat Cushion LH</h3>
            <div className='card-text2'>
              <p>This is product serves as a cup holder to the car parts we help produce.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='clients-para'>
        <p>These are the products that our company strives to create and deliver to our clients. We ensure exellence and quality work</p>
      </div>
     
    </div>
  )
}

export default Products
