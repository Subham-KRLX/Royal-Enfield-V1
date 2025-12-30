const bikes = [
  {
    id: "classic-350",
    name: "Classic 350",
    tagline: "Timeless Classic",
    description: "The Classic 350 is the machine that counts, for those who count. Pure motorcycling at its finest core.",
    specs: {
      engine: "349cc",
      power: "20.2 BHP",
      weight: "195 kg",
      torque: "27 Nm"
    },
    colors: [
      { name: "Halcyon Green", code: "#2C5545" },
      { name: "Chrome Red", code: "#9B2B1F" },
      { name: "Dark Stealth Black", code: "#1A1A1A" }
    ],
    price: "$4,599",
    images: {
      main: "https://images.pexels.com/photos/17266142/pexels-photo-17266142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      gallery: [
        "https://images.pexels.com/photos/10323330/pexels-photo-10323330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/13355447/pexels-photo-13355447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/19547824/pexels-photo-19547824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ]
    },
    features: [
      "Dual Channel ABS",
      "Digital-Analog Instrument Cluster",
      "USB Charging Port",
      "Wider Rear Tyre",
      "Retuned Suspension"
    ]
  },
  {
    id: "interceptor-650",
    name: "Interceptor 650",
    tagline: "Easy Got Back",
    description: "The 650 Twin is the rebirth of Royal Enfield's legendary parallel twin cylinder engine.",
    specs: {
      engine: "648cc",
      power: "47 BHP",
      weight: "202 kg",
      torque: "52 Nm"
    },
    colors: [
      { name: "Canyon Red", code: "#A93C3C" },
      { name: "Ventura Blue", code: "#2B4C7E" },
      { name: "Baker Express", code: "#F5F5F5" }
    ],
    price: "$5,999",
    images: {
      main: "https://images.pexels.com/photos/13355447/pexels-photo-13355447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      gallery: [
        "https://images.pexels.com/photos/17266142/pexels-photo-17266142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/10323330/pexels-photo-10323330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/19547824/pexels-photo-19547824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ]
    },
    features: [
      "Air/Oil-Cooled Parallel Twin",
      "Slipper Clutch",
      "6-Speed Gearbox",
      "Gas-Charged Shocks",
      "Disc Brakes Front & Rear"
    ]
  },
  {
    id: "himalayan",
    name: "Himalayan",
    tagline: "Built for All Roads",
    description: "Decades of expeditions. Thousands of kilometers of traversing the most challenging terrain.",
    specs: {
      engine: "411cc",
      power: "24.3 BHP",
      weight: "199 kg",
      torque: "32 Nm"
    },
    colors: [
      { name: "Granite Black", code: "#2C2C2C" },
      { name: "Mirage Silver", code: "#C0C0C0" },
      { name: "Pine Green", code: "#2C5545" },
      { name: "Rock Red", code: "#9B2B1F" }
    ],
    price: "$5,299",
    images: {
      main: "https://images.pexels.com/photos/19547824/pexels-photo-19547824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      gallery: [
        "https://images.pexels.com/photos/17266142/pexels-photo-17266142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/10323330/pexels-photo-10323330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/13355447/pexels-photo-13355447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ]
    },
    features: [
      "Long-Travel Suspension",
      "High Ground Clearance",
      "Upswept Exhaust",
      "Tripper Navigation",
      "Hazard Lights",
      "Wind Screen for Protection"
    ]
  }
];

export default bikes;
