import {FaUser} from "react-icons/fa"
import {BsFillCreditCardFill} from "react-icons/bs"
import checkIconMobile from "../../assets/mobile/checkpoint.svg"
import {useSpring, animated} from "react-spring";


const Content = () => {
    const customer = useSpring({customers: 10240, from:{customers:0}})
    const card = useSpring({cards: 10430, from:{cards: 0}})
    return(
        <section className="">
            <div className="my-[16px] ml-[400px] mr-[400px] flex flex-col items-center shadow-md justify-center bg-purple-600 rounded-[30px]">
                <div className="mt-2 flex items-center ">
                    <FaUser size = {"23px"} className="mb-[5px] mx-[24px] "/>
                    
                    <div className="text-26">
                        <animated.div>
                            {customer.customers.to((val)=>Math.floor(val))}
                        </animated.div>
                        <p className = "text-26 mx-[4px]">
                            Customers
                        </p>
                    </div>


                </div>

                <div className="flex justify-center my-[16px] ">
                    <BsFillCreditCardFill size = {"22px"} className="mt-12px mx-[24px]"/>
                    <div className="text-26">
                        <animated.div>
                            {card.cards.to((val)=>Math.floor(val))}
                        </animated.div>
                        <p className="text-26 ">
                            Card Issues
                        </p>

                    </div>


                </div>
            </div>
            <div className="text-13 flex flex-col w-[100%] mt-[90px ] font-semibold">
                <div className="my-[50px] flex gap-8 ml-[400px] mr-[400px] justify-center items-center">
                    <img src= {checkIconMobile} alt = "checkicon Mobile"/>
                    <p>CARD REPORTS SENTO TO YOUR PHONE EVERY WEEKS</p>
                </div>

                <div className="mb-[50px] flex gap-8 ml-[400px] mr-[400px] justify-center items-center">
                    <img src= {checkIconMobile} alt = "checkicon Mobile"/>
                    <p>THẺ TÍN DỤNG CỦA CÁC BẠN ĐANG ĐƯỢC CHÚNG TÔI CUNG CẤP</p>
                </div>

                <div className="mb-[50px] flex gap-8 ml-[400px] mr-[400px] justify-center items-center">
                    <img src= {checkIconMobile} alt = "checkicon Mobile"/>
                    <p>RẤT VUI KHI ĐƯỢC PHỤC VỤ CÁC BẠN QUÁ TRÌNH VỪA QUA</p>
                </div>

            </div>

        </section>
  )
};

export default Content;