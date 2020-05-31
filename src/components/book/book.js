import React, { useState } from 'react'
import './book.css'
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
const Book = () => {
    const [date, setdate] = useState(new Date())
    const handleChange = date => {
        setdate(date)
      };
    return (
        <div class="dl-profile-booking-wrapper">
    <div class="dl-profile-booking" id="booking">
        <div class="dl-booking-sticky" style={{top: '14px'}}>
            <div>
                <div>
                </div>
                <div style={{position: 'relative'}}>
                    <div>
                        <div class="dl-booking-title">
                            <h3 class="dl-text dl-text-title-sub-bold dl-text-color-inherit"
                                style={{lineHeight: '1.4em;'}}>Book your appointment online</h3>
                            <div class="dl-booking-title-subtext">
                                <span class="dl-text dl-text-body dl-text-color-inherit">Fill in the following information</span>
                            </div>
                        </div>
                        <div class="booking booking-compact-layout">
                            <div>
                                <div class="dl-step">
                                    <div class="dl-step-progress dl-step-progress-completed">

                                    </div>
                                    <div class="dl-step-number dl-step-number-completed">
                                        <svg width="20px" height="20px" viewBox="0 0 20 20">
                                            <g fill="none" fill-rule="evenodd">
                                                <g fill="#17B355">
                                                    <path
                                                        d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z">
                                                    </path>
                                                </g>
                                                <g transform="translate(5.000000, 5.000000)">
                                                    <rect width="10" height="10"></rect>
                                                    <path
                                                        d="M9.614.685a.823.823 0 00-.686-.168.991.991 0 00-.613.385L3.983 7.23 1.601 4.656a.82.82 0 00-.65-.313.966.966 0 00-.674.264 1.044 1.044 0 00-.276.698.952.952 0 00.252.698c1.925 2.15 3.024 3.329 3.297 3.538a.93.93 0 00.71.18.837.837 0 00.59-.397l4.98-7.267a.974.974 0 00.157-.722.964.964 0 00-.373-.65z"
                                                        fill="#FFF"></path>
                                                </g>
                                            </g>
                                        </svg></div>
                                    <div class="dl-layout-container dl-layout-spacing-xs-0">
                                        <div class="dl-layout-item dl-layout-size-xs-12 dl-layout-size-sm-12">
                                            <label class="dl-text dl-text-body-subtitle dl-step-label"
                                                for="booking_motive">Mode of consultation</label>
                                            <div>
                                                
                                            </div>
                                        </div>
                                        <div class="dl-step-children dl-layout-item dl-layout-size-xs-12 dl-layout-size-sm-12">
                                        <hr class="dl-divider" />
                                        <div class="dropdown">
                                            <button style={{width:'100%'}} class="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Choose Reason
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr class="dl-divider" />
                            <div>
                                <div class="dl-step">
                                    <div class="dl-step-number">
                                        <div>2</div>
                                    </div>
                                    <div class="dl-layout-container dl-layout-spacing-xs-0">
                                        <div class="dl-layout-item dl-layout-size-xs-12 dl-layout-size-sm-12"><label
                                                class="dl-text dl-text-body-subtitle dl-step-label">Schedule an appointment</label></div>
                                        <div
                                            class="dl-step-children dl-layout-item dl-layout-size-xs-12 mx-auto dl-layout-size-sm-12">
                                           <DatePicker
                                                className="ml-5 my-3"
                                                selected={date}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default Book
