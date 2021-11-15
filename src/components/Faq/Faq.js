import './Faq.scss';
import Faq from 'react-faq-component';

export const FaqComponent = () => {
    const data = {
        rows: [
            {
                title: "What is buff doge nft?",
                content: "Buff doges are a collection of 10,000 unique characters battling for their existence on the Ethereum blockchain."
            },
            {
                title: "How much does a buff doge cost?",
                content: "Buff Doges will cost 0.06 ETH + Gass Fee on both presale and launch day."
            },
            {
                title: "When will my buff doge be revealed?",
                content: "After reaching 100% all buff doges will be revealed on opensea."
            },
            {
                title: "What are my benefits as a holder?",
                content: "Holders will automatically join Buffs private club where all the fun begins. As a member, you will be part of all activities and future ideas. As a holder, you will have the ability to make a change on our journey by being part of taking decisions for every step we take together as a community."
            },
            {
                title: "How can I own a buff doge?",
                content: "The only way to own a buff doge before revealing will be by minting one on buffdogenft.com"
            },
            {
                title: "what about royalties?",
                content: "the royalties will be 5%. 50% FOR THE COMMUNITY"
            }
        ]
    };

    const config = {
        arrowIcon: '',
    };

    return (
        <section className="faq" id="faq">
            <div className="container">
                <div className="faq__title">
                    <span>FAQ</span>
                </div>

                <div className="faq__content">
                    <Faq
                        data={data}
                        config={config}
                    />

                    <div className="faq__content__mobile">
                        {
                            data.rows.map((item, index) => (
                                <div key={index} className="faq__content__mobile__item">
                                    <div className="faq__content__mobile__item__title">
                                        {item.title}
                                    </div>

                                    <div className="faq__content__mobile__item__content">
                                        {item.content}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqComponent;