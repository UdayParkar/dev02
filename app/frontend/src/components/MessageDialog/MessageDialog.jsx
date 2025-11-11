import React from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button
} from '@chakra-ui/react';

const MessageDialog = ({ isOpen, onClose, title, message }) => {
  const cancelRef = React.useRef();

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontWeight="bold">{title}</AlertDialogHeader>
          <AlertDialogBody>{message}</AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose} colorScheme="brand">
              OK
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default MessageDialog;
