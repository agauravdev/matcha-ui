import { Story, Meta } from '@storybook/react';
import Fab, { FabProps } from './fab';

export default {
    title: 'Components/Fab',
    component: Fab,
    argTypes: {
        color: {
            options: ['primary', 'secondary', 'error', 'warning', 'info'],
            control: { type: 'radio' },
        },
    },
} as Meta;

const Template: Story<FabProps> = (args) => <Fab {...args} />;

export const Default = Template.bind({});
Default.args = {
    color: 'primary',
    children: '+',
};
