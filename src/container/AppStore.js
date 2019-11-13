import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
import { Carousel } from 'antd-mobile';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import img1 from './img/lg1.jpg'
import img2 from './img/lg2.jpg'
import img3 from './img/lg3.jpg'
import kuai from './img/kuai.png'
import car  from './img/car.png'
import shang  from './img/商城_02.jpg'
import yyy from './img/yyy.png'
export default class Appstore extends Component {

    state = {
        data: ['1', '2', '3','4'],
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
						color:'#ffffff'}}
                rightContent={[
					<img  src={car} style={{ weight:'50%',height:'50%',marginRight: '10%' }} />,
				]}>商城</NavBar>
                <div>
                <SearchBar style={{marginTop:'50px', position: 'fixed',
						width:'100%',
						height:'50px',
						zIndex:2,
                        backgroundColor:'#eeeeee',
                        opacity: 0.9,
						color:'#ffffff'}} placeholder="Search" maxLength={8} />
                <WhiteSpace />
                {/* <SearchBar placeholder="输入关键字搜索" ref={ref => this.autoFocusInst = ref} />
                <WhiteSpace /> */}
                </div>
                



				<div style={{ width:'100%',height: '900px', backgroundColor: '#eeeeee' }}>
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
                src={shang}
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
      <div style={{width:'100%',height:'20%',backgroundColor:'#ffffff'}}>
      <div style={{float:'left',marginTop:'3%',width:'14%',height:'40%',backgroundColor:'white',marginLeft:'5%'}}>
          <div style={{width:'100%',height:'80%',background:'url(./img/yyy.png)',borderRadius:'50%'}}></div>
          <p style={{marginTop:'-1%',textAlign:'center'}}>桌子</p>
      </div>
      <div style={{float:'left',marginTop:'3%',width:'14%',height:'40%',backgroundColor:'white',marginLeft:'5%'}}>
          <div style={{width:'100%',height:'80%',background:'url(./img/yyy.png)',borderRadius:'50%'}}></div>
          <p style={{marginTop:'-1%',textAlign:'center'}}>桌子</p>
      </div>
      <div style={{float:'left',marginTop:'3%',width:'14%',height:'40%',backgroundColor:'white',marginLeft:'5%'}}>
          <div style={{width:'100%',height:'80%',background:'url(./img/yyy.png)',borderRadius:'50%'}}></div>
          <p style={{marginTop:'-1%',textAlign:'center'}}>桌子</p>
      </div>
      <div style={{float:'left',marginTop:'3%',width:'14%',height:'40%',backgroundColor:'white',marginLeft:'5%'}}>
          <div style={{width:'100%',height:'80%',background:'url(./img/yyy.png)',borderRadius:'50%'}}></div>
          <p style={{marginTop:'-1%',textAlign:'center'}}>桌子</p>
      </div>
      <div style={{float:'left',marginTop:'3%',width:'14%',height:'40%',backgroundColor:'white',marginLeft:'5%'}}>
          <div style={{width:'100%',height:'80%',background:'url(./img/yyy.png)',borderRadius:'50%'}}></div>
          <p style={{marginTop:'-1%',textAlign:'center'}}>桌子</p>
      </div>


      <div style={{float:'left',marginTop:'3%',width:'14%',height:'40%',backgroundColor:'white',marginLeft:'5%'}}>
          <div style={{width:'100%',height:'80%',background:'url(./img/yyy.png)',borderRadius:'50%'}}></div>
          <p style={{marginTop:'-1%',textAlign:'center'}}>桌子</p>
      </div>
      <div style={{float:'left',marginTop:'3%',width:'14%',height:'40%',backgroundColor:'white',marginLeft:'5%'}}>
          <div style={{width:'100%',height:'80%',background:'url(./img/yyy.png)',borderRadius:'50%'}}></div>
          <p style={{marginTop:'-1%',textAlign:'center'}}>桌子</p>
      </div>
      <div style={{float:'left',marginTop:'3%',width:'14%',height:'40%',backgroundColor:'white',marginLeft:'5%'}}>
          <div style={{width:'100%',height:'80%',background:'url(./img/yyy.png)',borderRadius:'50%'}}></div>
          <p style={{marginTop:'-1%',textAlign:'center'}}>桌子</p>
      </div>
      <div style={{float:'left',marginTop:'3%',width:'14%',height:'40%',backgroundColor:'white',marginLeft:'5%'}}>
          <div style={{width:'100%',height:'80%',background:'url(./img/yyy.png)',borderRadius:'50%'}}></div>
          <p style={{marginTop:'-1%',textAlign:'center'}}>桌子</p>
      </div>
      <div style={{float:'left',marginTop:'3%',width:'14%',height:'40%',backgroundColor:'white',marginLeft:'5%'}}>
          <div style={{width:'100%',height:'80%',background:'url(./img/yyy.png)',borderRadius:'50%'}}></div>
          <p style={{marginTop:'-1%',textAlign:'center'}}>桌子</p>
      </div>

      </div>
      <div style={{width:'100%',height:'50%'}}>
          <div style={{marginLeft:'4%',marginTop:'5%',float:'left',width:'45%',
          height:'25%',background:'url(./img/kuai.png)'}}>
              <p style={{marginTop:'70%'}}>这是一串产品介绍</p>
          </div>

          <div style={{marginLeft:'3%',marginTop:'5%',float:'left',width:'45%',
          height:'25%',background:'url(./img/kuai.png)'}}>
              <p style={{marginTop:'70%'}}>这是一串产品介绍</p>
          </div>
           <div style={{marginLeft:'3%',marginTop:'6%',float:'left',width:'45%',
          height:'25%',background:'url(./img/kuai.png)'}}>
              <p style={{marginTop:'70%'}}>这是一串产品介绍</p>
          </div>
          <div style={{marginLeft:'3%',marginTop:'6%',float:'left',width:'45%',
          height:'25%',background:'url(./img/kuai.png)'}}>
              <p style={{marginTop:'70%'}}>这是一串产品介绍</p>
          </div>
          <div style={{marginLeft:'3%',marginTop:'6%',float:'left',width:'45%',
          height:'25%',background:'url(./img/kuai.png)'}}>
              <p style={{marginTop:'70%'}}>这是一串产品介绍</p>
          </div>
          <div style={{marginLeft:'3%',marginTop:'6%',float:'left',width:'45%',
          height:'25%',background:'url(./img/kuai.png)'}}>
              <p style={{marginTop:'70%'}}>这是一串产品介绍</p>
          </div>
          <div style={{marginLeft:'3%',marginTop:'6%',float:'left',width:'45%',
          height:'25%',background:'url(./img/kuai.png)'}}>
              <p style={{marginTop:'70%'}}>这是一串产品介绍</p>
          </div>
          <div style={{marginLeft:'3%',marginTop:'6%',float:'left',width:'45%',
          height:'25%',background:'url(./img/kuai.png)'}}>
              <p style={{marginTop:'70%'}}>这是一串产品介绍</p>
          </div>
          
        

      </div>
						
						</div>
                        
                        </div>
					
					
        
		
      
    </div>

        )
    }
}
