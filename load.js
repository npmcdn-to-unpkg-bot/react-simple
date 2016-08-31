require.config({
    baseUrl: "lib",
    paths: {
        'src': '../dist',
        // 'react-router': 'https://unpkg.com/react-router@2.4.1/umd/ReactRouter.min'
        'react-router': 'ReactRouter'
    }
});
require(['src/index']);