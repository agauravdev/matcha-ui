import { Story, Meta } from '@storybook/react';
import Snackbar from './snackbar';
import { useState } from 'react';
import { Button } from '../button';
import { Alert } from '../alert';
import { MdClose } from 'react-icons/all';

export default {
    title: 'Example/Snackbar',
    component: Snackbar,
    argTypes: {
        vertical: {
            options: ['top', 'bottom'],
            control: { type: 'radio' },
        },
        horizontal: {
            options: ['left', 'right', 'center'],
            control: { type: 'radio' },
        },
    },
} as Meta;

const Template: Story = (args) => {
    const position = { vertical: args.vertical, horizontal: args.horizontal };
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button variant={'text'} onClick={() => setOpen(true)}>
                Open Snackbar
            </Button>
            <Snackbar
                open={open}
                onClose={() => setOpen(false)}
                persistent={args.persistent}
                position={position}
                timeout={args.timeout}
            >
                <Alert color="primary" variant={'filled'}>
                    This is snackbar &nbsp;&nbsp;
                    <MdClose
                        style={{ cursor: 'pointer' }}
                        onClick={() => setOpen(false)}
                    />
                </Alert>
            </Snackbar>
        </>
    );
};

export const Default = Template.bind({});
Default.args = {
    persistent: false,
    timeout: 3000,
    vertical: 'top',
    horizontal: 'center',
};
