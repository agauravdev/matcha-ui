import { Story, Meta } from '@storybook/react';
import Alert, { AlertProps } from './alert';
import { MdError } from 'react-icons/md';
export default {
    title: 'Example/Alert',
    component: Alert,
    argTypes: {
        color: {
            options: ['primary', 'secondary', 'error', 'warning', 'info'],
            control: { type: 'radio' },
        },
        variant: {
            options: ['default', 'filled', 'outlined'],
            control: { type: 'radio' },
        },
    },
} as Meta;

const Template: Story<AlertProps> = (args) => (
    <Alert {...args} icon={<MdError />}>
        This is an alert, check it out
    </Alert>
);

export const Default = Template.bind({});
Default.args = {
    color: 'primary',
    variant: 'default',
};
