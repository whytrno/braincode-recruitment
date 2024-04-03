import type {Component, JSXElement} from 'solid-js';
import Navbar from "./components/Navbar";
import Container from "./components/Container";

const App: Component<{ children: JSXElement }> = (props) => {
    return (
        <Container>
            <Navbar/>
            <div class={"grow flex items-center"}>
                {props.children}
            </div>
        </Container>
    );
};

export default App;
