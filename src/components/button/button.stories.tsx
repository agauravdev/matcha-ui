import { Story, Meta } from '@storybook/react';

import Button, { ButtonProps } from './button';

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
        color: {
            options: ['primary', 'secondary', 'error', 'warning', 'info'],
            control: { type: 'radio' },
        },
        varient: {
            options: ['contained', 'text', 'outlined'],
            control: { type: 'radio' },
        },
    },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    color: 'primary',
    varient: 'contained',
    children: 'Default',
    loading: false,
    loadingText: 'Loading',
};
