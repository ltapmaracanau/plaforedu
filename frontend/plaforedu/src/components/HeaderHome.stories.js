import { withDesign } from 'storybook-addon-designs'

import HeaderHome from './HeaderHome'

export default {
    title: 'Components/HeaderHome',
    component: HeaderHome,
    decorators: [withDesign],
}

const Template = () => <HeaderHome></HeaderHome>;

export const Default = Template.bind({});

Default.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/eycpZJu2cYNexij7XiTTrU/PlaforEdu-site---Layout?node-id=34%3A241',
    },
  }
