import React from 'react'

const Form = () => {
  return (
    <section className="container form__container">
      <h1>IP Address Tracker</h1>
      <form className="input-wrapper">
        <input className="ip-address-input" type="text" placeholder="Search for any IP address or domain" name="ip-address" />
        <button className="submit-button"></button>
      </form>
      <div className="output-data">
        <div className="output-data-wrapper ">
          <h2>ip address</h2>
          <p>192.188.145.212</p>
        </div>
        <div className="output-data-wrapper ">
          <h2>location</h2>
          <p>Brooklyn, NY <br/>10001</p>
        </div>
        <div className="output-data-wrapper ">
          <h2>timezone</h2>
          <p>UTC -05:00</p>
        </div>
        <div className="output-data-wrapper output-data-wrapper-last">
          <h2>isp</h2>
          <p>SpaceX Starlink</p>
        </div>
      </div>
    </section>
  )
}

export default Form
