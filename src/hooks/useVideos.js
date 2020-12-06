//few notes on custom hooks:
//custom hooks will be placed under a dedicated directory in under 'src'
//it is good practice to create reusable code in React (besides components)
//this is done by re-using functions inside a custom hook
//they will always make use of at least one primitive hook internally
//each custom hook shouold have ONE SINGLE PURPOSE
//example of good custom hook is data-fetching, that can be reusable and therefore a good custom hook.

//CORE STEPS TO BUILD CUSTOM HOOK:
//1. first we need to identify what in the code is related to one single process (so that we can extract it into the hook)
//2. identify the inputs to that code (in this case - it is only the default value given in useEffect - 'cats')
//3. identify the outputs - i.e functions/variable outputs - in this case are 'videos' variable (assigned to 'response')
//  and the appSubmit method which is executed as result of the input
//4. Extract the above code into a separate function - receiving the inputs as arguments, and returining the outputs.
//we can put the above into a sentence like: "if you give me a [default search term] I will give you [a way to search videos
//  of that term] and [a list of videos]"

import { useState, useEffect } from "react";
import youtube from "../api/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get("/search/", {
      params: {
        part: "snippet",
        maxResults: "5",
        q: term,
      },
    });
    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
