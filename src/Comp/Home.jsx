import React from 'react'
import Accordation from './Accordation'
import {Route,Routes,Link} from 'react-router-dom'
import Homev from './Homev';
import Views from './Views';
import Search from './Search';
import Export from './Export';
import Add from './Add';

function Home() {
    let [value, setValue] = React.useState(2)
    
    console.log(value);
    return (

        <div className='grid grid-cols-12'>
            <div className='grid col-span-3'>
                <div className='w-[355px] h-[773px] flex-shrink-0 absolute bg-[#002966] col-span-3'>
                    <div className="ml-[78px] mt-[26.37px] mr-[78px]  text-white text-2xl font-semibold font-['Poppins']">Product Portfolio </div>
                    <div className=" w-[355px] h-[50px] bg-blue-950 mt-[90px] flex" >
                        <div className="Home w-4 h-4 relative " ><i className='fa fa-home text-white mt-[15px] ml-[36px]'></i></div>
                        {/* <div >Home</div> */}
                        <Link className="text-white text-base font-[500]  font-['Poppins'] ml-[70px] mt-[13px]" to="/Homev">Home</Link>
                    </div>
                    <div className=" w-[355px] h-[50px] bg-slate-900 flex" >
                        <div className=" w-4 h-4 relative" ><i className='fa fa-search text-white h-[16px] w-[16px] ml-[38px] mt-[17px]'></i></div>
                        <div className=" text-white text-opacity-50 text-base font-normal font-['Poppins'] ml-[76px] mt-[13px]">Search</div>
                    </div>
                    <Accordation />
                    <div className="Rectangle4 w-[355px] h-[55px] bg-slate-900 mt-[5px] flex " >
                        <div>
                            <i className="fa-solid fa-circle-question text-white mt-[17px] ml-[36px] mb-[18px]"></i>
                        </div>
                        <div className=" text-white font-normal font-['Poppins'] mt-[14px] ml-[81px]">
                            Help
                        </div>
                        <div className=' '>
                            <svg xmlns="http:www.w3.org/2000/svg" className='ml-[130px] rotate-[90deg] mt-[24px] mb-[23.32px] w-[10.94px] h-[6px]' viewBox="0 0 16 10" fill="none">
                                <path d="M14.8016 8.47902C14.5611 8.71952 14.1847 8.74138 13.9196 8.54461L13.8436 8.47902L8 2.63575L2.15643 8.47902C1.91593 8.71952 1.53959 8.74138 1.27439 8.54461L1.19841 8.47902C0.957913 8.23852 0.936049 7.86218 1.13282 7.59698L1.19841 7.521L7.52099 1.19842C7.76149 0.957923 8.13783 0.936059 8.40303 1.13283L8.47901 1.19842L14.8016 7.521C15.0661 7.78555 15.0661 8.21447 14.8016 8.47902Z" fill="white" stroke="white" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <diV className=" bg-[#f3f5f8]   grid col-start-4 col-span-9   ">
                
                <Routes>
                    <Route path='/Homev' element={<Homev/>}/>
                    <Route path='/Views' element={<Views/>}/>
                    <Route path='/Search' element={<Search/>}/>
                    <Route path='/Export' element={<Export/>}/>
                    <Route path='/Add' element={<Add/>}/>

                </Routes>
                    
                


            </diV>
            {/* </div> */}
        </div>

    )
}

export default Home