import React from 'react';
import { Link } from 'gatsby';
import Icons from './Icons';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import urlSlug from 'url-slug';

const Button = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: #75ab00;
    width: 100%;
    color: #fff;
    display: block;
    text-decoration: none;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        background-color: #8dcd03;
    }
`;

const Card = styled.div`
    border: 1px solid #e1e1e1;

    img{
        max-width: 100%
    }
`;

const Content = styled.div`
    padding: 2rem;

    h3 {
        font-family: 'Lato', sans-serif;
        margin: 0 0 2rem 0;
        font-size: 2.4rem;
    }

    .price {
        font-size: 2rem;
        color: #75ab00;
    }
`;

const PreviewProperty = ({ property }) => {
    return (
        <Card>
            <Image fluid={property.image.sharp.fluid} />
            <Content>
                <h3>{property.name}</h3>
                <p className="price">$ {property.price}</p>
                <Icons bathrooms={property.bathrooms} parking={property.parking} rooms={property.rooms} />
                <Button to={urlSlug(property.name)}>Visitar Propiedad</Button>
            </Content>
        </Card>
    );
}

export default PreviewProperty;