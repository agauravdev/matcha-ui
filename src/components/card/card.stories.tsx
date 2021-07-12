import { Story, Meta } from '@storybook/react';
import Card, { CardActions, CardContent, CardProps } from './card';
import { Typography } from '../typography';
import { Button } from '../button';
import { Icon } from '../icon';
import { IoMdHeartEmpty } from 'react-icons/all';

export default {
    title: 'Example/Card',
    component: Card,
    // argTypes: {
    //     color: {
    //         options: ['primary', 'secondary', 'error', 'warning', 'info'],
    //         control: { type: 'radio' },
    //     },
    // },
} as Meta;

const Template: Story<CardProps> = (args) => (
    <div style={{ display: 'flex' }}>
        <Card {...args} style={{ maxWidth: '10rem' }}>
            <img
                src="https://images-eu.ssl-images-amazon.com/images/I/51InjRPaF7L._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"
                alt="eloquent js book"
                style={{ width: '100%' }}
            />
            <CardContent>
                <Typography variant="h6" component="h1" color="black">
                    Eloquent JS
                </Typography>
                <Typography>
                    {' '}
                    Eloquent JavaScript, 3rd Edition: A Modern Introduction to
                    Programming Paperback – 4
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined">Add To Cart</Button>
                <Button variant="outlined" color="error">
                    <Icon>
                        <IoMdHeartEmpty />
                    </Icon>
                </Button>
            </CardActions>
        </Card>
    </div>
);

export const Default = Template.bind({});
Default.args = {};
