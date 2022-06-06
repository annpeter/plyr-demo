import Plyr from 'plyr-react';

// 如果把这行注释掉，项目就是可以运行的，但是就是css样式文件没有引入进来
import 'plyr-react/plyr.css';

const plyrProps = {
  source: {
    type: 'video',
    sources: [{ src: 'bTqVqk7FSmY', provider: 'youtube' }],
  },
};

export default () => {
  // @ts-ignore
  return <Plyr {...plyrProps} />;
};
