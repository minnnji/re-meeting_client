import React, { memo, useRef } from 'react';
import styled from 'styled-components';
import voiceRecogImg from '../lib/voiceRecogImg.gif';

const MeetingSideBar = props => {
  const {
    stream,
    meetingInfo,
    isMediaRecorder

  } = props;
  const userVideo = useRef();

  if (userVideo.current && stream) {
    userVideo.current.srcObject = stream;
  }

  return (
    <Meeting-nav>
      <div>
        <Video playsInline muted ref={userVideo} autoPlay />
      </div>
      <MeetingInfo>
        <MeetingTitle>{meetingInfo.title}</MeetingTitle>
        <br />
        <h3>
          회의 주최자 :
          {' '}
          {meetingInfo.creator}
        </h3>
      </MeetingInfo>
      <Img isMediaRecorder={isMediaRecorder} src={voiceRecogImg} alt="in progress" />
    </Meeting-nav>
  );
};

const Video = styled.video`
  width: 100%;
`;

const MeetingInfo = styled.div`
  margin: 0 20px;
`;

const MeetingTitle = styled.h2`
  margint-bottom: 10px;
`;

const Img = styled.img`
  display: ${props => (props.isMediaRecorder ? 'block' : 'none')};
  width: 100%;
`;

export default memo(MeetingSideBar);
