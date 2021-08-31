import { Story, Meta } from '@storybook/react';
import Grid, { GridProps } from './grid';

export default {
    title: 'Components/Grid',
    component: Grid,
} as Meta;

const Template: Story<GridProps> = () => (
    <Grid type="percentage" template={[40, 40, 20]}>
        <p>Text 1</p>
        <p>text 2</p>
        <p>text 3</p>
    </Grid>
);

export const Default = Template.bind({});
Default.args = {};
