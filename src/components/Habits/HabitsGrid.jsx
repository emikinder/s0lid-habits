/* eslint-disable react/prop-types */
export const HabitsGrid = ({ listView, children }) => {
    const View = listView ? ListView : GridView;
    return <View>{children}</View>;
};

export const ListView = ({ children }) => {
    return <section className="mt-2 flex flex-col">{children}</section>;
};

export const GridView = ({ children }) => {
    return <div className="mt-2 grid grid-cols-2 gap-1">{children}</div>;
};