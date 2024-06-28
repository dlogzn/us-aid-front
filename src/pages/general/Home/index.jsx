import Banner from "../../../components/Banner"
import PosterCreateSection from "../../../components/PosterCreateSection"
import PosterGallery from "../../../components/PosterGallery"
import VideoCreateSection from "../../../components/VideoCreateSection"
import VideoGallery from "../../../components/VideoGallery"
import WelcomeSection from "../../../components/WelcomeSection"
import WritePostSection from "../../../components/WritePostSection"

const Home = () => {    
    return (
        <>
            <Banner></Banner>
            <WelcomeSection></WelcomeSection>
            <PosterGallery></PosterGallery>
            <PosterCreateSection></PosterCreateSection>
            <VideoGallery></VideoGallery>
            <VideoCreateSection></VideoCreateSection>
            <WritePostSection></WritePostSection>
        </>
    )
}

export default Home