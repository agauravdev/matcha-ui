import { Story, Meta } from '@storybook/react';
import { List, ListItem, ListItemText } from './list';
import { MdFolder, MdKeyboardArrowRight } from 'react-icons/all';

export default {
    title: 'Example/List',
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

const Template: Story = (args) => (
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

export const Default = Template.bind({});
Default.args = {
    primary: 'primary',
    secondary: 'secondary',
    icon: 'None',
};
