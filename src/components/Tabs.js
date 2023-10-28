import React, { useEffect, useState } from 'react'
import Header from './header'

function Tabs() {
    const [tab,setTab] = useState(1)
    const json = [
        {
            "id":1,
            "title":"All"
        },
        {
            "id":2,
            "title":"Overview"
        },
        {
            "id":3,
            "title":"Posted"
        }
    ]
    const [counter,setCounter] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCounter(counter+1)
        },1000)
    },[counter])
  return (
    <div>
      {/* <button style={tab===0 ? {backgroundColor:"red"} : {}} onClick={()=>setTab(1)}>All</button>
      <button onClick={()=>setTab(2)}>Overview</button>
      <button onClick={()=>setTab(3)}>Posted</button> */}
      {
        json && json?.map((item, index) => {
            return (
                <button key={index} style={tab===item.id ? {backgroundColor:"red"} : {}} onClick={()=>setTab(item.id)}>
                    {item.title}
                </button>
            )
        })
      }
      {
        tab === 1 && <Header tab={true}/>
      }
      {
        tab === 2 && <>1</>
      }
      {
        tab === 3 && <>2</>
      }
      {
        counter
      }
    </div>
  )
}

export default Tabs
