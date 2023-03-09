import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'
import Item from '../Item/Item'
import './main.css'

const Main = () => {

  const [oldSchool, setOldSchool] = useState([])
  const [best, setBest] = useState([])
  useEffect(() => {
    axios.get('http://localhost:1337/api/old-schools?populate=*').then((oldSchool) => {
      console.log(oldSchool.data.data)
      setOldSchool(oldSchool.data.data)
    }).catch(() => {

    }).finally(() => {

    })
    // GET /api/articles?populate=*
    axios.get('http://localhost:1337/api/best-sellers?populate=*').then((best) => {
      setBest(best.data.data)

    }).catch(() => {

    }).finally(() => {

    })

  }, [])
  return (
    <>
      <Navbar />
      <section className='main'>
      <h1>Best Seller</h1>
        <article className='bestSeller'>
        {
          best.map((item) => {
            return (
              <Item key={item.id} {...item.attributes} item = {item}/>
            )
          })
        }
        </article>
        <h1>Old School</h1>
        <article className='oldSchool'>

          
          {
            oldSchool.map((item) => {
              return (
                <Item key={item.id} {...item.attributes} item = {item}/>
              )
            })
          }
        </article>


      </section>
    </>
  )
}

export default Main