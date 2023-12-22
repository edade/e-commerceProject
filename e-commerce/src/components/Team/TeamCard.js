const TeamCard = () => {
  const TeamData = [
    {
      image: "./img/TeamPage/image1.png",
      username: "User",
      profession: "Profession",
      socialMedia: { facebook: "#", instagram: "#", twitter: "#" },
    },
    {
      image: "./img/TeamPage/image2.png",
      username: "User",
      profession: "Profession",
      socialMedia: { facebook: "#", instagram: "#", twitter: "#" },
    },
    {
      image: "./img/TeamPage/image3.png",
      username: "User",
      profession: "Profession",
      socialMedia: { facebook: "#", instagram: "#", twitter: "#" },
    },
    {
      image: "./img/TeamPage/image4.png",
      username: "User",
      profession: "Profession",
      socialMedia: { facebook: "#", instagram: "#", twitter: "#" },
    },
    {
      image: "./img/TeamPage/image5.png",
      username: "User",
      profession: "Profession",
      socialMedia: { facebook: "#", instagram: "#", twitter: "#" },
    },
    {
      image: "./img/TeamPage/image6.png",
      username: "User",
      profession: "Profession",
      socialMedia: { facebook: "#", instagram: "#", twitter: "#" },
    },
    {
      image: "./img/TeamPage/image7.png",
      username: "User",
      profession: "Profession",
      socialMedia: { facebook: "#", instagram: "#", twitter: "#" },
    },
    {
      image: "./img/TeamPage/image8.png",
      username: "User",
      profession: "Profession",
      socialMedia: { facebook: "#", instagram: "#", twitter: "#" },
    },
    {
      image: "./img/TeamPage/image9.png",
      username: "User",
      profession: "Profession",
      socialMedia: { facebook: "#", instagram: "#", twitter: "#" },
    },
  ];
  return (
    <div className="font-['montserrat'] py-20">
        <div className="items-center text-3xl font-bold text-[#252B42]">Meet Our Team</div>
      <div className="flex lg:flex-wrap lg:flex-row sm:flex-col justify-center gap-8 ">
        {TeamData.map((teamMember, index) => (
          <div key={index} className="font-bold py-10 ">
            <img
              className="sm:w-full sm:px-10 lg:px-0"
              src={teamMember.image}
              alt={`Team member ${index + 1}`}
            />
            <div className="flex flex-col gap-3 font-semibold">
              <h5 className="lg:text-base sm:text-2xl text-[#252B42] pt-3 ">
                {teamMember.username}
              </h5>
              <h6 className="lg:text-sm sm:text-2xl text-[#737373] ">
                {teamMember.profession}
              </h6>
              <div className="flex gap-4 justify-center lg:text-2xl sm:text-4xl text-[#23A6F0]">
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

export default TeamCard;
