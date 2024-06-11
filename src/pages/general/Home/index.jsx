import Banner from "../../../components/Banner"
import PosterGallery from "../../../components/PosterGallery"
import ShowPosts from "../../../components/ShowPosts"
import VideoGallery from "../../../components/VideoGallery"
import WelcomeSection from "../../../components/WelcomeSection"
import WritePostSection from "../../../components/WritePostSection"

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <WelcomeSection></WelcomeSection>
            <PosterGallery></PosterGallery>
            <VideoGallery></VideoGallery>
            <WritePostSection></WritePostSection>
            <ShowPosts></ShowPosts>
        </>
    )
}

export default Home