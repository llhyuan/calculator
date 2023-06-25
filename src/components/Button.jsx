export default function Button({ children, fn, id, dispatch, content }) {
  function clickHandler(e) {
    dispatch({
      type: fn,
      key: e.currentTarget.dataset.content,
    });
  }

  if (fn === 'number') {
    return (
      <button
        id={id}
        className={
          'bg-gray-400 rounded-full mx-auto text-center active:bg-gray-300 ' +
          (children === '0' ? 'w-[11rem]' : 'w-[4.5rem]')
        }
        data-content={content}
        onClick={clickHandler}
      >
        {children}
      </button>
    );
  } else if (fn === 'operator') {
    return (
      <button
        id={id}
        className='bg-orange-400 active:bg-orange-300 rounded-full w-[4.5rem] mx-auto text-center align-middle'
        data-content={content}
        onClick={clickHandler}
      >
        <span className='relative top-[-4px]'>{children}</span>
      </button>
    );
  }
  return (
    <button
      id={id}
      className='bg-gray-300 active:bg-gray-200 rounded-full w-[4.5rem] mx-auto text-center text-gray-900'
      data-content={content}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}
