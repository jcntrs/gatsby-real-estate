import { useStaticQuery, graphql } from 'gatsby';

const useProperties = () => {
    const data = useStaticQuery(graphql`
        query {
            allStrapiProperties {
                nodes {
                    name
                    description
                    id
                    bathrooms
                    price
                    parking
                    rooms
                    category {
                        name
                    }
                    agents {
                        name
                        phone
                        email
                    }
                    image {
                        sharp: childImageSharp {
                            fluid(maxWidth: 600, maxHeight: 400) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    `);

    return data.allStrapiProperties.nodes.map(property => ({
        name: property.name,
        description: property.description,
        id: property.id,
        bathrooms: property.bathrooms,
        price: property.price,
        parking: property.parking,
        rooms: property.rooms,
        category: property.category,
        agents: property.agents,
        image: property.image
    }));
}

export default useProperties;