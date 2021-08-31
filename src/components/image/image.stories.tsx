import { Story, Meta } from '@storybook/react';
import Image, { ImageProps } from './image';

export default {
    title: 'Components/Image',
    component: Image,
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
    rounded: false,
    shadow: true,
    src: 'https://i.pinimg.com/564x/36/db/eb/36dbeb4e00922f31283562034c3077c2.jpg',
    alt: 'temp',
    style: {
        width: '2rem',
    },
};
