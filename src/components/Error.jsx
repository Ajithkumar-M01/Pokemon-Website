const Error = () => {
  return (
    <>
      <div className=" w-1/2 ml-auto mr-auto h-screen flex justify-center items-center">
      
        <div className="bg-orange-300 p-10 rounded-xl text-center">
          <p>Something went wrong!</p>
          <p>Please check your internet connection</p>
          <p className="mt-5">Go back to <a href="/" className="bg-sky-500 p-2 rounded-xl">Home Page</a></p>
        </div>
      </div>
    </>
  );
};

export default Error;
