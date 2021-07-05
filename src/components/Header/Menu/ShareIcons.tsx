import React from 'react';
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  EmailIcon,
} from 'react-share';

import useAuth from '@hooks/useAuth';

import { ShareWrapper } from './styles';

type Props = {
  shareTitle: string;
  shareUrl: string;
};

const ShareIcons = ({ shareTitle, shareUrl }: Props) => {
  const { user } = useAuth();
  const hashtagFB = '#Gorgeous';
  const hashtagTW = 'Gorgeous';

  const referralUrl = `${shareUrl}?refferer=${user!.uid}`;
  return (
    <ShareWrapper>
      <FacebookShareButton
        url={referralUrl}
        hashtag={hashtagFB}
        quote={shareTitle}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <FacebookMessengerShareButton url={referralUrl} appId="1388941491486821">
        <FacebookMessengerIcon size={32} round />
      </FacebookMessengerShareButton>
      <TwitterShareButton
        url={referralUrl}
        title={shareTitle}
        via="GorgeousToken"
        hashtags={[hashtagTW]}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <TelegramShareButton url={referralUrl} title={shareTitle}>
        <TelegramIcon size={32} round />
      </TelegramShareButton>
      <WhatsappShareButton url={referralUrl} title={shareTitle} separator=":: ">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <LinkedinShareButton
        source={referralUrl}
        url={referralUrl}
        title={shareTitle}
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <RedditShareButton url={referralUrl} title={shareTitle}>
        <RedditIcon size={32} round />
      </RedditShareButton>
      <EmailShareButton url={referralUrl} subject={shareTitle}>
        <EmailIcon size={32} round />
      </EmailShareButton>
    </ShareWrapper>
  );
};

export default ShareIcons;
