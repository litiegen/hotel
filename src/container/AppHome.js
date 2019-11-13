import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
import { Carousel } from 'antd-mobile';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import img1 from './img/lg1.jpg'
import img2 from './img/lg2.jpg'
import img3 from './img/lg3.jpg'
import kuai from './img/kuai.png'
import haha from './img/1.jpg'
import car  from './img/car.png'
import shang  from './img/商城_02.jpg'
import yyy from './img/yyy.png'

export default class AppHome extends Component {

    state = {
        data: ['1', '2'],
        imgHeight: 225,
      }

	render() {
		return (
			<div>
				<NavBar
				style={{position: 'fixed',
						width:'100%',
						height:'50px',
						zIndex:2,
						backgroundColor:'#3fcccb',
						color:'#ffffff'}}>住吧家居</NavBar>
                <div>
               
                </div>
                



				<div style={{ width:'100%',height: '900px', backgroundColor: '#ffffff' }}>
					<div style={{float:'left',width:'100%',height:'100%'}}>
                    <WingBlank>
        <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            
              <img
                src={haha}
                alt=""
                style={{ width: '100%', height:'250px',verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                //   this.setState({ imgHeight: 'auto' });
                }}
              />
            
          ))}
        </Carousel>
      </WingBlank>
      <div style={{width:'100%',height:'20%',backgroundColor:'#eeeeee'}}>
      <div style={{float:'left',marginTop:'3%',width:'31%',height:'75%',backgroundColor:'#eeeeee',marginLeft:'1.5%'}}>
          <div style={{width:'100%',height:'90%',background:'url(./img/1.png)'}}>
              <p style={{marginTop:'20%',textAlign:'center',fontSize:'50px'}}>热门品牌</p>
          </div>
      </div>
      <div style={{float:'left',marginTop:'3%',width:'31%',height:'75%',backgroundColor:'#eeeeee',marginLeft:'1.5%'}}>
          <div style={{width:'100%',height:'90%',background:'url(./img/1.png)'}}>
              <p style={{marginTop:'20%',textAlign:'center',fontSize:'50px'}}>热门品牌</p>
          </div>
      </div>
      <div style={{float:'left',marginTop:'3%',width:'31%',height:'75%',backgroundColor:'#eeeeee',marginLeft:'1.5%'}}>
          <div style={{width:'100%',height:'90%',background:'url(./img/1.png)'}}>
              <p style={{marginTop:'20%',textAlign:'center',fontSize:'50px'}}>热门品牌</p>
          </div>
      </div>
      

      </div>
      <div style={{width:'100%',height:'50%'}}>
      <div style={{width:'100%',height:'8%'}}>
          <div style={{float:'left',width:'2%',height:'100%',backgroundColor:'#3fcccb'}}></div>
          <p style={{float:'left',marginLeft:'1%',marginTop:'-0.1%',fontSize:'20px'}}>热门推荐</p></div>
          
          <div style={{float:'left',marginLeft:'2%',marginTop:'6%',width:'95%',
          height:'45%',background:'url(./img/4.jpg)'}}>
              <p style={{marginTop:'50%',color:'white'}}>这是一串产品介绍</p>
          </div>
          <div style={{float:'left',marginLeft:'2%',marginTop:'6%',width:'95%',
          height:'45%',background:'url(./img/4.jpg)'}}>
              <p style={{marginTop:'50%',color:'white'}}>这是一串产品介绍</p>
          </div>
          
          
        

      </div>
						
						</div>
                        
                        </div>
					
					
        
		
      
    </div>

        )
    }
}
