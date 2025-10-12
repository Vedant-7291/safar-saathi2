import Journey from '../components/Journey'
import About from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'
import ServiceHighlights from '../components/ServiceHighlights'
import OurVehicles from '../components/OurVehicles'
import WhyWeAreDifferent from '../components/WhyWeAreDifferent'
import OurPackages from '../components/OurPackages'
import FAQs from '../components/FAQs'
import ContactUs from '../components/ContactUs'
import BannerSection from '@/components/BannerSection'
export default function Home() {
  return (
    <div>
      {/* Navbar with Banner is now included in Navbar component */}
     
      {/* Journey Component */}
      <Journey />
      
      {/* About Component */}
      <About />
      
      {/* Why Choose Us Component */}
      <WhyChooseUs />
      
      {/* Service Highlight Component */}
      <ServiceHighlights />
      
      {/* Our Vehicles Component */}
      <OurVehicles />
      
      {/* How We Are Different Component */}
      <WhyWeAreDifferent/>
      
      {/* Packages Component */}
      <OurPackages />
      
      {/* FAQs Component */}
      <FAQs />
      
      {/* Contact Us Component */}
      <ContactUs />
    </div>
  )
}