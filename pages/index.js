import Navbar from "../components/navbar";
import Introduction from "../components/introduction";
import ProjectReport from "../components/projectReport";
import ActionPlan from "../components/actionPlan";
import MediaCoverage from "../components/mediaCoverage";
import LearningExperience from "../components/learningExperience";
import Info from "../components/info";
import Footer from "../components/footer";

export default function Home() {
    return (
        <div>
            <Navbar/>
            <div className="grid grid-cols-1 divide-y divide-gray-500 dark:text-divide-gray-300">
                <div><Introduction/></div>
                <div><ProjectReport/></div>
                <div><ActionPlan/></div>
                <div><MediaCoverage/></div>
                <div><LearningExperience/></div>
                <div><Info/></div>
            </div>
            <Footer/>
        </div>
    )
}
