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

      </div>
    </section>
  )
}

export default Form
