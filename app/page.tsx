import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
// import { BlogPreviewSection } from "@/components/sections/BlogPreviewSection";
import { ContactSection } from "@/components/sections/ContactSection";
// import { getAllPosts } from "@/lib/blog/posts";

export default async function Home() {
  // const recentPosts = await getAllPosts({ limit: 3 });

  return (
    <>
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        {/* <BlogPreviewSection posts={recentPosts} /> */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
