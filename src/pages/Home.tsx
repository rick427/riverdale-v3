import Layout from "@/components/base/Layout";
import Hero from "@/components/ui/Home/Hero";
import Search from "@/components/ui/Home/Search";
import Places from "@/components/ui/Home/Places";
import Blogs from "@/components/ui/Home/Blogs";
import Featured from "@/components/ui/Home/Property";
import CallToAction from "@/components/ui/Home/Banner";

export default function Home() {
    return (
        <Layout>
            <Hero/>
            <Search/>
            <Places />
            <Featured/>
            <Blogs />
            <CallToAction/>
        </Layout>
    )
}
