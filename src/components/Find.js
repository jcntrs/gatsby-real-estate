import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyBackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';
import heroCSS from '../css/hero.module.css';

const BackgroundImage = styled(GatsbyBackgroundImage)`
    height: 300px;
`;

const Find = () => {
    const { image } = useStaticQuery(graphql`
        query {
            image: file(relativePath:{eq: "encuentra.jpg"}) {
                sharp: childImageSharp {
                    fluid(maxWidth: 1500) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <BackgroundImage tag="section" fluid={image.sharp.fluid} fadeIn="soft">
            <div className={heroCSS.imageBG}>
                <h3 className={heroCSS.title}>Encuentra la casa de tus sueños</h3>
                <p>15 años de experiencia</p>
            </div>
        </BackgroundImage>
    );
}

export default Find;