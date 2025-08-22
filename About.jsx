import { Leaf, ShoppingBag, Heart, Truck } from "lucide-react"
import FreshMart from "../assets/FreshMart.jpg"

const values = [
  {
    title: "Freshness",
    para: "We're committed to providing the freshest produce and products, sourced locally whenever possible.",
    logo: <Leaf className="h-8 w-8" />
  },
  {
    title: "Quality",
    para: "We carefully select every product on our shelves to ensure the highest quality for our customers.",
    logo: <ShoppingBag className="h-8 w-8" />
  },
  {
    title: "Community",
    para: "We're proud to support local farmers, producers, and community initiatives in every neighborhood we serve.",
    logo: <Heart className="h-8 w-8" />
  },
  {
    title: "Sustainability",
    para: "We're committed to environmentally friendly practices and reducing our carbon footprint.",
    logo: <Truck className="h-8 w-8" />
  }
]

const About = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto py-12 px-4 mt-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-green-700">About Grocify</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your neighborhood grocery store committed to providing fresh, quality products since 2000.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center md:mb-20">
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-green-600">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Grofify began with a simple idea: to create a grocery store that offers the freshest produce, highest quality meats, and finest selection of everyday essentials at fair prices—while redefining grocery shopping with convenience, trust, and a modern touch.
              </p>
              <p>
                Founded in 2025 by Nilesh Bagde, Grofify opened its first store in Grocery City with just 15 passionate team members. Today, we’ve expanded to 25 thriving locations across the state, yet our dedication to quality, innovation, and community remains stronger than ever.
              </p>
              <p>
                We work directly with local farmers and producers to bring you the best products while supporting our
                local economy. Our team members are passionate about food and dedicated to providing exceptional customer
                service.
              </p>
            </div>
          </div>
          <div className="relative  overflow-hidden">
            <img
              src={FreshMart}
              alt="FreshMart store front"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="mb-20 mt-10">
          <h2 className="text-3xl font-semibold mb-10 text-center text-green-600">Our Values</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 ">
            {
              values.map((item, index) => {
                return <div key={index} className="border-t-4 border-1 rounded-md border-green-500">
                  <div className="py-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-green-100 p-3 rounded-full mb-4 text-green-600  ">
                        {/* <Leaf className="h-8 w-8 text-green-600" /> */}
                        {item.logo}
                      </div>
                      <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                      <p className="text-gray-600 px-4">
                        {item.para}
                      </p>
                    </div>
                  </div>
                </div>
              })
            }

          </div>
        </div>



      </div>

    </div>
  )
}

export default About; 