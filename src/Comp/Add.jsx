import React from 'react'

function Add() {
    let [color, setColor] = React.useState(0)
    let value = ["Basic Information", "Description", "Images & Videos", "Product Identifiers", "Pricing", "Inventory"]
    return (
        <div>
            <div className='flex'>
                <i className="fa-solid fa-arrow-left text-[30px] w-[20px] mt-[30px] ml-[30px] h-[20px]"></i>
                <label className="w-[130px] h-[24px] ml-[10px] mt-[30px] font-['Poppins']">View Products</label>
            </div>
            <div className='mt-[14px] '>
                <label className="AddProduct text-neutral-600 text-[26px] font-normal font-['Poppins'] ml-[30px] ">
                    Add Product
                </label>

            </div>
            <hr />
            <div className='flex'>
                <div className='mt-[31.1px] ml-[55px]'>
                    <label className=" text-neutral-600 text-sm font-semibold font-['Poppins']">PRODUCT INFORMATION</label>
                </div>
                <div className='ml-[334px] '>
                    <div className="ProductInformation w-[205px] h-[30px]">
                        <label className=' text-center text-blue-500 text-xl font-semibold font-["Poppins"]'>Product Infomation</label>
                    </div>
                    <div className='ml-[-37px] mt-[3px]' >

                        <label className="InformationToHelpDefineAProduct text-blue-500 text-base font-medium font-['Poppins']">Information to help define a product</label>
                    </div>

                </div>
            </div>
            <div className='flex'>


                <div className=''>
                    {
                        value.map((i, index) => {
                            return <div className="BasicInformation w-[250px] h-[30px] relative  mt-[15px]">
                                <div className="BasicInformation w-[137px] h-[25px] left-[40px] top-[3px] absolute">
                                    <div className="BasicInformation left-[12px] top-[2px] absolute text-blue-700 text-sm font-medium font-['Poppins']" onClick={() => { setColor(color + 1) }}>{i}</div>
                                    <div className={`${color == index ? `w-[3px] h-[25px] left-0 top-0 absolute bg-blue-500` : null}`} />
                                </div>
                            </div>
                        })
                    }

                    <div className='mt-[31.1px] ml-[55px]'>
                        <label className=" text-neutral-600 text-sm font-semibold font-['Poppins']">PRODUCT OPTIONS</label>
                    </div>

                    <div className="BasicInformation w-[250px] h-[30px] relative  mt-[15px]">
                        <div className="BasicInformation w-[137px] h-[25px] left-[40px] top-[3px] absolute">
                            <div className="BasicInformation left-[12px] top-[2px] absolute text-blue-700 text-sm font-medium font-['Poppins']" onClick={() => { setColor(7) }}>Variations</div>
                            <div className={`${color == 7 ? `w-[3px] h-[25px] left-0 top-0 absolute bg-blue-500` : null}`} />
                        </div>
                    </div>
                    <div className='mt-[31.1px] ml-[55px]'>
                        <label className=" text-neutral-600 text-sm font-semibold font-['Poppins']">FULFILMENT</label>
                    </div>
                    <div className="BasicInformation w-[250px] h-[30px] relative  mt-[15px]">
                        <div className="BasicInformation w-[137px] h-[25px] left-[40px] top-[3px] absolute">
                            <div className="BasicInformation left-[12px] top-[2px] absolute text-blue-700 text-sm font-medium font-['Poppins']" onClick={() => { setColor(8) }}>Dimentions & Weight</div>
                            <div className={`${color == 8 ? `w-[3px] h-[25px] left-0 top-0 absolute bg-blue-500` : null}`} />
                        </div>
                    </div>
                    <div className="BasicInformation w-[250px] h-[30px] relative  mt-[15px]">
                        <div className="BasicInformation w-[137px] h-[25px] left-[40px] top-[3px] absolute">
                            <div className="BasicInformation left-[12px] top-[2px] absolute text-blue-700 text-sm font-medium font-['Poppins']" onClick={() => { setColor(9) }}>Shiping Details</div>
                            <div className={`${color == 9 ? `w-[3px] h-[25px] left-0 top-0 absolute bg-blue-500` : null}`} />
                        </div>
                    </div>
                    <div className='mt-[31.1px] ml-[55px]'>
                        <label className=" text-neutral-600 text-sm font-semibold font-['Poppins']">SEO & SHARING</label>
                    </div>
                    <div className="BasicInformation w-[250px] h-[30px] relative  mt-[15px]">
                        <div className="BasicInformation w-[137px] h-[25px] left-[40px] top-[3px] absolute">
                            <div className="BasicInformation left-[12px] top-[2px] absolute text-blue-700 text-sm font-medium font-['Poppins']" onClick={() => { setColor(10) }}>SEO</div>
                            <div className={`${color == 10 ? `w-[3px] h-[25px] left-0 top-0 absolute bg-blue-500` : null}`} />
                        </div>
                    </div>
                    <div className="BasicInformation w-[250px] h-[30px] relative  mt-[15px]">
                        <div className="BasicInformation w-[137px] h-[25px] left-[40px] top-[3px] absolute">
                            <div className="BasicInformation left-[12px] top-[2px] absolute text-blue-700 text-sm font-medium font-['Poppins']" onClick={() => { setColor(11) }}>Open Graph Sharing</div>
                            <div className={`${color == 11 ? `w-[3px] h-[25px] left-0 top-0 absolute bg-blue-500` : null}`} />
                        </div>
                    </div>

                </div>

                <div className="">
                    <div className="w-[760px] h-[896.5px] bg-[#fff] ml-[30px]  mt-[50.5px] rounded-lg dark:border-gray-700">





                    </div>
                </div>

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

export default Add