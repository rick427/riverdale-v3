import Layout from "@/components/base/Layout";

//@: Components
import Hero from "@/components/ui/About/Hero";
import Founders from "@/components/ui/About/Founders";

export default function About() {
    return (
        <Layout>
            <Hero/>
            <Founders />
        </Layout>
    )
}
