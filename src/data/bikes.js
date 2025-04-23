const bikes = [
  {
    id: "classic",
    name: "Classic 350",
    tagline: "Timeless Beauty. Modern Soul.",
    description: "The Classic 350 is a modern classic motorcycle that is inspired by the post-war G2 model, first birthed in the 1950s. Continuing the rich legacy of Royal Enfield's Classic motorcycles, the new Classic 350 combines timeless design with modern technology to create an evocative, engaging, and exciting motorcycle for today's rider.",
    specs: {
      engine: "349cc, Single Cylinder, 4 Stroke",
      power: "20.2 bhp @ 6100 rpm",
      torque: "27 Nm @ 4000 rpm",
      transmission: "5-Speed Constant Mesh",
      fuelCapacity: "13 litres",
      weight: "195 kg"
    },
    colors: [
      { name: "Chrome Red", code: "#800000" },
      { name: "Chrome Bronze", code: "#CD7F32" },
      { name: "Halcyon Green", code: "#1A4D2E" },
      { name: "Dark Stealth Black", code: "#1A1A1A" }
    ],
    price: "$4,599",
    images: {
      main: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/49653/classic-left-rear-three-quarter.jpeg?q=100",
      gallery: [
        "https://cdn.wallpapersafari.com/84/45/92gxAo.jpg",
        "https://images.pexels.com/photos/5661487/pexels-photo-5661487.jpeg?cs=srgb&dl=pexels-817621-5661487.jpg&fm=jpg",
        "https://images.unsplash.com/photo-1694956792421-e946fff94564?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm95YWwlMjBlbmZpZWxkJTIwY2xhc3NpYyUyMDM1MHxlbnwwfHwwfHx8MA%3D%3D"
      ]
    },
    features: [
      "Timeless Post-War Design",
      "Modern J-Series Engine",
      "Digital-Analog Instrument Cluster",
      "Dual-Channel ABS",
      "USB Charging Port",
      "LED Tail Lamp"
    ]
  },
  {
    id: "interceptor",
    name: "Interceptor 650",
    tagline: "The Modern Classic Roadster",
    description: "With its sculpted tank, eager stance and distinctive wide-braced handlebars, the Interceptor 650 has a versatile, laid-back character that's just as comfortable cruising down the boulevard as it is cornering on a twisty mountain road. Pure motorcycling pleasure.",
    specs: {
      engine: "648cc, Parallel Twin, 4 Stroke",
      power: "47 bhp @ 7150 rpm",
      torque: "52 Nm @ 5250 rpm",
      transmission: "6-Speed Constant Mesh",
      fuelCapacity: "13.7 litres",
      weight: "202 kg"
    },
    colors: [
      { name: "Sunset Strip", code: "#F06845" },
      { name: "Canyon Red", code: "#A52F2F" },
      { name: "Downtown Drag", code: "#262626" },
      { name: "Baker Express", code: "#D9D9D9" }
    ],
    price: "$5,999",
    images: {
      main: "https://cdn.wallpapersafari.com/54/39/IOPyHK.jpg",
      gallery: [
        "https://images.unsplash.com/photo-1726948655162-90a9d31601b1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGludGVyY2VwdG9yJTIwNjUwfGVufDB8fDB8fHww",
        "https://www.team-bhp.com/sites/default/files/styles/amp_high_res/public/IMG_20220115_06562102.jpeg",
        "https://images.pexels.com/photos/13355447/pexels-photo-13355447.jpeg?cs=srgb&dl=pexels-tausif-13355447.jpg&fm=jpg"
      ]
    },
    features: [
      "Twin-Cylinder Performance",
      "Distinctive Twin Exhaust",
      "Classic Teardrop Tank",
      "Brembo-Derived Brakes",
      "Advanced Dual-Channel ABS",
      "Slip-Assist Clutch"
    ]
  },
  {
    id: "himalayan",
    name: "Himalayan",
    tagline: "Built for All Roads. Built for No Roads.",
    description: "The Himalayan is our versatile adventure-touring motorcycle. Designed to be equally capable on city streets and mountain trails, it features a rugged construction, comfortable ergonomics, and a reliable engine that performs consistently across challenging terrains.",
    specs: {
      engine: "411cc, Single Cylinder, 4 Stroke",
      power: "24.3 bhp @ 6500 rpm",
      torque: "32 Nm @ 4500 rpm",
      transmission: "5-Speed Constant Mesh",
      fuelCapacity: "15 litres",
      weight: "199 kg"
    },
    colors: [
      { name: "Granite Black", code: "#2C2C2C" },
      { name: "Mirage Silver", code: "#C0C0C0" },
      { name: "Pine Green", code: "#2C5545" },
      { name: "Rock Red", code: "#9B2B1F" }
    ],
    price: "$5,299",
    images: {
       main: "https://images.pexels.com/photos/17266142/pexels-photo-17266142/free-photo-of-royal-enfield-himalayan-motorbike.jpeg",
      gallery: [
        "https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/himalayan/colors/new-studio-shots/slate-poppy-blue/slate-poppy-blue-000.webp",
        "https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/himalayan/colors/new-studio-shots/kaza-brown/kaza-brown-000.webp",
        "https://images.pexels.com/photos/19547824/pexels-photo-19547824.jpeg?cs=srgb&dl=pexels-green-19547824.jpg&fm=jpg"
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
