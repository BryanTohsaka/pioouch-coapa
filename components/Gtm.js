import { useEffect } from "react";
import { useRouter } from "next/router";
import TagManager from "react-gtm-module";

const GTM_ID = "GTM-TDCXVNWF"; 
const useGTM = () => {
    const router = useRouter();

    useEffect(() => {
        TagManager.initialize({ gtmId: GTM_ID });

        const handleRouteChange = (url) => {
            TagManager.pageview({ url });
        };

        router.events.on("routeChangeComplete", handleRouteChange);

        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);
};

export default useGTM;
