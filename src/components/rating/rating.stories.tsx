import { Story, Meta } from '@storybook/react';
import Rating, { RatingProps } from './rating';
import { useState } from 'react';

export default {
    title: 'Components/Rating',
    component: Rating,
    argTypes: {
        color: {
            options: ['primary', 'secondary', 'error', 'warning', 'info'],
            control: { type: 'radio' },
        },
    },
} as Meta;

const Template: Story<RatingProps> = (args) => {
    const [value, setValue] = useState<number | null>(null);

    return (
        <Rating
            {...args}
            value={value}
            onChange={(e) => {
                setValue(
                    e.currentTarget.value === ''
                        ? null
                        : Number(e.currentTarget.value)
                );
            }}
            clearValue={() => setValue(null)}
        />
    );
};

export const Default = Template.bind({});
Default.args = {
    color: 'primary',
    disabled: false,
    readOnly: false,
};
