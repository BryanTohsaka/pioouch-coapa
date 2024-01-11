import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Features from "../components/Features";
import CallToAction from "../components/CallToAction";
import CallToActionTwo from "../components/CallToActionTwo";
import Counter from "../components/Counter";
import Screenshots from "../components/Screenshots";
import Btnwp from "../components/Btnwp";



const HomePage = () => (

    <Layout pageTitle="Ay piojos - Mixcoac">
        
        <NavOne />
        <Banner />
        <Features />
        <CallToAction />
        <CallToActionTwo />
        <Counter />
        <Screenshots />
        <Footer />
        <Btnwp />
    </Layout>

)

export default HomePage;