import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function UTM() {
  const [utmSource, setUtmSource] = useState("");
  const [utmMedium, setUtmMedium] = useState("");
  const [utmKeywords, setUtmKeywords] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    if (localStorage.getItem("utm_source")) {
      const utmsource = localStorage.getItem("utm_source");
      setUtmSource(utmsource);
    }
    if (localStorage.getItem("utm_medium")) {
      const utmmedium = localStorage.getItem("utm_medium");
      setUtmMedium(utmmedium);
    }
    if (localStorage.getItem("utm_term")) {
      const utmkeywords = localStorage.getItem("utm_term");
      setUtmKeywords(utmkeywords);
    }
    if (searchParams.has("utm_source")) {
      const utmsource = searchParams.get("utm_source");
      setUtmSource(utmsource);
      localStorage.setItem("utm_source", utmsource);
    }
    if (searchParams.has("utm_medium")) {
      const utmmedium = searchParams.get("utm_medium");
      setUtmMedium(utmmedium);
      localStorage.setItem("utm_medium", utmmedium);
    }
    if (searchParams.has("utm_term")) {
      const utmkeywords = searchParams.get("utm_term");
      setUtmKeywords(utmkeywords);
      localStorage.setItem("utm_term", utmkeywords);
    }
  }, [searchParams]);

  return (
    <>
      <input type="hidden" name="source" value={utmSource} />
      <input type="hidden" name="medium" value={utmMedium} />
      <input type="hidden" name="keywords" value={utmKeywords} />
    </>
  );
}

export default UTM;
