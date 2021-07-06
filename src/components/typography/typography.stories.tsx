import { Story, Meta } from '@storybook/react';
import Typography, { TypographyProps } from './typography';

export default {
    title: 'Example/Typography',
    component: Typography,
    argTypes: {
        variant: {
            options: [
                'p',
                'p-sm',
                'caption',
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'h6',
                'subtitle',
                'subtitle-bold',
            ],
            control: { type: 'radio' },
        },
        color: {
            options: [
                'primary',
                'secondary',
                'error',
                'warning',
                'info',
                'grey',
                'black',
            ],
            control: { type: 'radio' },
        },
        align: {
            options: ['center', 'inherit', 'justify', 'left', 'right'],
            control: { type: 'radio' },
        },
    },
} as Meta;

const Template: Story<TypographyProps> = (args) => (
    <Typography {...args}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </Typography>
);

export const Default = Template.bind({});
Default.args = {
    variant: 'p',
    color: 'grey',
    align: 'left',
};
