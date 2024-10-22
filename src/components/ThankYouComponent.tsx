import { Option } from "../types"

interface ThankYouComponentProps {
    selectedOption: Option | null
}
const ThankYouComponent = ({ selectedOption }: ThankYouComponentProps) => {
  return (
    <section className="card-thankyou">
        <img className="thankyou-image" src="/images/illustration-thank-you.svg" />
        <div className="pill">
            You selected {selectedOption} out of 5
        </div>
        <span className="thankyou">Thank you!</span>
        <span className="thankyou-description">
            We appreciate you taking the time to give a rating.
            If you ever need more support, don't hesitate to get in touch! 
        </span>
    </section>
  )
}

export default ThankYouComponent