import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

const Form = styled.form`
    width: 100%;
    display: flex;
    border: 1px solid #e1e1e1;
    max-width: 400px;
    margin: 3rem auto 0 auto;
`;

const Select = styled.select`
    flex: 1;
    padding: 1rem;
    appearance: none;
    border: none;
    font-family: 'Lato', sans-serif;
`;

const useFilter = () => {
    const [category, setCategory] = useState('');

    const result = useStaticQuery(graphql`
        query {
            allStrapiCategories {
                nodes {
                    id
                    name
                }
            }
        }
    `);

    const categories = result.allStrapiCategories.nodes;

    const FilterUI = () => (
        <Form>
            <Select onChange={e => setCategory(e.target.value)} value={category}>
                <option value="">-- Filtrar --</option>
                {categories.map(category => <option key={category.id} value={category.name}>{category.name}</option>)}
            </Select>
        </Form>
    )

    return {
        category,
        FilterUI
    }
}

export default useFilter;