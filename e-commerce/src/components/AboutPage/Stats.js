const Stats = () => {
    return (
        <div className="flex lg:flex-row sm:flex-col justify-between sm:justify-center sm:items-center items-center mx-60 text-[#252B42] font-bold lg:text-4xl sm:text-6xl py-8 font-['montserrat'] ">
            <div className="flex flex-col sm:py-4">15K <p className="text-sm font-semibold text-[#737373]">Happy Customers</p></div>
            <div className="flex flex-col px-4">150K <p className="text-sm font-semibold text-[#737373]">Monthly Visitors</p> </div>
            <div className="flex flex-col sm:py-4">15 <p className="text-sm font-semibold text-[#737373]">Countries Worldwide</p></div>
            <div className="flex flex-col px-4 ">100+ <p className="text-sm font-semibold text-[#737373]">Top Partners</p></div>
        </div>
    )
}
export default Stats;