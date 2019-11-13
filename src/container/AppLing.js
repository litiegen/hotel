import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
import img1 from './img/lg1.jpg'
import img2 from './img/lg2.jpg'
import img3 from './img/lg3.jpg'
import img4 from './img/lg4.jpg'
import xin from './img/love.png'
const tabs = [
	{title:'推荐'},
	{title:'冬季'},
    {title:'宜家'},
    {title:'小清新'},
    {title:'小户型'},
	{title:'个性色彩'},
];


export default class AppLing extends Component {

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
					<Icon key="0" type="search" style={{ marginRight: '16px' }} />,
				]}>灵感</NavBar>
				<Tabs 
				tabs={tabs} 
				initialPage={0} 
				animated={false} 
				useOnPan={false} 
				tabBarUnderlineStyle={{border:'0px'}}
				tabBarActiveTextColor={'#3fcccb'} > 
				
				<div style={{ width:'100%',height: '1250px', backgroundColor: '#eeeeee' }}>
					<div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
						<div style={{
							borderRadius:'5px',
							float:'left',
							marginLeft:'3%',
							width:'45%',height:'100%',
							backgroundColor:'#ffffff'}}>
								<img style={{borderRadius:'5px 5px 0 0',
								width:'100%',height:'85%'}} src={img1}></img>
								<img style={{marginTop:'-5%',
								marginLeft:'5%',borderRadius:'20px',width:'15%'}} src={img1}></img>
								<p style={{color:'#686868',
								fontSize:'10px',float:'right',
								marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
								<img style={{width:'22px',
								height:'22px',float:'right',
								marginRight:'-70%'}} src={xin}></img>
						</div>
						<div style={{
							borderRadius:'5px',
							float:'left',
							marginLeft:'3%',
							width:'45%',height:'100%',
							backgroundColor:'#ffffff'}}>
								<img style={{borderRadius:'5px 5px 0 0',
								width:'100%',height:'85%'}} src={img2}></img>
								<img style={{marginTop:'-5%',
								marginLeft:'5%',borderRadius:'20px',width:'15%'}} src={img2}></img>
								<p style={{color:'#686868',
								fontSize:'10px',float:'right',
								marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
								<img style={{width:'22px',
								height:'22px',float:'right',
								marginRight:'-70%'}} src={xin}></img>
						</div>
					</div>
					<div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
						<div style={{
							borderRadius:'5px',
							float:'left',
							marginLeft:'3%',
							width:'45%',height:'100%',
							backgroundColor:'#ffffff'}}>
								<img style={{borderRadius:'5px 5px 0 0',
								width:'100%',height:'85%'}} src={img3}></img>
								<img style={{marginTop:'-5%',
								marginLeft:'5%',borderRadius:'20px',width:'15%'}} src={img3}></img>
								<p style={{color:'#686868',
								fontSize:'10px',float:'right',
								marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
								<img style={{width:'22px',
								height:'22px',float:'right',
								marginRight:'-70%'}} src={xin}></img>
						</div>
						<div style={{
							borderRadius:'5px',
							float:'left',
							marginLeft:'3%',
							width:'45%',height:'100%',
							backgroundColor:'#ffffff'}}>
								<img style={{borderRadius:'5px 5px 0 0',
								width:'100%',height:'85%'}} src={img4}></img>
								<img style={{marginTop:'-5%',
								marginLeft:'5%',borderRadius:'20px',width:'15%'}} src={img4}></img>
								<p style={{color:'#686868',
								fontSize:'10px',float:'right',
								marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
								<img style={{width:'22px',
								height:'22px',float:'right',
								marginRight:'-70%'}} src={xin}></img>
						</div>
					</div>
            <div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img1}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img1}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img2}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img2}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
            </div>
            <div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img3}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img3}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img4}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img4}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
            </div>
            <div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img1}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img1}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img2}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img2}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
            </div>
            <div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img3}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img3}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img4}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img4}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
            </div>
         
              
        </div>
        
        
        <div style={{ width:'100%',height: '1250px', backgroundColor: '#eeeeee' }}>
        <div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img4}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img4}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img3}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img3}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
            </div>
            <div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img2}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img2}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img1}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img1}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
            </div>
            <div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img4}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img4}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img3}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img3}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
            </div>
            <div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img2}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img2}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img1}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img1}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
            </div>
            <div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img1}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img1}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img2}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img2}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
            </div>
            <div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img3}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img3}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img4}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img4}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
            </div>
         
              
        </div>
        
        

		<div style={{ width:'100%',height: '1250px', backgroundColor: '#eeeeee' }}>
					<div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
						<div style={{
							borderRadius:'5px',
							float:'left',
							marginLeft:'3%',
							width:'45%',height:'100%',
							backgroundColor:'#ffffff'}}>
								<img style={{borderRadius:'5px 5px 0 0',
								width:'100%',height:'85%'}} src={img1}></img>
								<img style={{marginTop:'-5%',
								marginLeft:'5%',borderRadius:'20px',width:'15%'}} src={img1}></img>
								<p style={{color:'#686868',
								fontSize:'10px',float:'right',
								marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
								<img style={{width:'22px',
								height:'22px',float:'right',
								marginRight:'-70%'}} src={xin}></img>
						</div>
						<div style={{
							borderRadius:'5px',
							float:'left',
							marginLeft:'3%',
							width:'45%',height:'100%',
							backgroundColor:'#ffffff'}}>
								<img style={{borderRadius:'5px 5px 0 0',
								width:'100%',height:'85%'}} src={img2}></img>
								<img style={{marginTop:'-5%',
								marginLeft:'5%',borderRadius:'20px',width:'15%'}} src={img2}></img>
								<p style={{color:'#686868',
								fontSize:'10px',float:'right',
								marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
								<img style={{width:'22px',
								height:'22px',float:'right',
								marginRight:'-70%'}} src={xin}></img>
						</div>
					</div>
					<div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
						<div style={{
							borderRadius:'5px',
							float:'left',
							marginLeft:'3%',
							width:'45%',height:'100%',
							backgroundColor:'#ffffff'}}>
								<img style={{borderRadius:'5px 5px 0 0',
								width:'100%',height:'85%'}} src={img3}></img>
								<img style={{marginTop:'-5%',
								marginLeft:'5%',borderRadius:'20px',width:'15%'}} src={img3}></img>
								<p style={{color:'#686868',
								fontSize:'10px',float:'right',
								marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
								<img style={{width:'22px',
								height:'22px',float:'right',
								marginRight:'-70%'}} src={xin}></img>
						</div>
						<div style={{
							borderRadius:'5px',
							float:'left',
							marginLeft:'3%',
							width:'45%',height:'100%',
							backgroundColor:'#ffffff'}}>
								<img style={{borderRadius:'5px 5px 0 0',
								width:'100%',height:'85%'}} src={img4}></img>
								<img style={{marginTop:'-5%',
								marginLeft:'5%',borderRadius:'20px',width:'15%'}} src={img4}></img>
								<p style={{color:'#686868',
								fontSize:'10px',float:'right',
								marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
								<img style={{width:'22px',
								height:'22px',float:'right',
								marginRight:'-70%'}} src={xin}></img>
						</div>
					</div>
            <div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img1}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img1}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img2}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img2}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
            </div>
            <div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img3}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img3}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img4}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img4}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
            </div>
            <div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img1}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img1}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img2}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img2}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
            </div>
            <div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img3}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img3}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img4}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img4}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
            </div>
         
              
        </div>
        
        
        <div style={{ width:'100%',height: '1250px', backgroundColor: '#eeeeee' }}>
        <div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img4}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img4}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img3}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img3}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
            </div>
            <div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img2}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img2}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img1}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img1}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
            </div>
            <div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img4}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img4}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img3}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img3}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
            </div>
            <div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img2}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img2}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img1}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img1}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
            </div>
            <div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img1}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img1}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img2}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img2}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
            </div>
            <div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img3}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img3}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img4}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img4}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
            </div>
         
              
        </div>




		<div style={{ width:'100%',height: '1250px', backgroundColor: '#eeeeee' }}>
					<div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
						<div style={{
							borderRadius:'5px',
							float:'left',
							marginLeft:'3%',
							width:'45%',height:'100%',
							backgroundColor:'#ffffff'}}>
								<img style={{borderRadius:'5px 5px 0 0',
								width:'100%',height:'85%'}} src={img1}></img>
								<img style={{marginTop:'-5%',
								marginLeft:'5%',borderRadius:'20px',width:'15%'}} src={img1}></img>
								<p style={{color:'#686868',
								fontSize:'10px',float:'right',
								marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
								<img style={{width:'22px',
								height:'22px',float:'right',
								marginRight:'-70%'}} src={xin}></img>
						</div>
						<div style={{
							borderRadius:'5px',
							float:'left',
							marginLeft:'3%',
							width:'45%',height:'100%',
							backgroundColor:'#ffffff'}}>
								<img style={{borderRadius:'5px 5px 0 0',
								width:'100%',height:'85%'}} src={img2}></img>
								<img style={{marginTop:'-5%',
								marginLeft:'5%',borderRadius:'20px',width:'15%'}} src={img2}></img>
								<p style={{color:'#686868',
								fontSize:'10px',float:'right',
								marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
								<img style={{width:'22px',
								height:'22px',float:'right',
								marginRight:'-70%'}} src={xin}></img>
						</div>
					</div>
					<div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
						<div style={{
							borderRadius:'5px',
							float:'left',
							marginLeft:'3%',
							width:'45%',height:'100%',
							backgroundColor:'#ffffff'}}>
								<img style={{borderRadius:'5px 5px 0 0',
								width:'100%',height:'85%'}} src={img3}></img>
								<img style={{marginTop:'-5%',
								marginLeft:'5%',borderRadius:'20px',width:'15%'}} src={img3}></img>
								<p style={{color:'#686868',
								fontSize:'10px',float:'right',
								marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
								<img style={{width:'22px',
								height:'22px',float:'right',
								marginRight:'-70%'}} src={xin}></img>
						</div>
						<div style={{
							borderRadius:'5px',
							float:'left',
							marginLeft:'3%',
							width:'45%',height:'100%',
							backgroundColor:'#ffffff'}}>
								<img style={{borderRadius:'5px 5px 0 0',
								width:'100%',height:'85%'}} src={img4}></img>
								<img style={{marginTop:'-5%',
								marginLeft:'5%',borderRadius:'20px',width:'15%'}} src={img4}></img>
								<p style={{color:'#686868',
								fontSize:'10px',float:'right',
								marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
								<img style={{width:'22px',
								height:'22px',float:'right',
								marginRight:'-70%'}} src={xin}></img>
						</div>
					</div>
            <div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img1}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img1}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img2}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img2}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
            </div>
            <div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img3}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img3}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img4}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img4}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
            </div>
            <div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img1}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img1}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img2}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img2}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
            </div>
            <div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img3}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img3}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img4}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img4}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
            </div>
         
              
        </div>
        
        
        <div style={{ width:'100%',height: '1250px', backgroundColor: '#eeeeee' }}>
        <div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img4}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img4}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img3}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img3}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
            </div>
            <div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img2}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img2}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img1}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img1}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
            </div>
            <div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img4}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img4}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img3}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img3}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
            </div>
            <div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img2}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img2}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img1}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img1}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
            </div>
            <div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img1}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img1}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img2}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img2}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
            </div>
            <div style={{float:'left',marginTop:'3%',width:'100%',height:'15.5%'}}>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img3}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img3}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
                <div style={{ borderRadius:'5px' ,float:'left', marginLeft:'3%',width:'45%',height:'100%',backgroundColor:'#ffffff'}}>
                <img style={{borderRadius:'5px 5px 0 0' ,width:'100%',height:'85%'}} src={img4}></img>
                <img style={{marginTop:'-5%',marginLeft:'5%',borderRadius:'20px' ,width:'15%'}} src={img4}></img>
                <p style={{color:'#686868',fontSize:'10px',float:'right',marginTop:'1%',marginRight:'50%'}}>橙色律动</p>
                <img style={{width:'22px',height:'22px',float:'right',marginTop:'',marginRight:'-70%'}} src={xin}></img>
                </div>
            </div>
         
              
        </div>
		
      </Tabs>
    </div>
    // </div>
            // </div>
        )
    }
}
