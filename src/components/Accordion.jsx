import { useState } from 'react';
import { FaqData } from './FaqData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons';

const Accordion = () => {
  const [selectedFaq, setSelectedFaq] = useState(false);

  const handleToggleFaq = (index) => {
    if (selectedFaq === index) {
      return setSelectedFaq(null);
    } else {
      setSelectedFaq(index);
    }
  };

  return (
    <div className="accordion">
      {FaqData.map((item, index) => (
        <div key={index} className="faq" onClick={() => handleToggleFaq(index)}>
          <div className="title">
            <h3>{item.question}</h3>
            {selectedFaq === index ? (
              <FontAwesomeIcon className="icon" icon={faCircleMinus} />
            ) : (
              <FontAwesomeIcon className="icon" icon={faCirclePlus} />
            )}
          </div>

          <div
            className={`content ${selectedFaq === index ? 'show' : 'content'}`}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
