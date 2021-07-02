import { Story, Meta } from '@storybook/react';
import Rating, { RatingProps } from './rating';
import { useState } from 'react';

export default {
    title: 'Example/Rating',
    component: Rating,
    argTypes: {
        color: {
            options: ['primary', 'secondary', 'error', 'warning', 'info'],
            control: { type: 'radio' },
        },
    },
} as Meta;

const Template: Story<RatingProps> = (args) => {
    const [value, setValue] = useState(3);

    return (
        <Rating
            {...args}
            value={value}
            onChange={(e) => setValue(Number(e.currentTarget.value))}
        />
    );
};

export const Default = Template.bind({});
Default.args = {
    color: 'primary',
};
