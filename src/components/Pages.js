import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import Layout from './Layout';
import { graphql } from 'gatsby';

const PageContent = styled.div`
    max-widh: 1200px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }
`;

export const data = graphql`
    query($id: String!) {
        allStrapiPages(filter: {id:{eq:$id}}) {
            nodes {
                name
                content
                image {
                    sharp: childImageSharp {
                        fluid(maxWidth: 1200) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
  }
`;

const Pages = ({ data: { allStrapiPages: { nodes } } }) => {
    const { name, content, image } = nodes[0];

    return (
        <Layout>
            <main className="container">
                <h1>{name}</h1>
                <PageContent>
                    <Image fluid={image.sharp.fluid} />
                    <p>{content}</p>
                </PageContent>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue turpis nulla, quis feugiat sapien feugiat ut. Aliquam odio erat, 
                    gravida vitae tempus nec, volutpat tempus arcu. Maecenas a mi mauris. Donec vel malesuada est, non hendrerit turpis. Praesent augue purus, 
                    convallis at lorem vulputate, hendrerit consequat turpis. Nam sit amet nibh sit amet enim tempus lobortis. Ut aliquet facilisis facilisis.
                    Cras rutrum interdum odio, porttitor malesuada sapien malesuada in. Aenean vel neque eu urna, sed sapien sapie in neque volutpat tempus arcu.</p>
                <p>Donec eu augue orci. Aenean sit amet quam fringilla, convallis neque quis, imperdiet ipsum. Quisque euismod nibh nulla, a ultrices magna 
                    elementum vel. Duis quis orci nunc. Vivamus urna lacus, pulvinar ac tincidunt nec, aliquam sit amet est. Duis ac ligula consequat, sagittis 
                    ligula nec, venenatis erat. Morbi quis vehicula purus. Curabitur id dapibus ipsum. eleifend dictum eget vitae purus. Aliquam sagittis pharetra 
                    lacus bibendum aliquet. Morbi eget placerat leo. Morbi maximus, magna sed pharetra commodo, nulla nisl eleifend justo, imperdiet ipsum. Quisque 
                    euismod nibh elementum vel. Duis quis orci nunc. Vivamus urna lacus, pulvinar ac tincidunt nec, aliquam sit amet est. Duis ac, sagittis. </p>
            </main>
        </Layout>
    );
}

export default Pages;