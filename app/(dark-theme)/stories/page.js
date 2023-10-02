import React from 'react';
import {data} from './stories';
import StoryLink
 from '@/components/storyLink';
const StoriesPage = () => {
    const stories = data.stories;
  return (
    <div className={`relative top-52 w-3/4 mx-auto`}>
    
        {
            stories.map((story,index) => {
                return (
                    <StoryLink key={story.id +1 *Math.random().toFixed(10)} alt={story.alt} tag={story.tag} title={story.title} url={story.img} id={story.id} />
                )
            })
        }
    </div>
  )
}

export default StoriesPage