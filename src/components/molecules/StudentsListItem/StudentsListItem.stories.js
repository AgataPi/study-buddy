import StudentsListItem from './StudentsListItem';

export default {
  title: 'Components/Molecules/StudentsListItem',
  component: StudentsListItem,
};

const Template = (args) => <StudentsListItem {...args} />;

export const BadGrates = Template.bind({});
BadGrates.args = {
  userData: {
    name: 'Adam Romański',
    attendance: '25%',
    average: '2.0',
  },
};

export const MediumGrates = Template.bind({});
MediumGrates.args = {
  userData: {
    name: 'Adam Romański',
    attendance: '55%',
    average: '3.5',
  },
};

export const GoodGrates = Template.bind({});
GoodGrates.args = {
  userData: {
    name: 'Adam Romański',
    attendance: '99%',
    average: '5.0',
  },
};

export const NoAverage = Template.bind({});
NoAverage.args = {
  userData: {
    name: 'Adam Romański',
    attendance: '99%',
    average: null,
  },
};
