import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import Bg1 from './assets/bg1.jpg';
import Bg2 from './assets/bg2.jpg';

const App = () => {
    return (
        <>
            <Header
                title="Header title"
                description="Header description!"
            />
            <Layout
                title="Layout#1 Title"
                description="Layout#1 description!"
                urlBg={Bg1}
            />
            <Layout
                title="Layout#2 Title"
                description="Layout#2 description!"
                urlBg={Bg2}
            />
            <Layout
                title="Layout#3 Title"
                description="Layout#3 description!"
                colorBg="grey"
            />
            <Footer />
        </>
    );
}

export default App;
