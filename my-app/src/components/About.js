import React, { useState, useEffect } from 'react'
const About = () => {
    const [ids, setIds] = useState([])
    const userAction = async () => {
        const response = await fetch('https://www.mmobomb.com/api1/games');
        const myJson = response; //extract JSON from the http response
        setIds(myJson)
      }
      useEffect(() => {
        userAction()}, [])
        console.log(ids);
    return(
        <>
        <h2>About</h2>

        </>
    )
}
export default About;