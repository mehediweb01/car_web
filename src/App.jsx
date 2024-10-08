import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css'
import BestSelling from './components/BestSelling'
import FilterAndSearch from './components/FilterAndSearch'
import FindVehicles from './components/FindVehicles'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Review from './components/Review'
import TrendingCard from './components/TrendingCard'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FilterAndSearch />
      <TrendingCard />
      <BestSelling />
      <Review />
      <FindVehicles />
      <Footer />
    </>
  )
}

export default App
