import { Story, Meta } from '@storybook/react';
import { MdShoppingCart } from 'react-icons/md';

import Button, { ButtonProps } from './button';

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
        color: {
            options: ['primary', 'secondary', 'error', 'warning', 'info'],
            control: { type: 'radio' },
        },
        variant: {
            options: ['contained', 'text', 'outlined'],
            control: { type: 'radio' },
        },
    },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    color: 'primary',
    variant: 'contained',
    children: 'Default',
    loading: false,
    loadingText: 'Loading',
};

export const IconButton = Template.bind({});
IconButton.args = {
    color: 'primary',
    variant: 'contained',
    leftIcon: <MdShoppingCart />,
    loading: false,
    loadingText: 'Loading',
};
