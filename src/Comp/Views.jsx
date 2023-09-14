import React from 'react'

function Views() {
    let [allorder,setAllorder]=React.useState(false)
    let [cancel,setCancel]=React.useState(false)
    let[deviver,setDeviver]=React.useState(false)
    let[awaite,setAwaite]=React.useState(false)

    return (
        <div className=' flex relative left-3 '>
                        <div className="AllOrders w-28 h-[70px] ml-[14px] ">
                            <div className="AllOrders left-[23px] top-[25px] absolute text-neutral-600 text-sm font-semibold font-['Poppins']  " onClick={()=>{setAllorder(true)}}>All orders</div>
                            <div className="Rectangle16 w-[100px] h-[5px] left-[7px] top-[65px] absolute bg-blue-500" />
                        </div>
                        <div className="CancelledOrders w-44 h-[70px] relative">
                            <div className="CancelledOrders left-[26px] top-[25px] absolute text-zinc-400 text-sm font-semibold font-['Poppins']" onClick={()=>{setCancel(true)}}>Cancelled Orders</div>
                        </div>
                        <div className="Delivered w-[134px] h-[70px] relative">
                            <div className="Delivered left-[31px] top-[25px] absolute text-zinc-400 text-sm font-semibold font-['Poppins']"onClick={()=>{setDeviver(true)}}>Delivered</div>
                        </div>
                        <div className="AwaitingShipment w-[189px] h-[70px] relative">
                            <div className="AwaitingShipment left-[26px] top-[25px] absolute text-zinc-400 text-sm font-semibold font-['Poppins']"onClick={()=>{setAwaite(true)}}>Awaiting Shipment</div>
                        </div>
                        {
                            allorder?<div className="Group58 w-[1045px] h-[469px]  top-[100px] absolute">
                            <div className="Rectangle9 w-[1043px] h-[469px] left-[1px] top-0 absolute bg-white rounded-[5px] border border-zinc-300" />
                            <div className="Group20 w-[70px] h-10 left-[13px] top-[15.01px] absolute">
                                <div className="Rectangle10 w-[70px] h-10 left-0 top-0 absolute bg-white rounded-[5px] border border-blue-500" />
                                <div className="Add left-[21px] top-[9px] absolute text-blue-500 text-sm font-semibold font-['Poppins']">Add</div>
                            </div>
                            <div className="Group56 w-[110px] h-10 left-[98px] top-[15px] absolute">
                                <div className="Rectangle10 w-[110px] h-10 left-0 top-0 absolute bg-white rounded-[5px] border border-blue-500" />
                                <div className="ExportAll left-[22px] top-[9px] absolute text-blue-500 text-sm font-semibold font-['Poppins']">Export All</div>
                            </div>
                            <div className="Group40 w-[100px] h-10 left-[413px] top-[15.01px] absolute">
                                <div className="Rectangle10 w-[100px] h-10 left-0 top-0 absolute bg-blue-500 rounded-[5px] border border-blue-500" />
                                <div className="Confirm left-[21px] top-[10px] absolute text-white text-sm font-semibold font-['Poppins']">Confirm</div>
                            </div>
                            <div className="Group39 w-[180px] h-10 left-[223px] top-[15.01px] absolute">
                                <div className="Rectangle10 w-[180px] h-10 left-0 top-0 absolute bg-white rounded-[5px] border border-zinc-400" />
                                <div className="ChooseAnAction left-[13px] top-[10px] absolute text-zinc-500 text-sm font-medium font-['Poppins']">Choose an action</div>
                                <div className="DownArrow w-3 h-1.5 left-[156px] top-[17px] absolute" />
                            </div>
                            <div className="Line3 w-[1044px] h-[0px] left-0 top-[70.01px] absolute border border-zinc-300"></div>
                            <div className="Line9 w-[1044px] h-[0px] left-0 top-[132px] absolute border border-zinc-300"></div>
                            <div className="Group48 w-[210px] h-10 left-[543px] top-[15.01px] absolute">
                                <div className="Group41 w-[210px] h-10 left-0 top-0 absolute">
                                    <div className="Rectangle10 w-[210px] h-10 left-0 top-0 absolute bg-white rounded-[5px] border border-zinc-400" />
                                    <div className="FilterByKeyword left-[14px] top-[10px] absolute text-zinc-500 text-sm font-medium font-['Poppins']">Filter by keyword</div>
                                </div>
                                <div className="Line4 w-10 h-[0px] left-[156px] top-[40px] absolute origin-top-left -rotate-90 border border-zinc-400"></div>
                                <div className="Filter w-[21.05px] h-4 left-[171px] top-[13px] absolute" />
                            </div>
                            <div className="Line5 w-[70.03px] h-[0px] left-[528px] top-[70.03px] absolute origin-top-left -rotate-90 border border-zinc-300"></div>
                            <div className="Line6 w-[70.03px] h-[0px] left-[770px] top-[70.04px] absolute origin-top-left -rotate-90 border border-zinc-300"></div>
                            <div className="Line7 w-[70.03px] h-[0px] left-[859px] top-[70.04px] absolute origin-top-left -rotate-90 border border-zinc-300"></div>
                            <div className="Search left-[790px] top-[25.01px] absolute text-blue-500 text-sm font-medium font-['Poppins']">Search</div>
                            <div className="Group50 w-[68px] h-[21px] left-[962px] top-[25.01px] absolute">
                                <div className="DownArrow w-2 h-1 left-[60px] top-[9px] absolute" />
                                <div className="View20 w-14 left-0 top-0 absolute text-blue-500 text-sm font-medium font-['Poppins']">View 20</div>
                            </div>
                            <div className="Group55 w-[68px] h-[21px] left-[962px] top-[409px] absolute">
                                <div className="DownArrow w-2 h-1 left-[60px] top-[9px] absolute" />
                                <div className="View20 w-14 left-0 top-0 absolute text-blue-500 text-sm font-medium font-['Poppins']">View 20</div>
                            </div>
                            <div className="Add w-[18px] h-[18px] left-[76px] top-[90px] absolute" />
                            <div className="OrderId left-[269px] top-[90px] absolute text-neutral-600 text-sm font-semibold font-['Poppins']">Order ID</div>
                            <div className="Customer left-[372px] top-[90px] absolute text-neutral-600 text-sm font-semibold font-['Poppins']">Customer</div>
                            <div className="Status left-[499px] top-[90px] absolute text-neutral-600 text-sm font-semibold font-['Poppins']">Status</div>
                            <div className="Total left-[785px] top-[90px] absolute text-neutral-600 text-sm font-semibold font-['Poppins']">Total</div>
                            <div className="Action left-[976px] top-[90px] absolute text-neutral-600 text-sm font-semibold font-['Poppins']">Action</div>
                            <div className="Group51 w-14 h-[21px] left-[143px] top-[90px] absolute">
                                <div className="DownArrow w-2 h-1 left-[40px] top-[9px] absolute" />
                                <div className="Date w-14 left-0 top-0 absolute text-neutral-600 text-sm font-semibold font-['Poppins']">Date</div>
                            </div>
                            <div className="Group52 w-[1044px] h-[58px] left-0 top-[154.99px] absolute">
                                <div className="Line10 w-[1044px] h-[0px] left-0 top-[58px] absolute border border-zinc-300"></div>
                                <div className=" left-[269px] top-[7px] absolute text-neutral-600 text-sm font-medium font-['Poppins']">01234567</div>
                                <div className="Feb24th2022 left-[143px] top-[7px] absolute text-neutral-700 text-sm font-medium font-['Poppins']">Feb 24th 2022</div>
                                <div className="1000000 left-[784px] top-[7px] absolute text-neutral-600 text-sm font-medium font-['Poppins']">$10,000.00</div>
                                <div className="Add w-[18px] h-[18px] left-[75px] top-[8px] absolute" />
                                <div className="Name left-[372px] top-[7.01px] absolute text-neutral-600 text-sm font-medium font-['Poppins']">Name</div>
                                <div className="Group132 w-[203px] h-[35px] left-[499px] top-0 absolute">
                                    <div className="Group53 w-[180px] h-[35px] left-[23px] top-0 absolute">
                                        <div className="Rectangle10 w-[180px] h-[35px] left-0 top-0 absolute bg-white rounded-[5px] border border-zinc-400" />
                                        <div className="DownArrow w-3 h-1.5 left-[155px] top-[14px] absolute" />
                                    </div>
                                    <div className="Rectangle15 w-[15px] h-[30px] left-0 top-[2px] absolute bg-green-500 rounded-[20px]" />
                                    <div className="Delivered left-[28px] top-[7.01px] absolute text-neutral-600 text-sm font-medium font-['Poppins']">Delivered</div>
                                </div>
                            </div>
                            <div className="Group53 w-[1044px] h-[58px] left-[1px] top-[234px] absolute">
                                <div className="Line10 w-[1044px] h-[0px] left-0 top-[58px] absolute border border-zinc-300"></div>
                                <div className=" left-[269px] top-[7px] absolute text-neutral-600 text-sm font-medium font-['Poppins']">01234567</div>
                                <div className="Feb24th2022 left-[143px] top-[7px] absolute text-neutral-700 text-sm font-medium font-['Poppins']">Feb 24th 2022</div>
                                <div className="1000000 left-[784px] top-[7px] absolute text-neutral-600 text-sm font-medium font-['Poppins']">$10,000.00</div>
                                <div className="Add w-[18px] h-[18px] left-[75px] top-[8px] absolute" />
                                <div className="Screen w-5 h-[18px] left-[98px] top-[8px] absolute" />
                                <div className="Name left-[372px] top-[7.01px] absolute text-neutral-600 text-sm font-medium font-['Poppins']">Name</div>
                                <div className="Group132 w-[203px] h-[35px] left-[499px] top-0 absolute">
                                    <div className="Group53 w-[180px] h-[35px] left-[23px] top-0 absolute">
                                        <div className="Rectangle10 w-[180px] h-[35px] left-0 top-0 absolute bg-white rounded-[5px] border border-zinc-400" />
                                        <div className="DownArrow w-3 h-1.5 left-[155px] top-[14px] absolute" />
                                    </div>
                                    <div className="Rectangle15 w-[15px] h-[30px] left-0 top-[2px] absolute bg-orange-400 rounded-[20px]" />
                                    <div className="AwaitingShipment left-[28px] top-[7px] absolute text-neutral-600 text-sm font-medium font-['Poppins']">Awaiting Shipment</div>
                                </div>
                            </div>
                            <div className="Group54 w-[1044px] h-[227px] left-[1px] top-[143px] absolute">
                                <div className="Line10 w-[1044px] h-[0px] left-0 top-[227px] absolute border border-zinc-300"></div>
                                <div className=" left-[269px] top-[176px] absolute text-neutral-600 text-sm font-medium font-['Poppins']">01234567</div>
                                <div className="Feb24th2022 left-[143px] top-[176px] absolute text-neutral-700 text-sm font-medium font-['Poppins']">Feb 24th 2022</div>
                                <div className="1000000 left-[784px] top-[176px] absolute text-neutral-600 text-sm font-medium font-['Poppins']">$10,000.00</div>
                                <div className="Action w-[57px] h-[58px] left-[968px] top-0 absolute" />
                                <div className="Action w-[57px] h-[58px] left-[968px] top-[79px] absolute" />
                                <div className="Action w-[57px] h-[58px] left-[968px] top-[158px] absolute" />
                                <div className="Add w-[18px] h-[18px] left-[75px] top-[177px] absolute" />
                                <div className="Name left-[372px] top-[176.01px] absolute text-neutral-600 text-sm font-medium font-['Poppins']">Name</div>
                                <div className="Group132 w-[203px] h-[35px] left-[499px] top-[169px] absolute">
                                    <div className="Group53 w-[180px] h-[35px] left-[23px] top-0 absolute">
                                        <div className="Rectangle10 w-[180px] h-[35px] left-0 top-0 absolute bg-white rounded-[5px] border border-zinc-400" />
                                        <div className="DownArrow w-3 h-1.5 left-[155px] top-[14px] absolute" />
                                    </div>
                                    <div className="Rectangle15 w-[15px] h-[30px] left-0 top-[2px] absolute bg-red-600 rounded-[20px]" />
                                    <div className="Cancelled left-[28px] top-[7px] absolute text-neutral-600 text-sm font-medium font-['Poppins']">Cancelled</div>
                                </div>
                            </div>
                        </div>:null
                        }
                        {
                            cancel?<div className="Group58 w-[1045px] h-[469px]  top-[100px] absolute">
                            <div className="Rectangle9 w-[1043px] h-[469px] left-[1px] top-0 absolute bg-white rounded-[5px] border border-zinc-300" />
                            <div className="Group20 w-[70px] h-10 left-[13px] top-[15.01px] absolute">
                                <div className="Rectangle10 w-[70px] h-10 left-0 top-0 absolute bg-white rounded-[5px] border border-blue-500" />
                                <div className="Add left-[21px] top-[9px] absolute text-blue-500 text-sm font-semibold font-['Poppins']">Add</div>
                            </div>
                            <div className="Group56 w-[110px] h-10 left-[98px] top-[15px] absolute">
                                <div className="Rectangle10 w-[110px] h-10 left-0 top-0 absolute bg-white rounded-[5px] border border-blue-500" />
                                <div className="ExportAll left-[22px] top-[9px] absolute text-blue-500 text-sm font-semibold font-['Poppins']">Export All</div>
                            </div>
                            <div className="Group40 w-[100px] h-10 left-[413px] top-[15.01px] absolute">
                                <div className="Rectangle10 w-[100px] h-10 left-0 top-0 absolute bg-blue-500 rounded-[5px] border border-blue-500" />
                                <div className="Confirm left-[21px] top-[10px] absolute text-white text-sm font-semibold font-['Poppins']">Confirm</div>
                            </div>
                            <div className="Group39 w-[180px] h-10 left-[223px] top-[15.01px] absolute">
                                <div className="Rectangle10 w-[180px] h-10 left-0 top-0 absolute bg-white rounded-[5px] border border-zinc-400" />
                                <div className="ChooseAnAction left-[13px] top-[10px] absolute text-zinc-500 text-sm font-medium font-['Poppins']">Choose an action</div>
                                <div className="DownArrow w-3 h-1.5 left-[156px] top-[17px] absolute" />
                            </div>
                            <div className="Line3 w-[1044px] h-[0px] left-0 top-[70.01px] absolute border border-zinc-300"></div>
                            <div className="Line9 w-[1044px] h-[0px] left-0 top-[132px] absolute border border-zinc-300"></div>
                            <div className="Group48 w-[210px] h-10 left-[543px] top-[15.01px] absolute">
                                <div className="Group41 w-[210px] h-10 left-0 top-0 absolute">
                                    <div className="Rectangle10 w-[210px] h-10 left-0 top-0 absolute bg-white rounded-[5px] border border-zinc-400" />
                                    <div className="FilterByKeyword left-[14px] top-[10px] absolute text-zinc-500 text-sm font-medium font-['Poppins']">Filter by keyword</div>
                                </div>
                                <div className="Line4 w-10 h-[0px] left-[156px] top-[40px] absolute origin-top-left -rotate-90 border border-zinc-400"></div>
                                <div className="Filter w-[21.05px] h-4 left-[171px] top-[13px] absolute" />
                            </div>
                            <div className="Line5 w-[70.03px] h-[0px] left-[528px] top-[70.03px] absolute origin-top-left -rotate-90 border border-zinc-300"></div>
                            <div className="Line6 w-[70.03px] h-[0px] left-[770px] top-[70.04px] absolute origin-top-left -rotate-90 border border-zinc-300"></div>
                            <div className="Line7 w-[70.03px] h-[0px] left-[859px] top-[70.04px] absolute origin-top-left -rotate-90 border border-zinc-300"></div>
                            <div className="Search left-[790px] top-[25.01px] absolute text-blue-500 text-sm font-medium font-['Poppins']">Search</div>
                            <div className="Group50 w-[68px] h-[21px] left-[962px] top-[25.01px] absolute">
                                <div className="DownArrow w-2 h-1 left-[60px] top-[9px] absolute" />
                                <div className="View20 w-14 left-0 top-0 absolute text-blue-500 text-sm font-medium font-['Poppins']">View 20</div>
                            </div>
                            <div className="Group55 w-[68px] h-[21px] left-[962px] top-[409px] absolute">
                                <div className="DownArrow w-2 h-1 left-[60px] top-[9px] absolute" />
                                <div className="View20 w-14 left-0 top-0 absolute text-blue-500 text-sm font-medium font-['Poppins']">View 20</div>
                            </div>
                            <div className="Add w-[18px] h-[18px] left-[76px] top-[90px] absolute" />
                            <div className="OrderId left-[269px] top-[90px] absolute text-neutral-600 text-sm font-semibold font-['Poppins']">Order ID</div>
                            <div className="Customer left-[372px] top-[90px] absolute text-neutral-600 text-sm font-semibold font-['Poppins']">Customer</div>
                            <div className="Status left-[499px] top-[90px] absolute text-neutral-600 text-sm font-semibold font-['Poppins']">Status</div>
                            <div className="Total left-[785px] top-[90px] absolute text-neutral-600 text-sm font-semibold font-['Poppins']">Total</div>
                            <div className="Action left-[976px] top-[90px] absolute text-neutral-600 text-sm font-semibold font-['Poppins']">Action</div>
                            <div className="Group51 w-14 h-[21px] left-[143px] top-[90px] absolute">
                                <div className="DownArrow w-2 h-1 left-[40px] top-[9px] absolute" />
                                <div className="Date w-14 left-0 top-0 absolute text-neutral-600 text-sm font-semibold font-['Poppins']">Date</div>
                            </div>
                            <div className="Group52 w-[1044px] h-[58px] left-0 top-[154.99px] absolute">
                                <div className="Line10 w-[1044px] h-[0px] left-0 top-[58px] absolute border border-zinc-300"></div>
                                <div className=" left-[269px] top-[7px] absolute text-neutral-600 text-sm font-medium font-['Poppins']">01234567</div>
                                <div className="Feb24th2022 left-[143px] top-[7px] absolute text-neutral-700 text-sm font-medium font-['Poppins']">Feb 24th 2022</div>
                                <div className="1000000 left-[784px] top-[7px] absolute text-neutral-600 text-sm font-medium font-['Poppins']">$10,000.00</div>
                                <div className="Add w-[18px] h-[18px] left-[75px] top-[8px] absolute" />
                                <div className="Name left-[372px] top-[7.01px] absolute text-neutral-600 text-sm font-medium font-['Poppins']">Name</div>
                                <div className="Group132 w-[203px] h-[35px] left-[499px] top-0 absolute">
                                    <div className="Group53 w-[180px] h-[35px] left-[23px] top-0 absolute">
                                        <div className="Rectangle10 w-[180px] h-[35px] left-0 top-0 absolute bg-white rounded-[5px] border border-zinc-400" />
                                        <div className="DownArrow w-3 h-1.5 left-[155px] top-[14px] absolute" />
                                    </div>
                                    <div className="Rectangle15 w-[15px] h-[30px] left-0 top-[2px] absolute bg-green-500 rounded-[20px]" />
                                    <div className="Delivered left-[28px] top-[7.01px] absolute text-neutral-600 text-sm font-medium font-['Poppins']">Delivered</div>
                                </div>
                            </div>
                            <div className="Group53 w-[1044px] h-[58px] left-[1px] top-[234px] absolute">
                                <div className="Line10 w-[1044px] h-[0px] left-0 top-[58px] absolute border border-zinc-300"></div>
                                <div className=" left-[269px] top-[7px] absolute text-neutral-600 text-sm font-medium font-['Poppins']">01234567</div>
                                <div className="Feb24th2022 left-[143px] top-[7px] absolute text-neutral-700 text-sm font-medium font-['Poppins']">Feb 24th 2022</div>
                                <div className="1000000 left-[784px] top-[7px] absolute text-neutral-600 text-sm font-medium font-['Poppins']">$10,000.00</div>
                                <div className="Add w-[18px] h-[18px] left-[75px] top-[8px] absolute" />
                                <div className="Screen w-5 h-[18px] left-[98px] top-[8px] absolute" />
                                <div className="Name left-[372px] top-[7.01px] absolute text-neutral-600 text-sm font-medium font-['Poppins']">Name</div>
                                <div className="Group132 w-[203px] h-[35px] left-[499px] top-0 absolute">
                                    <div className="Group53 w-[180px] h-[35px] left-[23px] top-0 absolute">
                                        <div className="Rectangle10 w-[180px] h-[35px] left-0 top-0 absolute bg-white rounded-[5px] border border-zinc-400" />
                                        <div className="DownArrow w-3 h-1.5 left-[155px] top-[14px] absolute" />
                                    </div>
                                    <div className="Rectangle15 w-[15px] h-[30px] left-0 top-[2px] absolute bg-orange-400 rounded-[20px]" />
                                    <div className="AwaitingShipment left-[28px] top-[7px] absolute text-neutral-600 text-sm font-medium font-['Poppins']">Awaiting Shipment</div>
                                </div>
                            </div>
                            <div className="Group54 w-[1044px] h-[227px] left-[1px] top-[143px] absolute">
                                <div className="Line10 w-[1044px] h-[0px] left-0 top-[227px] absolute border border-zinc-300"></div>
                                <div className=" left-[269px] top-[176px] absolute text-neutral-600 text-sm font-medium font-['Poppins']">01234567</div>
                                <div className="Feb24th2022 left-[143px] top-[176px] absolute text-neutral-700 text-sm font-medium font-['Poppins']">Feb 24th 2022</div>
                                <div className="1000000 left-[784px] top-[176px] absolute text-neutral-600 text-sm font-medium font-['Poppins']">$10,000.00</div>
                                <div className="Action w-[57px] h-[58px] left-[968px] top-0 absolute" />
                                <div className="Action w-[57px] h-[58px] left-[968px] top-[79px] absolute" />
                                <div className="Action w-[57px] h-[58px] left-[968px] top-[158px] absolute" />
                                <div className="Add w-[18px] h-[18px] left-[75px] top-[177px] absolute" />
                                <div className="Name left-[372px] top-[176.01px] absolute text-neutral-600 text-sm font-medium font-['Poppins']">Name</div>
                                <div className="Group132 w-[203px] h-[35px] left-[499px] top-[169px] absolute">
                                    <div className="Group53 w-[180px] h-[35px] left-[23px] top-0 absolute">
                                        <div className="Rectangle10 w-[180px] h-[35px] left-0 top-0 absolute bg-white rounded-[5px] border border-zinc-400" />
                                        <div className="DownArrow w-3 h-1.5 left-[155px] top-[14px] absolute" />
                                    </div>
                                    <div className="Rectangle15 w-[15px] h-[30px] left-0 top-[2px] absolute bg-red-600 rounded-[20px]" />
                                    <div className="Cancelled left-[28px] top-[7px] absolute text-neutral-600 text-sm font-medium font-['Poppins']">Cancelled</div>
                                </div>
                            </div>
                        </div>:null
                        }
                        
                    </div> 
    )
}

export default Views