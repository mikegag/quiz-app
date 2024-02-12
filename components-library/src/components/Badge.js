import React from "react";

export default function Badge({ children, colour, roundedShape }) {
  const badgeOptions = {
    gray: { background: "#DEDFE0", color: "#1F2937" },
    red: { background: "#FEE2E2", color: "#991B1B" },
    yellow: { background: "#FEF3C7", color: "#92400E" },
    green: { background: "#D1FAE5", color: "#065F46" },
    blue: { background: "#DBEAFE", color: "#1E40AF" },
    indigo: { background: "#E0E7FF", color: "#3730A3" },
    purple: { background: "#EDE9FE", color: "#5B21B6" },
    pink: { background: "#FCE7F3", color: "#9D174D" }
  }

  const specificStyling = {
    borderRadius: roundedShape ? "25px" : "3px",
    fontSize: "1rem",
    textAlign: "center",
    fontFamily: "inter",
    width: "min-content",
    height: "min-content",
    padding: "0.35em 1em",
    background: badgeOptions[colour]?.background || badgeOptions.gray.background,
    color: badgeOptions[colour]?.color || badgeOptions.gray.color
  }

  return <div style={specificStyling}>{children}</div>
}
