import React from "react"
import 'font-awesome/css/font-awesome.min.css'

export default function Testimonial(props) {
  return (
      props.image?
        <div className="testimonial-with-pic">
          <img className="testimonial-picture" 
            alt={`image of ${props.image? props.image: "lady smiling"}`} 
            src={props.image? props.image: "./src/assets/example-profile.png"}> 
          </img>
          <div className="testimonial-info">
            <i className="fa fa-quote-left"></i>
            <p className="testimonial-info-description">
              {props.description? props.description:`In a recent interview, the CEO of Workcation, 
                May Andersons, shared a thought-provoking quote that encapsulates the company's innovative ethos: 
                "Success isn't just about reaching the destination; it's about relishing the journey and finding 
                inspiration in every twist and turn." With these words, Andersons underscores Workcation's commitment 
                to fostering a dynamic workplace culture where creativity flourishes, and employees are encouraged to 
                embrace challenges as opportunities for growth. This mantra reflects the company's belief in the power 
                of adaptability and resilience, driving them to continuously redefine the boundaries of success in 
                today's ever-evolving business landscape.`
              }
            </p>
            <p className="testimonial-info-name">
              {props.name? props.name:"May Andersons"}
            </p>
            <p className="testimonial-info-position">
              {props.position? props.position:"Workcation, CEO"}
            </p>
          </div>
        </div>
        :
        <div className="testimonial-no-pic">
          <img className="testimonial-background-top" 
              alt="image of grid background"
              src="../assets/grid.png"> 
          </img>
          <img className="testimonial-logo"     
            alt={`image of ${props.image? props.image: "workCation logo"}`} 
            src={props.image? props.image: "../assets/example-logo.png"}> 
          </img>
          <p className="testimonial-info-description">
              {props.description? props.description:
                `Driving innovative solutions for your specific needs!
                Our goal at Workcation is to empower individuals and businesses alike to break free
                from convention, forge new paths, and pioneer solutions tailored precisely to their
                unique aspirations and requirements.`
              }
          </p>
          <div className="testimonial-info-credentials">
              <p>{props.name? props.name:"May Andersons"}</p>
              <p><i className="fa fa-ellipsis-v"></i></p>
              <p>{props.position? props.position:"Workcation, CEO"}</p>
          </div>
          <img className="testimonial-background-bottom" 
              alt="image of grid background"
              src="../assets/grid.png"> 
          </img>
        </div>
  )
}