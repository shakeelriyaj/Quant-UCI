import "./styles/events.css"
import alpha from "./assets/alpha.png"
import { Box } from "@mui/joy"
const Events = () => {

    return(
        <div className="templateContainer">
            <div className="MainHeaderFont">
            AlphaGrep Universe Competition
            </div>
            <div className="ParagraphFont">
                Currently, our club is participating in the AlphaGrep Universe competition!
                This competition aims to bring students together who are trying to learn about
                Alpha equations and how to solve them. 
            </div>
            <strong style={{ padding: "10px" }}>What is an Alpha Equation?</strong>
            <Box
            component="img"
                sx={{
                    alignItems: 'center',
                    textAlign: 'center',
                    width: '500px',
                    margin: '3vw'
                }}
            alt="eq"
            src={alpha}
            ></Box>
            <div className="ExampleParagraph">Here is an example of an alpha equation:
            <br/><br/>
            alpha = ts_mean_diff(indrel_sales_enterprise_ratio,7)
            <br/><br/>
            We can break it down from here, the ts_mean_diff is a function that calculates the mean difference for the values in the DataFrame input over a rolling window of size window. It computes the difference between each value and the mean of the previous window values.
            The indrel_sales_enterprise_ratio is a financial ratio that helps investors and analysts assess the relative value of a company within its industry. Specifically, it calculates the relationship between a company's trailing twelve months (TTM) sales and its enterprise value.
            Lastly, the number 7 is the window that the ts_mean_diff is looking through, which is 7 days in this case.
            </div>
            <br/><br/>
            <div className="ExampleParagraph">
                This is an example! Now the aim of the competition is to come up with unique and strong alpha equations that pass the unit tests provided by AlphaGrep.
            </div>
            <div className="LinkTo">
                Looking to join? Visit  <a href= "https://alphaverse.alpha-grep.com/home" target="_blank" rel="noreferrer" style={{marginLeft: "1vh"}}> alphaverse.alpha-grep.com </a>
            </div>

        </div>
    )
}

export default Events