import { Story, Meta } from '@storybook/react';
import Navbar, { NavbarProps, NavSearch } from './navbar';
import { Typography } from '../typography';
import { Icon } from '../icon';
import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

export default {
    title: 'Example/Navbar',
    component: Navbar,
    argTypes: {
        color: {
            options: ['primary', 'secondary', 'error', 'warning', 'info'],
            control: { type: 'radio' },
        },
    },
} as Meta;

const Template: Story<NavbarProps> = (args) => (
    <Navbar {...args}>
        <Typography variant={'h6'} style={{ paddingRight: '1rem' }}>
            Brand Name
        </Typography>
        <NavSearch onSearch={() => console.log('searched')} />
        <Icon
            size={1.5}
            style={{ cursor: 'pointer', margin: '0.75rem', marginLeft: 'auto' }}
        >
            <MdShoppingCart />
        </Icon>
        <Typography variant={'subtitle-bold'} style={{ cursor: 'pointer' }}>
            ABOUT US
        </Typography>
    </Navbar>
);

export const Default = Template.bind({});
Default.args = {
    color: 'primary',
};
