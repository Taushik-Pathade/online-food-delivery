import { createClient } from '@sanity/client'
import  imageUrlBuilder  from "@sanity/image-url"



const client= createClient ({

    projectId: 'orl3xbcx',
    dataset: 'production',
    useCdn: true,
    apiVersion:"2023-06-17",

})
  const builder = imageUrlBuilder(client)
  export const urlFor = (source) => builder.image(source);
  export default client