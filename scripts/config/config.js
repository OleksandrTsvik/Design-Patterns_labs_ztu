const INIT_STYLE = {
    my: 'my',
    bootstrap: 'bootstrap'
};

const PAGE_PARAMS = {
    header: {
        links: {
            Home: '#',
            Link: '#',
            About: '#',
        }
    },
    footer: {
        text: 'Tsvik Oleksandr IPZ-20-3'
    }
};

const STYLE = 'style/style.css';
const MY_STYLE = 'style/my-page.css';

const BOOTSTRAP_STYLE = [
    {
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
        integrity: 'sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3',
        crossorigin: 'anonymous'
    }
];

const BOOTSTRAP_JS = [
    {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js',
        defer: '',
        integrity: 'sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p',
        crossorigin: 'anonymous'
    }
];

export { PAGE_PARAMS, STYLE, MY_STYLE, BOOTSTRAP_STYLE, BOOTSTRAP_JS, INIT_STYLE };