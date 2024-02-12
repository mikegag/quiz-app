import React from "react"
import 'font-awesome/css/font-awesome.min.css'

export default function Banner(props) {
  const bannerTypes = {
    success: {
      logo: <i className="fa fa-check-circle"></i>,
      logoColor: "#34D399",
      message: "Congratulations!",
      background: "#D1FAE5",
      color: "#065F46"
    },
    warning: {
      logo: <i className="fa fa-exclamation-triangle"></i>,
      logoColor: "#FBBF24",
      message: "Attention",
      background: "#FEF3C7",
      color: "#92400E"
    },
    error: {
      logo: <i className="fa fa-times-circle"></i>,
      logoColor: "#F87171",
      message: "Error Occurred",
      background: "#FEE2E2",
      color: "#991B1B"
    },
    neutral: {
      logo: <i className="fa fa-info-circle"></i>,
      logoColor: "#60A5FA",
      message: "Update Available",
      background: "#DBEAFE",
      color: "#1E40AF"
    }
  }

  const { logo, logoColor, message, background, color } = bannerTypes[props.type]

  return (
    <div className="banner" style={{ background, color }}>
      <div className="banner-logo" style={{ color: logoColor }}>
        {logo}
      </div>
      <div className="banner-text">
        <h3>{message}</h3>
        {props.description ? <p>{props.description}</p> : null}
      </div>
    </div>
  )
}
