import React, { useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';

export default function Popup({
  title,
  status,
  onStatusChange,
  actions,
  children,
}) {
  const [open, setOpen] = React.useState(status);
  useEffect(() => {
    setOpen(status);
  }, [status]);
  const handleOpen = () => {
    setOpen(!open);
    onStatusChange(!open);
  };

  return (
    <>
      <Dialog
        open={open}
        size="lg"
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        className="dark:bg-black dark:text-white"
      >
        <DialogHeader>{title}</DialogHeader>
        <DialogBody>{children}</DialogBody>

        <DialogFooter>
          {actions.title !== '' && (
            <Button variant="gradient" color="green">
              <span>
                {actions.title} {actions.icon}
              </span>
            </Button>
          )}
          {actions.title !== '' && (
            <Button className="ms-2" variant="gradient" color="blue">
              <span>
                {actions.title2} {actions.icon2}
              </span>
            </Button>
          )}
        </DialogFooter>
      </Dialog>
    </>
  );
}
