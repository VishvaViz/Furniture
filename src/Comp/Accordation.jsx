import React from 'react'
import { Accordion } from 'flowbite-react'
import {Link} from 'react-router-dom'

function Accordation() {
    let data = [
        { name: 'Order', value: ['Views', 'Search', 'Export'] },
        { name: 'Products', value: ['Views', 'Add', 'Search', 'Import', 'Export',] },
        { name: 'Customer', value: ['Views', 'Add', 'Search'] },
        { name: 'AdvancedSetting', value: [] },
        { name: 'ZipCode', value: [] },
        { name: 'MyProfile', value: [] },
        { name: 'UserPermission', value: [] },
        { name: 'Mangement', value: [] },
    ]

    return (
        <div className='w-[355px] h-[450px] relative bg-slate-900 mt-[5px]'>
            {
                data.map(({ name, value }, indexi) => {
                    return <div>
                        <div id="accordion-collapse" data-accordion="collapse">
                            <h2 id={"accordion-collapse-heading" + indexi}>
                                <button type="button" className="bg-slate-900" data-accordion-target={"#accordion-collapse-body" + indexi} aria-expanded="flase" aria-controls="accordion-collapse-body">
                                    <p className="text-white w-[54px] h-[24px] mt-[13px] ml-[36px] ">{name}</p>
                                    <svg data-accordion-icon className="w-[10.94px] h-[6px] mt-[-11px] ml-[302px] text-white rotate-[90deg] shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-width="2" d="M9 5 5 1 1 5" />
                                    </svg>
                                </button>
                            </h2>
                            <div id={"accordion-collapse-body"+indexi} className="hidden" aria-labelledby="accordion-collapse-heading">
                                <div className="">
                                    {
                                        value.map((val, indexj) => {
                                            return <div id="accordion-nested-collapse" data-accordion="collapse">
                                                <h2 id={"accordion-nested-collapse-heading" + indexj}>
                                                    <button type="button" className="  text-left bg-slate-900   text-white " data-accordion-target={"#accordion-nested-collapse-body" + indexj} aria-expanded="false" aria-controls="accordion-nested-collapse-body">
                                                        {/* <p className=" w-[40px] h-[24px] mt-[13px] ml-[56px] hover:text-[#2A79EF]  ">{val}</p> */}
                                                        <Link to={`/${val}`} className=" w-[40px] h-[24px] mt-[13px] ml-[56px] hover:text-[#2A79EF]">{val}</Link>
                                                        <svg data-accordion-icon className="w-[10.94px] h-[6px] mt-[-11px] ml-[302px] text-white rotate-[90deg] shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                            <path stroke="currentColor" stroke-width="2" d="M9 5 5 1 1 5" />
                                                        </svg>
                                                    </button>
                                                </h2>
                                                <div id={"accordion-nested-collapse-body"+indexj} className="hidden" aria-labelledby="accordion-nested-collapse-heading-1">
                                                    <div className="  ">
                                                        {/* <p className="text-white w-[40px] h-[24px] mt-[13px] ml-[56px] ">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                    
                })
                
            }












        </div>
    )
}

export default Accordation




