const Header = ({ isLoggedIn }) => {
    return (
        <div>
             <h1>Hello, {isLoggedIn ? 'User' : 'Guest'}</h1>
                <h2>Header</h2>
                <p>This is Header Page</p>
                </div>
    );
};

export default Header;