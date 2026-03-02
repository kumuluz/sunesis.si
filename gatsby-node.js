/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
/*const languages = require("./src/i18n/languages");

exports.onCreatePage = ({page, actions}) => {
    const {createPage, deletePage} = actions;

    return new Promise(resolve => {
        deletePage(page);
        Object.keys(languages).map(language => {
            const localizedPath = languages[language].default ? page.path : languages[language].path + page.path;
            return createPage({
                ...page,
                path: localizedPath,
                context: {
                    locale: language
                }
            });
        });
        resolve();
    });

};
*/

// Externalize webpack runtime to avoid inline scripts for CSP compliance
exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      optimization: {
        runtimeChunk: {
          name: 'webpack-runtime',
        },
      },
    });
  }
};
