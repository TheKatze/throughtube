import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Watch: NextPage = () => {
  var router = useRouter();

  var query = router.query['c'] as string | undefined;
  var channels = query?.split(',');

  if (!channels) {
    return <div>No channels given TODO SHOW INPUT</div>;
  }

  return (
    <div>
      You are watching:
      {channels.map((channel, index) => (
        <p key={index}>{channel}</p>
      ))}
    </div>
  );
};

export default Watch;
