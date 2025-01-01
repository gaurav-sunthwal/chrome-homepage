"use clinet"
import { Box, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import SerpApi from "google-search-results-nodejs";
import logo from "@/public/img/logo.png";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { useRouter } from "next/navigation";
export default function Search() {
  const [seach ,  setSearch] = useState("");
  const router = useRouter();


  const handleChange = (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
    console.log(seach);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    router.push(`https://www.google.com/search?q=${seach}`);
  };
  return (
    <VStack w={"100%"}>
      <Box
        p={3}
        w={"20%"}
        h={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image src={logo} alt="logo" />
      </Box>
      <Box w={"100%"}>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </Box>
    </VStack>
  );
}
const placeholders = [
  "What's the first rule of Fight Club?",
  "Who is Gaurav Sunthwal?",
  "Where is Andrew Laeddis Hiding?",
  "Write a Javascript method to reverse a string",
  "How to assemble your own PC?",
];

// https://www.google.com/search?q=ram&oq=ram&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhBMgYIAhBFGEEyCggDEC4YsQMYgAQyDAgEECMYJxiABBiKBTIGCAUQRRhBMgYIBhBFGDwyBggHEEUYPNIBCDQ2NjFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8
