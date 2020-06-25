import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import GatsbyBackgroundImage from 'gatsby-background-image';
import useStart from '../hooks/useStart';
import heroCSS from '../css/hero.module.css';
import Layout from '../components/Layout';
import Find from '../components/Find';
import PropertiesList from '../components/PropertiesList';

const BackgroundImage = styled(GatsbyBackgroundImage)`
    height: 600px;
`;

const Index = () => {
    const start = useStart();
    const { name, content, image } = start[0];

    return (
        <Layout>
            <BackgroundImage tag="section" fluid={image.sharp.fluid} fadeIn="soft">
                <div className={heroCSS.imageBG}>
                    <h1 className={heroCSS.title}>Venta de casas y departamentos exclusivos</h1>
                </div>
            </BackgroundImage>
            <main>
                <div css={css`max-width: 800px; margin: 0 auto;`}>
                    <h1>{name}</h1>
                    <p css={css`text-align: center;`}>{content}</p>
                </div>
            </main>
            <Find />
            <PropertiesList />
        </Layout>
    );
}

export default Index;