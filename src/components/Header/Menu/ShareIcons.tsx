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
import { useRouter } from 'next/router';

import useAuth from '@hooks/useAuth';
import segmentEvent from '@utils/segmentEvent';

import { ShareWrapper } from './styles';

type Props = {
  shareTitle: string;
  shareUrl: string;
  isVote?: boolean;
};

const ShareIcons = ({ shareTitle, shareUrl, isVote }: Props) => {
  const { user } = useAuth();
  const { asPath } = useRouter();

  const hashtagFB = '#Gorgeous';
  const hashtagTW = 'Gorgeous';

  const referralUrl = `${shareUrl}?referrer=${user!.uid}`;
  const event = isVote ? 'voteShare' : 'globalShare';

  const socialClick = (title: string) => {
    segmentEvent(event, {
      href: referralUrl,
      path: asPath,
      title,
      user: user?.uid,
    });
  };
  return (
    <ShareWrapper>
      <FacebookShareButton
        url={referralUrl}
        hashtag={hashtagFB}
        quote={shareTitle}
        onClick={() => socialClick('Facebook')}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <FacebookMessengerShareButton
        url={referralUrl}
        appId="1388941491486821"
        onClick={() => socialClick('Facebook Messenger')}
      >
        <FacebookMessengerIcon size={32} round />
      </FacebookMessengerShareButton>
      <TwitterShareButton
        url={referralUrl}
        title={shareTitle}
        via="GorgeousToken"
        hashtags={[hashtagTW]}
        onClick={() => socialClick('Twitter')}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <TelegramShareButton
        url={referralUrl}
        title={shareTitle}
        onClick={() => socialClick('Telegram')}
      >
        <TelegramIcon size={32} round />
      </TelegramShareButton>
      <WhatsappShareButton
        url={referralUrl}
        title={shareTitle}
        separator=":: "
        onClick={() => socialClick('WhatsApp')}
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <LinkedinShareButton
        source={referralUrl}
        url={referralUrl}
        title={shareTitle}
        onClick={() => socialClick('LinkedIn')}
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <RedditShareButton
        url={referralUrl}
        title={shareTitle}
        onClick={() => socialClick('Reddit')}
      >
        <RedditIcon size={32} round />
      </RedditShareButton>
      <EmailShareButton
        url={referralUrl}
        subject={shareTitle}
        onClick={() => socialClick('Email')}
      >
        <EmailIcon size={32} round />
      </EmailShareButton>
    </ShareWrapper>
  );
};

export default ShareIcons;
