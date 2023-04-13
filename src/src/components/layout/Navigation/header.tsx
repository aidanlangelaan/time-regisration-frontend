import { Link } from 'react-router-dom';

export default function ComponentsLayoutHeader() : JSX.Element {
    return (
        <header className='flex'>
            <nav>


                menu
                
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blaat">Blaat</Link>
            </nav>
        </header>
    );
}