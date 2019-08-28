const ghpages = require('gh-pages')

ghpages.publish(
    'public', {
        branch: 'master',
        repo: 'git@github.com:aranhaagency/freteapp.git',
    },
    () => {
        console.log('Deploy Complete!')
    }
)