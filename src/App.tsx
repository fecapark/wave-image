import Header from "./components/layouts/Header/Header";
import Footer from "./components/layouts/Footer/Footer";
import Background from "./components/layouts/Background/Background";
import InfoContainer from "./components/Informations/InfoContainer/InfoContainer";
import SceneWrapper from "./components/layouts/SceneWrapper/SceneWrapper";

const App = () => {
  return (
    <>
      <Background />
      <SceneWrapper />
      <InfoContainer />
      <Header />
      <Footer />
    </>
  );
};

export default App;
