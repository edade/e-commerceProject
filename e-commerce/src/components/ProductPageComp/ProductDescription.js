const ProductDescription = () => {
  return (
    <div className="font-montserrat text-[#737373]">
      <div className="flex justify-center gap-12 text-md font-semibold py-8">
        <a>Description</a>
        <a>Additional Information</a>
        <a>
          Reviews <span className="text-[#23856D]">(0)</span>
        </a>
      </div>
      <div className="flex justify-center gap-8">
        <div className="w-[25%]">
          <img
            className=" w-full h-[85%] object-contain items-center"
            src="./img/ProductPage/image1.png"
            alt=""
          />
        </div>
        <div className=" flex flex-col gap-3 w-[25%] text-left text-sm font-semibold">
          <h3 className="text-[#252B42] font-bold text-xl">
            the quick fox jumps over
          </h3>
          <p>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>
        <div className=" flex flex-col w-[25%] text-left text-sm font-semibold">
          <div className="flex flex-col gap-3">
            <h3 className="text-[#252B42] font-bold text-xl">
              the quick fox jumps over
            </h3>
            <p>
              <span>
                <i class="fa-light fa-greater-than"></i>
              </span>
              the quick fox jumps over the lazy dog
            </p>
            <p>
              <span>
                <i class="fa-light fa-greater-than"></i>
              </span>
              the quick fox jumps over the lazy dog
            </p>
            <p>
              <span>
                <i class="fa-light fa-greater-than"></i>
              </span>
              the quick fox jumps over the lazy dog
            </p>
            <p>
              <span>
                <i class="fa-light fa-greater-than"></i>
              </span>
              the quick fox jumps over the lazy dog
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-[#252B42] font-bold text-lg">
              the quick fox jumps over
            </h3>
            <p>
              <span>
                <i class="fa-light fa-greater-than"></i>
              </span>
              the quick fox jumps over the lazy dog
            </p>
            <p>
              <span>
                <i class="fa-light fa-greater-than"></i>
              </span>
              the quick fox jumps over the lazy dog
            </p>
            <p>
              <span>
                <i class="fa-light fa-greater-than"></i>
              </span>
              the quick fox jumps over the lazy dog
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
