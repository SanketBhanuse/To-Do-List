import React from 'react'
const header = (props) => {
  return (
    // <section id="header" style={props?.tab ? {backgroundColor:"#fff"} : {}}>
    <section id="header">
        <div className="container">
            <div className="heading_content_wrapper">
                 <div className="heading">{props.title}</div>    
                 {props.desc? <div className="description">Empower Your Journey: Unleash Productivity, Embrace Success</div>:""}    
            </div>
        </div>
    </section>
  )
}

header.defaultProps = {
    title: "This is Your Heading",
    desc : false
}
 

export default header