import About from "./components/about"
import Blog from "./components/blog"
import Footer from "./components/footer"
import Hero from "./components/hero"
import Navbar from "./components/navbar"
import Product from "./components/product"
import Showcase from "./components/showcase"


const Landing = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Product/>
      <Showcase/>
       <Blog/>
      <Footer/>
    </div>
  )
}

export default Landing