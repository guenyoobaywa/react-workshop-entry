const Comp4 = ({ derText }) => {
  return <div>{derText}</div>;
};

const Comp3 = ({ derText }) => {
  return <Comp4 derText={derText} />;
};
const Comp2 = ({ derText }) => {
  return <Comp3 derText={derText} />;
};
const Comp1 = ({ derText }) => {
  return <Comp2 derText={derText} />;
};

const CompParent = () => {
  return <Comp1 derText="Hallo" />;
};
