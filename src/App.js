import React from "react";

import { useStoryblok, StoryblokComponent } from "@storyblok/react";

function App() {

  // The slug of the story
  let slug = '2023-11-rescue-landing-1'

  const story = useStoryblok(slug, 
    { version: "draft" } // Or published
    );

  if (!story || !story.content) {
    return <div>Loading...</div>;
  }

  // If story is there, use StoryblokComponent to render it (dynamically)
  return <StoryblokComponent blok={story.content} />;
}
export default App;