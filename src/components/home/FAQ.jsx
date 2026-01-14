import React from 'react';

const faqs = [
    {
        question: 'What is your return policy?',
        answer: 'We offer a 30-day return policy on all items, provided they are in their original condition and packaging. Please visit our returns page for more details.'
    },
    {
        question: 'Do you ship internationally?',
        answer: 'Yes, we ship to most countries worldwide. Shipping costs and times vary depending on the destination. You can get an estimate during checkout.'
    },
    {
        question: 'Are the lights difficult to install?',
        answer: 'Most of our lights can be installed with basic electrical knowledge. However, for complex fixtures or if you are unsure, we highly recommend hiring a certified electrician.'
    }
]

const FAQ = () => {
  return (
    <section className="w-full  bg-zinc-900 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-zinc-200 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-lg bg-zinc-800 p-4 cursor-pointer">
                    <summary className="flex items-center justify-between text-lg font-medium text-zinc-200 list-none">
                        {faq.question}
                        <span className="transition-transform duration-300 group-open:rotate-180">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                        </span>
                    </summary>
                    <p className="mt-4 text-zinc-400">
                        {faq.answer}
                    </p>
                </details>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
