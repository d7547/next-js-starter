import CompanyProfile from "@/components/CompanyProfileCard/CompanyProfileCard";
import Header from "@/components/Header/Header";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">


        
           <CompanyProfile
            name="Cloudify Solutions"
            location="San Francisco, CA"
            logoLetter="A"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt at labore."
            services={[
              "Cloud Data Services", 
              "Artificial Intelligence", 
              "Enterprise Software", 
              "Data Center Automation", 
              "Cloud Security", 
              "Cyber Security"
            ]}
            videoDuration="2 min commercial"
          />
       
      </main>
    </div>
  );
}
