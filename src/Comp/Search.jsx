import React from 'react'

function Search() {
    return (
        <div className=" bg-gray-100">
            <div className="Rectangle8 w-[1080px] h-[70px] bg-white shadow" />
            <div className="AdvancedSearch ml-[26px] mt-[15px] absolute text-zinc-800 text-xl font-semibold font-['Poppins']">Advanced Search</div>


            <div className="Rectangle10 w-[1043px] h-[494px]   mt-[60px] ml-[26px] bg-white rounded-[5px] border border-zinc-300" >
                <div className="mt-[46px]">
                    <label className=" ml-[91px] mt-[47px] font-['Poppins']">Search Keyword</label>
                    <input className='w-[680px] h-[40px] mt-[5px] ml-[12px] rounded  ' type='text' />
                </div>
                <div className="mt-[49px]">
                    <label className=" ml-[119px] ">Order Status</label>
                    <button id="dropdownDefaultButton" className=" rounded  text-center inline-flex items-center space-x-1 w-[300px] h-[40px] border to-black ml-[12px]" type="button"><p className='ml-[12px]'>Choose On Order Status</p> <svg className="w-[12px] h-[6px] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg></button>

                </div>
                <div className="mt-[49px]">
                    <label className=" ml-[119px]">Order Status</label>
                    <button id="dropdownDefaultButton" className=" rounded  text-center inline-flex items-center space-x-1 w-[300px] h-[40px] border to-black ml-[12px]" type="button"><p className='ml-[12px]'>Choose On Order Status</p> <svg className="w-[12px] h-[6px] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg></button>

                </div>
                <div className='mt-[39px] flex'>
                    <label className="ml-[145px] ">Channels</label>
                    <ul className=" text-sm font-medium ml-[12px] text-gray-900 bg-[#DDDD] rounded w-[300px] h-[40px] ">
                        <li className="bg-[#dddd]">
                            <div className="flex items-center pl-3 ">
                                
                                <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 rounded" />
                                <svg className="ml-[15px]" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <circle cx="9" cy="9" r="9" fill="#DDDDDD" />
                                </svg>
                                <label for="vue-checkbox" className="w-full py-3 ml-2 text-sm font-[400px] text-gray-900 dark:text-gray-300 font-['Poppins']">Company Name</label>
                            </div>
                        </li>
                        <li className="bg-[#dddd]">
                            <div className="flex items-center pl-3 ">
                                
                                <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 rounded" />
                                <svg className="ml-[15px]" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <circle cx="9" cy="9" r="9" fill="#DDDDDD" />
                                </svg>
                                <label for="vue-checkbox" className="w-full py-3 ml-2 text-sm font-[400px] text-gray-900 dark:text-gray-300 font-['Poppins']">Company Name</label>
                            </div>
                        </li>
                        <li className="bg-[#dddd]">
                            <div className="flex items-center pl-3 ">
                                
                                <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 rounded" />
                                <svg className="ml-[15px]" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <circle cx="9" cy="9" r="9" fill="#DDDDDD" />
                                </svg>
                                <label for="vue-checkbox" className="w-full py-3 ml-2 text-sm font-[400px] text-gray-900 dark:text-gray-300 font-['Poppins']">Company Name</label>
                            </div>
                        </li>                  
                        
                    </ul>
                </div>
            </div>
            <div className="SearchByRange text-zinc-800 text-xl ml-[26px] mt-[38px] font-semibold font-['Poppins']">Search by Range
            </div>

            <div className="Rectangle10 w-[1043px] h-[193px] bg-white ml-[26px] mt-[16px] rounded-[5px] border border-zinc-300" >

            </div>
            
            <div className="SearchByDate text-zinc-800 text-xl ml-[26px] mt-[38px] font-semibold font-['Poppins']">
                Search by Date
            </div>
            <div className="Rectangle10 w-[1043px] h-[193px] ml-[26px] mt-[16px] mb-[30px] bg-white rounded-[5px] border border-zinc-300">
                <div className='mt-[47px] flex'>
                    <label className="ml-[91px]  font-['Poppins']">Data Range</label>

                </div>

            </div>

            <div className="SortOrder text-zinc-800 text-xl ml-[26px]  font-semibold font-['Poppins']">
                Sort Order
            </div>
            <div className="Rectangle10 w-[1043px] h-[127px] ml-[26px] bg-white rounded-[5px] border border-zinc-300" >

            </div>
            <div className="Rectangle27  w-[1080px] h-[55px] mt-[40px] bg-white shadow">
                <div className='flex'  >
                    <label className="Cancel text-blue-500 text-sm font-semibold font-['Poppins'] ml-[801px] mt-[18px]">Cancel</label>
                
                    <button className="Rectangle28 w-[150px] h-10 bg-blue-500 text-white rounded-[5px] mt-[8px] ml-[42px] font-['Poppins']">Save</button>
                </div>

            </div>
            


        </div>
    )
}

export default Search