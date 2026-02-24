import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PopularProducts from "./components/PopularProducts";
import Testimonials from "./components/Testimonials";
import WhychooseUs from "./components/WhychooseUs";

function App() {

  return (
    <>
      <Header />
      <main>
          <Hero />
          <WhychooseUs />
          <PopularProducts />
          <Testimonials />
          <Blog />
          <Footer />
      </main>
    </>
  )
}  

export default App
