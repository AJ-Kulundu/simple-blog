import React, {useEffect} from 'react'
import { LoadingDots } from './LoadingDots';
import { usePostViews } from '../lib/usePostViews';

const PostMetrics = ({slug}:{slug:string}) => {

const {views,isLoading,isError,increment} = usePostViews(slug,{revalidateOnMount:false})
useEffect(() => increment(),[])

return(
    <>
    {isError || isLoading ? <LoadingDots/> : (<p>{views}views</p>)}
    </>
)



}

export default PostMetrics;