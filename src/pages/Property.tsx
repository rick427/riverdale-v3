import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/base/Layout";

//@: Components
import Hero from "@/components/ui/Property/Hero";
import Details from "@/components/ui/Property/Details";

import { listings, type ListingProps } from "@/constants/listings";

export default function Property() {
    const [listing, setListing] = useState<ListingProps>();
    const { slug } = useParams();

    useEffect(() => {
        const res = listings.find(item => item.slug === slug);
        //@: Throw an error from here if not found
        setListing(res);
    },[]);

    return (
        <Layout>
            <Hero listing={listing} />
            <Details listing={listing} />
        </Layout>
    )
}
