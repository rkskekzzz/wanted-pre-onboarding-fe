import React from 'react';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import { SignForm } from 'src/components';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface SignUpModalProps {
  isShowSignUpModal: boolean;
  handleIsShowSignUpModalClose: () => void;
  submitAction: (email: string, password: string) => Promise<void>;
}

const SignUpModal = ({
  isShowSignUpModal,
  handleIsShowSignUpModalClose,
  submitAction,
}: SignUpModalProps) => {
  return (
    <Modal open={isShowSignUpModal} onClose={handleIsShowSignUpModalClose}>
      <Box sx={style}>
        <SignForm submitAction={submitAction} submitButtonText="Sign Up" />
      </Box>
    </Modal>
  );
};

export default SignUpModal;
