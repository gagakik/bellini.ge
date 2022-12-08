import SanityClient  from "@sanity/client";

export default SanityClient({
    projectId:  "fd9z0aa0",
    dataset: "bellinidb",
    apiVersion: '2021-08-31',
    useCdn: true
})