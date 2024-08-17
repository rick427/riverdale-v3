import Layout from "@/components/base/Layout";

//@: Components
import Hero from "@/components/ui/About/Hero";
import Founders from "@/components/ui/About/Founders";
// import Company from "@/components/ui/About/Company";
// import Teams from "@/components/ui/About/Team";
// import Banner from "@/components/ui/About/Banner";

export default function About() {
    return (
        <Layout>
            <Hero/>
            <Founders />
            {/* <Company /> */}
            {/* <Teams /> */}
            {/* <Banner/> */}
        </Layout>
    )
}
