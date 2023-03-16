import { useEffect, useState } from 'react';
import { Greeting } from './components/example_basic';
import { userService } from './components/userService';
import { UserProfileEdit } from './components/example_advanced';

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            const data = await userService.getUser();
            setUser(data);
        }
        fetchUser();
    }, []);


    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li><a href="#example_1">Příklad 1</a></li>
                        <li><a href="#example_2">Příklad 2</a></li>
                    </ul>
                </nav>
                <h1>Praktické testování Reactu</h1>
                <p>pomocí Jest a React testing library</p>
            </header>
            <main>
                <hr />
                <section>
                    <header>
                        <h2 id="example_1">Příklad 1</h2>
                    </header>
                    <aside>
                        <Greeting name='Jane' />
                    </aside>
                </section>
                <hr />
                <section>
                    <header>
                        <h2 id="example_2">Příklad 2</h2>
                    </header>
                    {user ? <UserProfileEdit onSave={(data) => console.log(data)} user={user} /> : <p>Loading ...</p>}
                </section>
            </main>
            <footer>
                <hr />
            </footer>
        </>
    )
}

export default App;
