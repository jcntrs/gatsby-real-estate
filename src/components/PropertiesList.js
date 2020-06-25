import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core';
import propertiesCSS from '../css/properties.module.css';
import useProperties from '../hooks/useProperties';
import useFilter from '../hooks/useFilter';
import PreviewProperty from './PreviewProperty';


const PropertiesList = () => {
    const allProperties = useProperties();
    const [properties] = useState(allProperties);
    const [filtered, setFiltered] = useState([]);
    const { category, FilterUI } = useFilter();

    useEffect(() => {
        if (category) {
            const filter = properties.filter(property => property.category.name === category);
            setFiltered(filter);
        } else {
            setFiltered(properties);
        }
        // eslint-disable-next-line
    }, [category])

    return (
        <>
            <h2 css={css`margin-top: 5rem;`}>Nuestras Propiedades</h2>
            {FilterUI()}
            <ul className={propertiesCSS.properties}>
                {filtered.map(property => <PreviewProperty key={property.id} property={property} />)}
            </ul>
        </>
    );
}

export default PropertiesList;