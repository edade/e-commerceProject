const Video = () => {
    return (
        <div className="max-w-screen-lg justify-center items-center mx-auto py-28 font-['montserrat']">

        <video controls className="rounded-lg" poster="./img/AboutPage/video.png">
          <source src="./img/AboutPage/video1.mp4" type="video/mp4" />
        </video>
      </div>
    )
}
export default Video;