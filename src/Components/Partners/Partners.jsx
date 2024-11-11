import React from 'react'
import "./Partners.css"
import p from "../Assets/p.png"
import p1 from "../Assets/p1.png"
import p2 from "../Assets/p2.png"
import p3 from "../Assets/p3.png"

export default function Partners() {
  return (
    <div className='main_parthners'>
    <div className="container">
        <h1 className='lower_tkn'>Our Partners</h1>
        <div className="row mt-3">
            <div className="col-md-3">
                <div className="partner_box">
                <img src={p} alt="" />

                </div>
            </div>
            <div className="col-md-3 mt-3 mt-md-0">
                <div className="partner_box">
                <img src={p1} alt="" />

                </div>
            </div>
            <div className="col-md-3 mt-3 mt-md-0">
                <div className="partner_box">
                <img src={p2} alt="" />

                </div>
            </div>
            <div className="col-md-3 mt-3 mt-md-0">
                <div className="partner_box">
                <img src={p3} alt="" />

                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
