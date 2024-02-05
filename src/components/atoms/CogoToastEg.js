import cogoToast from 'cogo-toast';

const CogoToastEg = () => {
  const openToast = () => {
    /* Can use .warn , .loading, .info, .error as well */
    cogoToast.success('This is a success message!', {
      onClick: () => {
        // hide();
      },
      hideAfter: 3, // in seconds
      position: 'bottom-center',
      heading: 'Success',
    });
  };

  const openInfoToast = () => {
    cogoToast.loading('Loading your data...', { hideAfter: 3 }).then(() => {
      cogoToast.error(
        <div>
          <b>Awesome!</b>
          <div>Isn't it?</div>
        </div>,
      );
    });
  };

  return (
    <div className="root">
      <p className="sub-heading">Cogo-Toast</p>
      <button className="btn" onClick={() => openToast()}>
        {' '}
        Open Success Toast
        {' '}
      </button>
      <button className="btn" onClick={() => openInfoToast()}>
        {' '}
        Open Info Toast
        {' '}
      </button>
    </div>
  );
};

export default CogoToastEg;
