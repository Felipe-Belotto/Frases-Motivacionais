import { useState } from 'react';
import { fetchQuote, fetchRandomColor } from './lib/services';
import QuoteCard from './components/QuoteCard';
import { Quote } from './lib/types';

function App() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [bgColor, setBgColor] = useState('#666');

  async function handleClick() {
    const quote = await fetchQuote();
    const color = await fetchRandomColor();
     
    setQuote(quote);
    setBgColor(color.hex);
  }

  return (
    <main className="w-full min-h-screen " style={{ backgroundColor: bgColor }}>
      <section className="container px-10 py-20 mx-auto text-center">
        <div className="w-full max-w-4xl px-10 py-6 mx-auto bg-white border-2 border-white rounded-lg bg-opacity-15 ">
          <h1 className="font-bold brightness-50 text-4xl md:text-7xl font-display " style={{color: bgColor}}>
            Frases Motivacionais
          </h1>
          <button
            onClick={handleClick}
            className="px-4 py-2 mt-10 font-bold text-white bg-transparent bg-gray-800 border-2 border-white rounded bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          >
            Me dê uma dose de ânimo
          </button>
        </div>

        {quote && <QuoteCard quote={quote} />}
      </section>{' '}
    </main>
  );
}

export default App;
