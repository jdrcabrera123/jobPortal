import React from "react";
import BannerText from "../components/BannerText";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <BannerText
        title="Become a React Dev"
        subtitle="Find the React job that fits your skill"
      />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
