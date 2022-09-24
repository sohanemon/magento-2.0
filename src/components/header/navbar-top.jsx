const NavbarTop = () => {
  return (
    <div className='flex justify-between p-4 bg-gray-800'>
      <img
        className='w-40'
        src='https://assets.market-storefront.envato-static.com/storefront/assets/logos/envato-market-a5ace93f8482e885ae008eb481b9451d379599dfed24868e52b6b2d66f5cf633.svg'
        alt=''
      />
      <button className='px-4 py-1 font-semibold text-white rounded shadow-sm bg-lime-600 shadow-lime-400'>
        Buy now
      </button>
    </div>
  );
};

export default NavbarTop;
