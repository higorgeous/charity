import { FC, useState } from 'react';
import Image from 'next/image';
import ModalVideo from 'react-modal-video';

import ActionBar from '../ActionBar';
import Hero from '../Hero';

import VideoIcon from './VideoIcon';

import { Wrapper, ImageWrapper, Button } from './styles';
import isClientSide from '@utils/isClientSide';

type Props = {
  item: any;
};

const Charity: FC<Props> = ({ item }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {isClientSide && (
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={item.video.replace('https://www.youtube.com/watch?v=', '')}
          onClose={() => setOpen(false)}
        />
      )}
      <Wrapper>
        <ActionBar charity={item} isCharity />
        <span className="logo">
          <Image src={item.logo} alt={item.name} width="70" height="70" />
        </span>
        <Hero>{item.name}</Hero>
        <p className="text">{item.tag}</p>
        <ImageWrapper>
          {item.video && (
            <Button onClick={() => setOpen(true)}>
              <VideoIcon />
            </Button>
          )}
          {item.image && (
            <Image
              src={item.image}
              alt={item.name}
              width="800px"
              height="450px"
            />
          )}
        </ImageWrapper>
        <div className="description">
          <p>{item.description}</p>
        </div>
      </Wrapper>
    </>
  );
};

export default Charity;
