/* interface QuoteCardProps = {
  quote: {
    quote: string;
    author: string;
  };
}; */

import { Card } from "./Card";

type QuoteCardProps = {
  quote: {
    quote: string;
    author: string;
  };
};

export default function QuoteCard({quote}: QuoteCardProps) {

  return (
    <Card>
       <p className="font-serif text-start text-2xl italic leading-normal text-gray-800 font-extralight md:text-center md:text-3xl">
        {quote.quote}
      </p>
      <p className="mt-10 text-2xl text-gray-800">-- {quote.author}</p>
    </Card>
  
  );
}
