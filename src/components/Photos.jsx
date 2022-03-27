import React, { useCallback, useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { Modal } from './Modal';
import { GatsbyImage } from 'gatsby-plugin-image';

import { device } from '../utils/media';

const Photos = ({ title, photos: photosProp }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const photos = photosProp
    .map(
      ({
        node: {
          name,
          photo: { gatsbyImageData: photo },
          thumb: { gatsbyImageData: thumb },
        },
      }) => ({ name, photo, thumb })
    )
    .sort((a, b) => a.name - b.name);

  const onArrowLeft = useCallback(
    (e) => {
      e.stopPropagation();
      setCurrentPhotoIndex(
        currentPhotoIndex - 1 <= 0 ? photos.length - 1 : currentPhotoIndex - 1
      );
    },
    [currentPhotoIndex, photos.length]
  );

  const onArrowRight = useCallback(
    (e) => {
      e.stopPropagation();
      setCurrentPhotoIndex(
        currentPhotoIndex + 1 < photos.length ? currentPhotoIndex + 1 : 0
      );
    },
    [currentPhotoIndex, photos.length]
  );

  const keyPressListener = useCallback(
    (e) => {
      if (e?.key === 'ArrowRight') {
        onArrowRight(e);
      } else if (e?.key === 'ArrowLeft') {
        onArrowLeft(e);
      } else if (e?.key === 'Escape') {
        setIsModalOpen(false);
      }
    },
    [onArrowRight, onArrowLeft, setIsModalOpen]
  );

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', keyPressListener);
    }

    return () => {
      if (isModalOpen) {
        document.removeEventListener('keydown', keyPressListener);
      }
    };
  }, [isModalOpen, keyPressListener, onArrowRight, onArrowLeft]);

  const currentPhoto = photos[currentPhotoIndex].photo;
  const { width, height } = currentPhoto;
  const aspectRatio = width / height;

  return (
    <Thumbnails>
      {photos.slice(0, 3).map(({ name, thumb }, index) => (
        <ThumbnailButton
          key={name}
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPhotoIndex(index);
            setIsModalOpen(true);
          }}
        >
          <Thumbnail image={thumb} alt={title} />
        </ThumbnailButton>
      ))}
      {isModalOpen && (
        <Modal onOverlayClick={() => setIsModalOpen(false)}>
          <PhotoWrapper>
            <PhotoImage image={currentPhoto} objectFit="contain" alt={title} />
          </PhotoWrapper>
          <NavWrapper>
            <NavButtonLeft type="button" onClick={onArrowLeft} />
            <CloseButton onClick={() => setIsModalOpen(false)} />
            <NavButtonRight type="button" onClick={onArrowRight} />
          </NavWrapper>
        </Modal>
      )}
    </Thumbnails>
  );
};

const ThumbnailButton = styled.button`
  border: none;
  padding: 0;
  background-color: transparent;
  margin-right: 16px;

  @media ${device.tablet} {
    margin-right: 24px;
  }

  &:hover {
    cursor: pointer;
  }

  &:active,
  &:focus {
    outline: 0;
  }

  &:last-child {
    margin: 0;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;

const NavButtonCommonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 0;
  background-color: transparent;
  height: 14vw;
  width: 14vw;
  border-radius: 14vw;
  background-color: rgba(0, 0, 0, 0.5);

  @media ${device.tablet}, (orientation: landscape) {
    height: 12vh;
    width: 12vh;
    border-radius: 12vh;
  }

  &:hover {
    cursor: pointer;
  }

  &:before,
  &:after {
    opacity: 0.6;
  }

  &:hover {
    &:before,
    &:after {
      opacity: 1;
    }
  }
`;

const NavButton = styled.button`
  ${NavButtonCommonStyles};

  &:after {
    display: block;
    content: ' ';
    height: 28%;
    width: 28%;
    background-color: transparent;
    border-color: white;
    border-style: solid;
  }

  &:active,
  &:focus {
    outline: 0;
  }
`;

const CloseButton = styled.button`
  ${NavButtonCommonStyles};
  margin: 0 1vw;
  transform: scale(0.9);

  &:before,
  &:after {
    content: ' ';
    height: 42%;
    width: 2px;
    background-color: white;
  }
  &:before {
    transform: rotate(45deg);
    transform-origin: right;
  }
  &:after {
    transform: rotate(-45deg);
    transform-origin: left;
  }

  &:active,
  &:focus {
    outline: 0;
  }
`;

const NavButtonLeft = styled(NavButton)`
  &:after {
    border-width: 0 0 2px 2px;
    transform: translateX(25%) rotate(45deg);
  }
`;

const NavButtonRight = styled(NavButton)`
  &:after {
    border-width: 2px 2px 0 0;
    transform: translateX(-25%) rotate(45deg);
  }
`;

const Thumbnails = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Thumbnail = styled(GatsbyImage)`
  width: 68px;
  height: 68px;
  border-radius: 68px;

  @media ${device.tablet} {
    width: 8vw;
    height: 8vw;
    border-radius: 8vw;
  }
`;

const PhotoWrapper = styled.div`
  padding-top: 4vh;
  width: 100vw;
  height: 76vh;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const PhotoImage = styled(GatsbyImage)`
  animation: ${fadeIn} ease-in 0.6s;
`;

export default Photos;
