import { Story, Meta } from '@storybook/react';
import Card, { CardActions, CardBadge, CardContent, CardProps } from './card';
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

const SimpleCardTemplate: Story<CardProps> = (args) => (
    <div style={{ display: 'flex' }}>
        <Card {...args} style={{ maxWidth: '10rem' }}>
            <CardBadge>test</CardBadge>
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

export const SimpleCard = SimpleCardTemplate.bind({});
SimpleCard.args = {};

const HorizontalCardTemplate: Story<CardProps> = (args) => (
    <Card {...args} style={{ display: 'flex' }}>
        <img
            src="https://images-eu.ssl-images-amazon.com/images/I/51InjRPaF7L._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"
            alt="eloquent js book"
            style={{ width: '100%', maxWidth: '10rem' }}
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
            <CardActions>
                <Button variant="outlined">Add To Cart</Button>
                <Button variant="outlined" color="error">
                    <Icon>
                        <IoMdHeartEmpty />
                    </Icon>
                </Button>
            </CardActions>
        </CardContent>
    </Card>
);

export const HorizontalCard = HorizontalCardTemplate.bind({});
HorizontalCard.args = {};
