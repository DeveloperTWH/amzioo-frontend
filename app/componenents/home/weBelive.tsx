

export const WeBelive = () => {

    return(

    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Top Section */}
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            We Believe Travel Is More Than Destinations — It’s About the Stories You Create Along The Way
          </h1>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-8">
            <div>
              <p className="text-3xl font-[Montserrat]  font-bold text-[#3964ae]">500K+</p>
              <p className="text-gray-600 font-semibold">Happy Travelers</p>
            </div>

            <div>
              <p className="text-3xl font-bold font-[Montserrat]  text-[#3964ae]">10K+</p>
              <p className="text-gray-600 font-semibold">Destinations Worldwide</p>
            </div>

            <div>
              <p className="text-3xl font-bold font-[Montserrat]  text-[#3964ae]">4.9</p>
              <p className="text-gray-600 font-semibold">Customer Rating</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="photo-2025-03-01-04-19-51-2-2.jpeg"
            alt="Travel"
            className="w-full h-[300px] md:h-[400px] object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid lg:grid-cols-2 gap-10 mt-12 items-center">
        
        {/* Big Image */}
        <div>
          <img
            src="photo-2025-03-01-04-19-51-2.jpeg"
            alt="Beach"
            className="w-full h-[300px] md:h-[500px] object-cover rounded-xl"
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet,
            diam sit amet porta eleifend, turpis justo maximus eros, rhoncus ullamcorper mi tortor et libero.
            <br /><br />
            Maecenas lacinia lorem ultrices ligula mollis accumsan dictum ut eros. Ut varius a nunc vel vestibulum.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-6 mt-6">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold">
              More About Us →
            </button>

            <div>
              <p className="text-sm text-gray-500">Call Us:</p>
              <p className="text-xl font-semibold text-orange-500">(647) 498-6504</p>
            </div>
          </div>

          {/* Reviews */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex -space-x-3">
              <img src="female-1.png" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="female-1-2.png" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="female-1-4.jpeg" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="female-1-3.png" className="w-10 h-10 rounded-full border-2 border-white" />
            </div>

            <div>
              <p className="text-sm text-gray-500">Google Ratings</p>
              <p className="font-bold">4.9 ⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        </div>
      </div>
    </div>



    )


}