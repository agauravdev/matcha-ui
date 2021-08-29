import { Story, Meta } from '@storybook/react';
import { List, ListItem, ListItemText } from './list';
import { MdFolder, MdKeyboardArrowRight } from 'react-icons/all';

export default {
    title: 'Components/List',
    component: List,
    argTypes: {
        icon: {
            options: ['None', 'Folder', 'Arrow'],
            mapping: {
                None: null,
                Folder: <MdFolder />,
                Arrow: <MdKeyboardArrowRight />,
            },
            control: { type: 'radio' },
        },
    },
} as Meta;

const IconTemplate: Story = (args) => (
    <List>
        <ListItem icon={args.icon}>
            <ListItemText primary={args.primary} secondary={args.secondary} />
        </ListItem>
        <ListItem icon={args.icon}>
            <ListItemText primary={args.primary} secondary={args.secondary} />
        </ListItem>
        <ListItem icon={args.icon}>
            <ListItemText primary={args.primary} secondary={args.secondary} />
        </ListItem>
        <ListItem icon={args.icon}>
            <ListItemText primary={args.primary} secondary={args.secondary} />
        </ListItem>
    </List>
);

export const ListWithIcons = IconTemplate.bind({});
ListWithIcons.args = {
    primary: 'primary',
    secondary: 'secondary',
    icon: 'None',
};

const ImageTemplate: Story = (args) => (
    <List>
        <ListItem
            avatarProps={{
                type: 'image',
                src: args.image,
                alt: args.alt,
                size: 'md',
            }}
        >
            <ListItemText primary={args.primary} secondary={args.secondary} />
        </ListItem>
        <ListItem
            avatarProps={{
                type: 'image',
                src: args.image,
                alt: args.alt,
                size: 'md',
            }}
        >
            <ListItemText primary={args.primary} secondary={args.secondary} />
        </ListItem>
        <ListItem
            avatarProps={{
                type: 'image',
                src: args.image,
                alt: args.alt,
                size: 'md',
            }}
        >
            <ListItemText primary={args.primary} secondary={args.secondary} />
        </ListItem>
        <ListItem
            avatarProps={{
                type: 'image',
                src: args.image,
                alt: args.alt,
                size: 'md',
            }}
        >
            <ListItemText primary={args.primary} secondary={args.secondary} />
        </ListItem>
    </List>
);

export const ListWithImage = ImageTemplate.bind({});
ListWithImage.args = {
    primary: 'primary',
    secondary: 'secondary',
    image: 'https://sm.ign.com/ign_in/review/m/marvels-sp/marvels-spider-man-miles-morales-review_fkqf.jpg',
    alt: 'spiderman',
};
ListWithImage.argTypes = {
    icon: { table: { disable: true } },
};
