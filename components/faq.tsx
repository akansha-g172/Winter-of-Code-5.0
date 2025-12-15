import Image from 'next/image'
import asset1 from '../public/faqcard1.svg'
import asset2 from '../public/faqbutton.svg'
import asset3 from '../public/faqcard2.svg'
import asset4 from '../public/faquestion.svg'
import React, { useState, useEffect } from 'react';
import faqs from "../data/faq.json";

const faqData = faqs

interface FAQ{
    index:number;
    question:string;
    answer:string;
    isOpen: boolean;
    toggleOpen: () => void;
}


const FAQCard: React.FC<FAQ> = ({ question, answer, isOpen, toggleOpen }) => {
    return (
            <div className='w-[80%] sm:w-[40%] mx-auto sm:mx-[1%] my-[1%] h-fit' onClick={toggleOpen}>
              <div className={`relative w-full flex py-[2%] px-[3%] justify-between border-[3px] border-faq ${isOpen? "border-b-0":""} bg-gradient-to-b from-[#00FF8415] to-[#00FF8412]`}>
                <div className='aspect-square absolute w-[3.7%] h-auto top-0 left-0'>
                  <div className='faq-t-l w-full h-full absolute -rotate-45 border-b-2 border-faq bg-black top-[-59%] left-[-59%] sm:top-[-56%] sm:left-[-56%]'></div>
                </div>
                <div className='w-[85%] text-left text-faq text-scale-35-2'>
                {question}
                </div>
                <Image className={`w-[7%] h-[15%] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} src={asset2} alt="faqbutton" id="faqbutton" />
              </div>
              { isOpen &&
                <div className='relative px-[2%] w-full pr-[15%] pb-[2%] text-left text-[#CBCBCB] text-scale-30-2 border-[3px] border-t-0 border-faq bg-gradient-to-b from-[#00FF8412] to-[#19A26005] '>
                {answer}
                <div className='aspect-square absolute w-[20%] h-auto bottom-0 right-0' >
                  <div className='faq-b-r w-full h-full absolute -rotate-45 border-faq bg-black bottom-[-51.5%] right-[-51.5%] sm:bottom-[-50.55%] sm:left-[50.5%]'></div>
                </div>
                </div>
              }
            </div>
    );
};

const FAQPage = () => {
    const [openItems, setOpenItems] = useState<Record<number, boolean>>({});
    const [activeTag, setActiveTag] = useState('All');
  const toggleItem = (index:number) => {
    setOpenItems(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const filteredFAQs = faqData.filter(faq => 
    activeTag === 'All' || faq.tags.includes(activeTag)
  );

  const allTags = ['All', ...Array.from(new Set(faqData.flatMap(faq => faq.tags)))];
  const uniqueFAQs = Array.from(new Set(filteredFAQs.map(faq => faq.question)))
    .map(question => {
      return filteredFAQs.find(faq => faq.question === question);
    });

    return (
            <section className='w-full mx-auto pt-[10%] font-chakra' id="faqs">
                <div className='text-center text-faq font-kleemax text-scale-40 drop-shadow-green relative'>
                    FAQS
                    <div className='w-[20%] absolute left-[40%] -top-[25%]'>
                        <Image className="mx-auto w-full" src={asset4} alt="faquestion" />
                    </div>
                </div>

                <div className="flex flex-wrap justify-center my-[2%] gap-[1%] mx-[5%]">
                {allTags.map(tag => (
                    <button key={tag} onClick={() => setActiveTag(tag)}
                        className={`px-[2%] py-[1%] my-[1%] text-scale-15-5 rounded-[calc(0.3*(1vw-4px)+3px)] border-[0.2vw] border-faq ${activeTag === tag ? 'bg-faq text-black font-bold' : 'bg-gradient-to-b from-[#00FF8412] to-[#19A26005] text-faq'              }`}>
                        {tag}
                    </button>
                ))}
                </div>
                <div className='w-full mx-auto mb-[3%] flex flex-wrap justify-center'>
                {filteredFAQs.map((faq, index) => (
                    <FAQCard key={index} index={index} question={faq.question} answer={faq.answer} isOpen={openItems[index]} toggleOpen={() => toggleItem(index)} />
                ))}
                </div>
                <hr className="flex w-full flex-grow bg-gradient-to-r from-black via-[#CCCCCC50] to-black mt-[10%]"/>
            </section>
    );
};

export default FAQPage;
