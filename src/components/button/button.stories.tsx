import { Story, Meta } from '@storybook/react';
import { MdShoppingCart } from 'react-icons/md';

import Button from './button';
import ClipLoader from 'react-spinners/ClipLoader';
import React from 'react';

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

const Template: Story = (args) => {
    const { loadingText, ...restArgs } = args;
    return (
        <Button
            loadingText={
                <>
                    <span style={{ marginRight: '0.5rem' }}>{loadingText}</span>
                    <ClipLoader loading={true} color={'inherit'} size={20} />
                </>
            }
            {...restArgs}
        />
    );
};

export const Default = Template.bind({});
Default.args = {
    color: 'primary',
    variant: 'contained',
    children: 'Default',
    loading: false,
    loadingText: 'Loading',
    disabled: false,
};

export const IconButton = Template.bind({});
IconButton.args = {
    color: 'primary',
    variant: 'contained',
    leftIcon: <MdShoppingCart />,
    loading: false,
    loadingText: 'Loading',
    disabled: false,
};
