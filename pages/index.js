import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Features from "../components/Features";
import CallToAction from "../components/CallToAction";
import CallToActionTwo from "../components/CallToActionTwo";
import Counter from "../components/Counter";
import Screenshots from "../components/Screenshots";
import ContactButtons from "../components/ContactButtons";




const HomePage = () => (

    <Layout pageTitle="Sin piojos - Coapa">
        
        <NavOne />
        <Banner />
        <Features />
        <CallToAction />
        <CallToActionTwo />
        <Counter />
        <Screenshots />
        <Footer />

    </Layout>

)

export default HomePage;