import MySwiper from "./swiper/my-swiper";

const BestSelling = () => {
  return (
    <div className='flex flex-col items-center gap-8 p-16 m-6 bg-gray-200'>
      <img
        className='w-10'
        src='https://demo.templatetrend.com/magento/Euforia/images/inner.png'
        alt=''
      />
      <h1 className='text-3xl font-semibold text-center text-gray-800'>
        OUR BESTSELLING MAGENTO THEMES
      </h1>
      <MySwiper data={data} />
    </div>
  );
};

export default BestSelling;

const data = [
  {
    img: "https://images.unsplash.com/photo-1663953009099-a83b8c8d065b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1633584043246-b9ccff533f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1663796589594-b7800d870950?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1663877430904-7fdf2283a56e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1663925461603-b3af19112087?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1662622842908-ea6c4f23cc90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1663086446112-4f44341536b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1663106655642-ccb1f0a74068?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1663446976487-f0e964f52835?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
  },
];
