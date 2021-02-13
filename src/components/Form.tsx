import React, { useEffect } from 'react'
import axios from 'axios';
import { useDataContext } from "../contexts/DataContext";
const Form = () => {
  const { userData, setUserData } = useDataContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`
        https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_API_KEY}`);
        setUserData(res.data);
      } catch (e) {
        console.log(e)
      }
    }

    fetchData()
    // eslint-disable-next-line
  }, [])

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
          {!!userData ? <p>{userData?.ip}</p> : loader()}
        </div>
        <div className="output-data-wrapper ">
          <h2>location</h2>
        {!!userData ? <p>{ `${userData?.location.region}, ${userData?.location.city}` }<br />{ userData?.location.postalCode }</p> : loader()}
        </div>
        <div className="output-data-wrapper ">
          <h2>timezone</h2>
        {!!userData ? <p>UTC {userData?.location.timezone}</p> : loader()}
        </div>
        <div className="output-data-wrapper output-data-wrapper-last">
          <h2>isp</h2>
         {!!userData ? <p>{ userData?.isp }</p> : loader()}
        </div>
      </div>
    </section>
  )
}

const loader = () => <p>Loading...</p>;

export default Form
