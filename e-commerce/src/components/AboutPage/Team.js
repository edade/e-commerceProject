const Team = () => {
    const TeamData = [
        { image: "./img/AboutPage/user1.png", username: "User1", profession: "Profession1", socialMedia: { facebook: "#", instagram: "#", twitter: "#" } },
        { image: "./img/AboutPage/user2.png", username: "User2", profession: "Profession2", socialMedia: { facebook: "#", instagram: "#", twitter: "#" } },
        { image: "./img/AboutPage/user3.png", username: "User3", profession: "Profession3", socialMedia: { facebook: "#", instagram: "#", twitter: "#" } },
      ];
      
      return (
        <div className="flex flex-col py-28 font-['montserrat']">
          <div className=" flex flex-col gap-4 mx-12">
            <p className="text-4xl font-bold">Meet Our Team</p>
            <p className="text-[#737373] font-semibold text-sm">
              Problems trying to resolve the conflict between the two major realms
              of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="flex lg:flex-wrap lg:flex-row sm:flex-col justify-center gap-8 pt-28">
            {TeamData.map((teamMember, index) => (
              <div key={index} className="font-bold">
                <img className="sm:w-full sm:px-10" src={teamMember.image} alt={`Team member ${index + 1}`} />
                <div className="flex flex-col gap-3 font-semibold">
                  <h5 className="text-base text-[#252B42] pt-3 ">{teamMember.username}</h5>
                  <h6 className="text-sm text-[#737373] ">{teamMember.profession}</h6>
                  <div className="flex gap-4 justify-center text-2xl text-[#23A6F0]">
                    <a href={teamMember.socialMedia.facebook}>
                      <i className="bx bxl-facebook-circle"></i>
                    </a>
                    <a href={teamMember.socialMedia.instagram}>
                      <i className="bx bxl-instagram"></i>
                    </a>
                    <a href={teamMember.socialMedia.twitter}>
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  );
};

export default Team;