import { Story, Meta } from '@storybook/react';

import Input, { InputProps } from './input';

export default {
    title: 'Example/Input',
    component: Input,
    argTypes: {
        focusColor: {
            options: ['primary', 'secondary', 'error', 'warning', 'info'],
            control: { type: 'radio' },
        },
    },
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    placeholder: 'name',
    focusColor: 'primary',
    error: false,
};
