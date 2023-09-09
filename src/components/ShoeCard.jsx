
const ShoeCard = ({imgUrl, changeBigShoeImage, bigShoeImage}) => {
  const handelClick = () => {
    if(bigShoeImage !== imgUrl) changeBigShoeImage(imgUrl.bigShoe) 
  }



  return (
    <div className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 transition-all ease-in duration-150 ${bigShoeImage === imgUrl.bigShoe ? 'border-blue-400' : 'border-transparent'}`} onClick={handelClick}>
      <div className="center-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img src={imgUrl.thumbnail} alt="shoe collection" width={127} height={103} className="object-contain" />
      </div>
    </div>
  );
};

export default ShoeCard;