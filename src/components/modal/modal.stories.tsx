import { Story, Meta } from '@storybook/react';
import Modal, { ModalProps } from './modal';
import { Alert } from '../alert';
import { useState } from 'react';
import { Button } from '../button';

export default {
    title: 'Example/Modal',
    component: Modal,
} as Meta;

const Template: Story<ModalProps> = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button variant="text" onClick={() => setOpen(true)}>
                Open Modal
            </Button>
            <br />
            <Alert color="primary">
                This is a test alert in the background to check for modal
            </Alert>
            <br />
            <Alert color="secondary">
                This is a test alert in the background to check for modal
            </Alert>
            <br />
            <Alert color="error">
                This is a test alert in the background to check for modal
            </Alert>
            <br />
            <Alert color="warning">
                This is a test alert in the background to check for modal
            </Alert>
            <br />
            <Alert color="info">
                This is a test alert in the background to check for modal
            </Alert>
            <br />
            <Modal open={open} onClose={() => setOpen(false)}>
                <h2> This is modal heading </h2>
                <br />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                    ab aliquid consequuntur culpa cum delectus, earum error esse
                    id ipsum nostrum odit quae quasi, ratione reiciendis sequi
                    sit tenetur unde.
                </p>
            </Modal>
        </>
    );
};

export const Default = Template.bind({});
