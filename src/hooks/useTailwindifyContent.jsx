import React, { useMemo } from 'react';

const useTailwindifyContent = (content) => {
  const processedContent = useMemo(() => {
    if (!content) return '';

    // Add Tailwind classes to <img> tags
    let updatedContent = content.replace(/<img/g, '<img class="w-full h-auto"');

    // Add Tailwind classes to <iframe> tags
    updatedContent = updatedContent.replace(
      /<iframe([\s\S]*?)<\/iframe>/g,
      `<div class="relative w-full overflow-hidden aspect-video">
         <iframe class="absolute top-0 left-0 w-full h-full" $1</iframe>
       </div>`
    );

    return updatedContent;
  }, [content]);

  return processedContent;
};

export default useTailwindifyContent;
