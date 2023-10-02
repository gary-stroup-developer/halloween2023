import React from 'react';
import {data} from '../stories';
import { joti } from "../../../utils/fonts";
import Image from 'next/image';

const IndividualStory = ({params}) => {

  const storyDetail = data.stories[params.id];
  return (
    <div className={`${joti.className} relative top-52 w-3/4 mx-auto text-2xl leading-10`}>
    <p className='text-8xl mb-5'>{storyDetail.title}</p>
    <Image src={storyDetail.img} alt={`${storyDetail.alt}`} width={400} height={400} />
    <p className='text-4xl my-4 text-orange-600'>{storyDetail.region}</p>
        {
          storyDetail.story.map((paragraph,index) => {
                return (
                    <p key={`${storyDetail.title}-paragraph-${index}`} className='my-4'>{paragraph}</p>
                )
            })
        }
    </div>
  )
}

export default IndividualStory