function Pricing() {

    let Pricing = [
        { title: "Basic", number: 19, feature: "Feature No 1", extra: "Extra Feature", no: "Extra Feature No 2", feat: "Feature", buy: "Buy Now" },
        { title: "Promium", number: 29, feature: "Feature No 1", extra: "Extra Feature", no: "Extra Feature No 2", feat: "Feature", buy: "Buy Now" },
        { title: "Pro", number: 39, feature: "Feature No 1", extra: "Extra Feature", no: "Extra Feature No 2", feat: "Feature", buy: "Buy Now" },
        { title: "Platinum", number: 49, feature: "Feature No 1", extra: "Extra Feature", no: "Extra Feature No 2", feat: "Feature", buy: "Buy Now" },

    ]
    return (<div>
        <div className="pricing">
            <div className="container">
                <div className="main-heading">
                    <h2>Pricing</h2>
                    <p> Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
                        tincidunt.
                    </p>
                </div>
                <div className="plans">
                    {Pricing.map(item => {
                        return (
                            <div className="plan">
                                <div className="head">
                                    <h3>{item.title}</h3>
                                    <span>{item.number}</span>
                                </div>
                                <ul>
                                    <li>{item.feature}</li>
                                    <li>{item.extra}</li>
                                    <li>{item.no}</li>
                                    <li>{item.feat}</li>
                                </ul>
                                <div className="foot">
                                    <a href="#">{item.buy}</a>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <p className="contact-text">Contact us if you have special request</p>
                <a href="#" className="contact-link">Contact Us</a>
            </div>
        </div>
    </div>)
}
export default Pricing;