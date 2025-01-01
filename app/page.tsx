"use client";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Search from "./HomeComponents/Search";

export default function Home() {
  const [bgImg, setBgImg] = useState<string>("");
  const [currentTime, setCurrentTime] = useState<string>("");

  const getDayName = (date: Date) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[date.getDay()];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setCurrentTime(date.toLocaleString());
    }, 60000);

    // Set initial time
    const initialDate = new Date();
    setCurrentTime(initialDate.toLocaleString());

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full flex items-center justify-start overflow-hidden px-8 md:px-16">
      {/* Background Image */}
      <Image
        src={
          "https://pixabay.com/get/g77678a860e842c9df7cc93d9b8f9b571146f9f372ec2189db8f0aa87b30601516c4cfd5bddac6a683420e3909b55f60c7eaef801f6d072c7632d35580bbeb760_1280.jpg"
        }
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
      <Box
        position={"absolute"}
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={20}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        color="white"
      >
        <Box
          position="absolute"
          top={8}
          right={8}
          color="white"
          fontSize="lg"
          fontWeight="bold"
          zIndex={10}
          textAlign="right"
        >
          <Text>{getDayName(new Date())}</Text>
          <Text>{currentTime}</Text>
          
        </Box>
        <Box position={"absolute"} top={0} zIndex={30}>
            <Search />
          </Box>
      </Box>
    </div>
  );
}
