import styled from '@emotion/styled';

export const AvatarPickerViewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 339px;
  height: 100%;
`;

export const ModalHeader = styled.div`
  margin: 15px;
  font-weight: 700;
  font-size: 20px;
`;

export const CroppingWrapper = styled.div`
  width: 100%;
  display: inline-block;
  user-select: none;
  * {
    user-select: none;
  }
`;

export const ModalFooterButtons = styled.div`
  text-align: right;
  width: 100%;
  button:first-of-type {
    margin-right: 3px;
  }
`;
