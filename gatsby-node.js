const urlSlug = require('url-slug');

exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
        query {
            allStrapiPages {
                nodes {
                    name
                    id
                }
            }
            allStrapiProperties {
                nodes {
                    name
                    id
                }
            }
        }
    `);

    /* console.log(JSON.stringify(result.data.allStrapiProperties)) */
    if (result.errors) {
        reporter.panic('No hubo resultados', result.errors);
    }

    const pages = result.data.allStrapiPages.nodes;
    pages.map(page => {
        actions.createPage({
            path: urlSlug(page.name),
            component: require.resolve('./src/components/Pages.js'),
            context: {
                id: page.id
            }
        });
    });

    const properties = result.data.allStrapiProperties.nodes;
    properties.map(property => {
        actions.createPage({
            path: urlSlug(property.name),
            component: require.resolve('./src/components/Properties.js'),
            context: {
                id: property.id
            }
        });
    });
}