import type { Preview } from '@storybook/react-vite'
import { withRouter } from 'storybook-addon-remix-react-router';
import { reactRouterParameters } from 'storybook-addon-remix-react-router';
const preview: Preview = {
   decorators: [withRouter],
   
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { userId: '42' },
        searchParams: { tab: 'activityLog' },
        state: { fromPage: 'homePage' },
      },
      routing: {
        path: '/users/:userId',
        handle: 'Profile',
      },
    }),
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;