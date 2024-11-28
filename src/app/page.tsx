
import { DotBackgroundDemo } from "@/components/ui/dotbackground";
import Navbar from "../components/ui/navbar";
import MainBody from "@/components/ui/mainbody";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <DotBackgroundDemo/>
      <MainBody/>
      <Footer />
    </div>
  );
}
