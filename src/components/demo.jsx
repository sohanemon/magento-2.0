const Demo = () => {
  return (
    <div className='flex flex-col items-center my-10'>
      <div className='grid w-5/6 grid-cols-3 gap-8 mx-auto'>
        {data.map((el) => (
          <Card {...el} />
        ))}
      </div>
      <button className='px-10 py-3 mt-40 mb-12 text-xl font-semibold text-white transition-colors duration-500 bg-pink-600 rounded-full hover:bg-black'>
        Purchase Now !
      </button>
      <p className='text-3xl font-bold leading-relaxed tracking-wider text-center text-gray-900'>
        Start Creating Your Website Today With <br />
        <span className='text-pink-600'>Euforia Theme Now</span>
      </p>
    </div>
  );
};

export default Demo;

function Card({ img, name }) {
  return (
    <div className='h-[500px] cursor-pointer group relative '>
      <img
        className='object-cover min-h-full ring-4 ring-gray-300 group-hover:ring-pink-400'
        src={img}
        alt=''
      />
      <p className='p-8 text-xl font-semibold tracking-wider text-center'>
        {name}
      </p>
      <div className='absolute hidden top-[90%] group-hover:flex transition-all duration-500 gap-4 left-1/2 -translate-x-1/2'>
        <Button>Purchase Now</Button>
        <Button>View Demo</Button>
      </div>
    </div>
  );
}

function Button({ children }) {
  return (
    <button className='px-4 py-2 text-xl text-gray-800 transition-all duration-500 bg-white shadow hover:text-white hover:bg-pink-500 min-w-max'>
      {children}
    </button>
  );
}

const data = [
  {
    img: "https://images.unsplash.com/photo-1586716402203-79219bede43c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    name: "Fashion",
  },
  {
    img: "https://images.unsplash.com/photo-1493106819501-66d381c466f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Style",
  },
  {
    img: "https://images.unsplash.com/photo-1625595234473-c00c86c73353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Study",
  },
];
