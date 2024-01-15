import React, { useEffect, useState } from "react";
import SlideSection from "../home-components/SlideSection";
import CommandantMsg from "../home-components/CommandantMsg";
import NewsAndEvents from "../home-components/NewsAndEvents";
import ArchitecturalElegance from "../home-components/ArchitecturalElegance";
import "./Home.css";
import Navlinks from "../shared/components/navigation/Navlinks";
import { useHttpClient } from "../shared/hooks/http-hook";

const Home = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [fetchData, setFetchData] = useState();

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/"
        );
        setFetchData(responseData);
      } catch (err) {}
    };

    fetchedData();
  }, []);

  if (isLoading || !fetchData || fetchData.length === 0) {
    return <>loading..</>;
  }

  return (
    <div className="home-section">
      <SlideSection slideData={fetchData?.home?.slidesData || []} />
      <div className="mobile-view-navlinks">
        <Navlinks />
      </div>
      <CommandantMsg msgData={fetchData?.home?.commandant_msg || []} />
      <NewsAndEvents />
      <ArchitecturalElegance
        architecturalData={fetchData?.home?.architecturalData || []}
      />
    </div>
  );
};

export default Home;
