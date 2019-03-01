/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// const fs = require('fs-extra');
// const path = require('path');
const languages = require("./src/i18n/languages");

/*exports.onPostBuild = () => {
  fs.copySync(path.join(__dirname, '/static/locales'), path.join(__dirname, '/public/locales'));
};*/

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
