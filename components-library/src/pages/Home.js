import React from "react"
import Badge from "../components/Badge.js"
import Banner from "../components/Banner.js"
import Card from "../components/Card.js"
import Testimonial from "../components/Testimonial.js"

export default function Home() {

console.log("home page rendered")
  return (
    <main className="home-container">

        <h1>Custom Component Library</h1>
        <section className="badge-section">
          <h2 className="section-title">Badges</h2>
          <div className="badge-pill-component">
            <h3>Pill:</h3>
            <Badge colour={"gray"} roundedShape={true}>Default</Badge>
            <Badge colour={"blue"} roundedShape={true}>Trending</Badge>
            <Badge colour={"green"} roundedShape={true}>Success</Badge>
            <Badge colour={"yellow"} roundedShape={true}>Warning</Badge>
            <Badge colour={"red"} roundedShape={true}>Alert!</Badge>
            <Badge colour={"indigo"} roundedShape={true}>Popular</Badge>
            <Badge colour={"pink"} roundedShape={true}>Error</Badge>
            <Badge colour={"purple"} roundedShape={true}>Oops!</Badge>
          </div>
          <div className="badge-square-component">
            <h3>Square:</h3>
            <Badge colour={"gray"} roundedShape={false}>gray</Badge>
            <Badge colour={"blue"} roundedShape={false}>blue</Badge>
            <Badge colour={"green"} roundedShape={false}>green</Badge>
            <Badge colour={"yellow"} roundedShape={false}>yellow</Badge>
            <Badge colour={"red"} roundedShape={false}>red</Badge>
            <Badge colour={"indigo"} roundedShape={false}>indigo</Badge>
            <Badge colour={"pink"} roundedShape={false}>pink</Badge>
            <Badge colour={"purple"} roundedShape={false}>purple</Badge>
          </div>
        </section>

        <section className="banner-section component">
          <h2 className="section-title">Banners</h2>
          <div className="banner-empty-component">
            <h3>Multi Line:</h3>
            <Banner
              type ={"error"} 
              description={"Something went wrong! Please valid that your username/password is spelt correctly."}/>
            <Banner
              type ={"success"} 
              description={"Congratulations! You have signed up for email notifications."}/>
            <Banner
              type ={"warning"} 
              description={"There might be some issues with your input. Please check your answers."}/>
            <Banner
              type ={"neutral"} 
              description={"An update is available. Click to download the latest version."}/>
          </div>
          <div className="banner-empty-component">
            <h3>Single Line:</h3>
            <Banner type ={"error"} />
            <Banner type ={"success"} />
            <Banner type ={"warning"} />
            <Banner type ={"neutral"} />
          </div>
        </section>

        <section className="card-section component">
          <h2 className="section-title">Clickable Cards</h2>
          <div className="card-light-component">
            <h3>Light Mode:</h3>
            <Card lightMode={true}/>
          </div>
          <div className="card-light-component">
            <h3>Dark Mode:</h3>
            <Card />
          </div>
        </section>

        <section className="testimonial-section component">
          <h2 className="section-title">Testimonials</h2>
            <Testimonial image={"../assets/example-profile.png"}/>
            <Testimonial />
        </section>

    </main>
  )
}