import { Story, Meta } from '@storybook/react';
import Drawer, { DrawerProps } from './drawer';
import { Alert } from '../alert';
import { List, ListItem, ListItemText } from '../list';
import { MdFolder } from 'react-icons/all';
import { Typography } from '../typography';
import { useState } from 'react';
import { Button } from '../button';

export default {
    title: 'Example/Drawer',
    component: Drawer,
} as Meta;

const Template: Story<DrawerProps> = () => {
    const [open, setOpen] = useState(false);

    return (
        <div style={{ display: 'flex' }}>
            <nav>
                <Drawer open={open} onClose={() => setOpen(false)}>
                    <Typography
                        variant={'h6'}
                        style={{ alignSelf: 'center', padding: '1rem 0' }}
                    >
                        MatchaUI
                    </Typography>
                    <List>
                        <ListItem icon={<MdFolder />}>
                            <ListItemText primary={'Route'} />
                        </ListItem>
                        <ListItem icon={<MdFolder />}>
                            <ListItemText primary={'Route'} />
                        </ListItem>
                        <ListItem icon={<MdFolder />}>
                            <ListItemText primary={'Route'} />
                        </ListItem>
                        <ListItem icon={<MdFolder />}>
                            <ListItemText primary={'Route'} />
                        </ListItem>
                    </List>
                </Drawer>
            </nav>
            <main>
                <Button variant={'text'} onClick={() => setOpen(true)}>
                    Open Modal
                </Button>
                <br />
                <Alert color="primary">
                    This is a test alert in the background to check for drawer
                </Alert>
                <br />
                <Alert color="secondary">
                    This is a test alert in the background to check for drawer
                </Alert>
                <br />
                <Alert color="error">
                    This is a test alert in the background to check for drawer
                </Alert>
                <br />
                <Alert color="warning">
                    This is a test alert in the background to check for drawer
                </Alert>
                <br />
                <Alert color="info">
                    This is a test alert in the background to check for drawer
                </Alert>
                <br />
            </main>
        </div>
    );
};

export const Default = Template.bind({});
Default.args = {};

const PersistentTemplate: Story<DrawerProps> = (args) => {
    return (
        <div style={{ display: 'flex' }}>
            <nav
                style={{
                    width: 'width' in args ? args.width + 'px' : undefined,
                }}
            >
                <Drawer persistent={true} open={true} width={args.width}>
                    <Typography
                        variant={'h6'}
                        style={{ alignSelf: 'center', padding: '1rem 0' }}
                    >
                        MatchaUI
                    </Typography>
                    <List>
                        <ListItem icon={<MdFolder />}>
                            <ListItemText primary={'Route'} />
                        </ListItem>
                        <ListItem icon={<MdFolder />}>
                            <ListItemText primary={'Route'} />
                        </ListItem>
                        <ListItem icon={<MdFolder />}>
                            <ListItemText primary={'Route'} />
                        </ListItem>
                        <ListItem icon={<MdFolder />}>
                            <ListItemText primary={'Route'} />
                        </ListItem>
                    </List>
                </Drawer>
            </nav>
            <main>
                <br />
                <Alert color="primary">
                    This is a test alert in the background to check for drawer
                </Alert>
                <br />
                <Alert color="secondary">
                    This is a test alert in the background to check for drawer
                </Alert>
                <br />
                <Alert color="error">
                    This is a test alert in the background to check for drawer
                </Alert>
                <br />
                <Alert color="warning">
                    This is a test alert in the background to check for drawer
                </Alert>
                <br />
                <Alert color="info">
                    This is a test alert in the background to check for drawer
                </Alert>
                <br />
            </main>
        </div>
    );
};

export const Persistent = PersistentTemplate.bind({});
Persistent.args = {
    width: 200,
};
