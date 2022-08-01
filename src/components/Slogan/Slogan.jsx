import Cards from "../../assets/desktop/isocard.svg"
const Slogan = () => {
    return (
        <section className="text-32 my-14 font-extrabold">
            <div className="text-center">
                <p className="">
                    Earn <span className="text-purple-500"> More </span>
                </p>
                <p className="">
                    Pay less
                </p>
                <button className="text-20 px-6 py-[6px] font-bold mt-[20px] bg-purple-500 rounded-[14px] hover:bg-red-500 duration-300">
                    Start
                </button>


            </div>
            <div className="flex justify-center">
                <img src = {Cards} alt = "Cards" />
            </div>

        </section>
    )
}

export default Slogan