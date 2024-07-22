import {ScrollView, Text, View} from "react-native";
import Slider from "./components/Slider";
import ResumeTemplateGrid from "./components/ResumeTemplateGrid";
import ResumeWriters from "./components/ResumeWriters/ResumeWriters";

const Index = () => (
    <ScrollView>
        <Slider />
        <ResumeWriters />
        <ResumeTemplateGrid />
    </ScrollView>
);



export default Index;