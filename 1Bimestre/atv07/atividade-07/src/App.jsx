import Header from './components/Header';
import Navigation from './components/Navigation';
import Article from './components/Article';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './App.css';

function App() {
  const dadosPost = {
    titulo: "Estádio de Nova York e Nova Jersey sediará a final da maior Copa do Mundo da FIFA™ de todos os tempos",
    dataValue: "2026-07-19",
    dataTexto: "Domingo, 19 de julho de 2026",
    paragrafo1: "O MetLife Stadium foi o escolhido para receber o evento global que parará o planeta. Com capacidade para mais de 82.000 espetadores, o recinto em East Rutherford será o epicentro do futebol mundial.",
    imgSrc: "estadio.jpg",
    imgAlt: "Vista aérea do Estádio MetLife em New Jersey",
    imgLegenda: "O Estádio de Nova York e Nova Jersey: o palco da grande decisão.",
    paragrafo2: "Esta edição será histórica, não apenas pelo local da final, mas por ser a primeira com 48 seleções divididas entre três países sedes: Canadá, México e Estados Unidos."
  };

 return (
    <>
      <header>
        <Header />
        <Navigation />
      </header>
      
      <main>
        <Article 
          titulo={dadosPost.titulo}
          dataValue={dadosPost.dataValue}
          dataTexto={dadosPost.dataTexto}
          paragrafo1={dadosPost.paragrafo1}
          imgSrc={dadosPost.imgSrc}
          imgAlt={dadosPost.imgAlt}
          imgLegenda={dadosPost.imgLegenda}
          paragrafo2={dadosPost.paragrafo2}
        />
      </main>

      <Sidebar />

      <Footer />
    </>
  );
}

export default App;