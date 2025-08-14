import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import MyExpertise from '../components/HomeComponents/Expertise/MyExpertise';

const home = () => {
  return (
    <div className="Home-Page -z-10">
      <Banner />
      <MyExpertise />

      <Footer />

    </div>
  )
}

export default home