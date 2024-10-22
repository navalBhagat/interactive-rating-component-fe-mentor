import { Option } from "../types"

interface RatingComponentProps {
    selectedOption: Option | null;
    setSelectedOption: (option: Option) => void; 
    setIsSubmitted: (submit: boolean) => void;
}

const RatingComponent = (
    {
        selectedOption, 
        setSelectedOption,
        setIsSubmitted
    }: RatingComponentProps
) => {
  return (
    <section className="card-rating">
        <div className="star-icon-circle">
            <img src="/images/icon-star.svg" />
        </div>
        <span className="question">How did we do?</span>
        <span className="description">
            Please let us know how we did with your support request. 
            All feedback is appreciated to help us improve our offering!
        </span>
        <div className="options">
            {
                Object.values(Option).map(
                    (option, index) => 
                        <div 
                            className={selectedOption == option ? 'selected-option' : 'option'} 
                            key={index} 
                            onClick={() => setSelectedOption(option)}
                        >
                            {option}
                        </div>
                )
            }
        </div>
        <button className="submit-button" onClick={() => setIsSubmitted(true)}>SUBMIT</button>
    </section>
  )
}

export default RatingComponent