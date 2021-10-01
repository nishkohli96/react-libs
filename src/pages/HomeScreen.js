import LinksList from '_Components/LinksList';

const HomeScreen = () => {
    return (
        <div className="fullscreen">
            <div className="text-4xl text-blue-500">Hi There !!!</div>
            <div className="text-xl my-2 text-silver-500">
                Click any of the links below...
            </div>
            <LinksList />
        </div>
    );
};

export default HomeScreen;
