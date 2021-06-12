import { Story, Meta } from '@storybook/react';
import { MdMail } from 'react-icons/md';
import { Badge } from '.';
import { Avatar } from '../avatar';
import { Icon } from '../icon';
import { BadgeProps } from './badge';

export default {
    title: 'Example/Badge',
    component: Badge,
    argTypes: {
        color: {
            options: ['primary', 'secondary', 'error', 'warning', 'info'],
            control: { type: 'radio' },
        },
        position: {
            options: ['top', 'bottom'],
            control: { type: 'radio' },
        },
        // varient: {
        //     options: ['default', 'filled', 'outlined'],
        //     control: { type: 'radio' },
        // },
        // varient: {
        //     options: ['contained', 'text', 'outlined'],
        //     control: { type: 'radio' },
        // },
    },
} as Meta;

const IconTemplate: Story<BadgeProps> = (args) => (
    <Badge {...args}>
        <Icon color="secondary">
            <MdMail />
        </Icon>
    </Badge>
);

export const IconBadge = IconTemplate.bind({});
IconBadge.args = {
    color: 'primary',
    content: 1,
    position: 'top',
};

const AvatarTemplate: Story<BadgeProps> = (args) => (
    <Badge {...args}>
        <Avatar type="text" text="GA" bgColor="info" size="md" />
    </Badge>
);

export const AvatarBadge = AvatarTemplate.bind({});
AvatarBadge.args = {
    color: 'primary',
    content: 1,
    position: 'top',
};
