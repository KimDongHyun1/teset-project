import React, { useState, useEffect  } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import PrevButton from '../components/PrevButton';
import RadioGroup from '../components/RadioGroup';
import { genderList, infoContentList } from './../data/common';
import { initialPartnerInfo } from './../data/initialState';
import Input from '../components/Input';
import { MoonLoader } from 'react-spinners';


const PartnerInfo = ({handlePartnerInfo}) => {
  // logic
  const history = useNavigate();
  const [partnerInfo, setPartnerInfo] = useState(initialPartnerInfo);

  const handleClick = () => {
    history('/chat')
    handlePartnerInfo(partnerInfo)
  };

  const handleGenderData = (gender) => {
    const resultData = {...partnerInfo, gender}
    setPartnerInfo(resultData);
  }

  const handleInfoContent = (label, value) => {
    const resultData = {...partnerInfo, [label]: value}
    setPartnerInfo(resultData);
  }

  // view
  return (
    <div className="w-full h-full px-6 pt-10 break-keep overflow-auto">
      <i className="w-168 h-168 rounded-full bg-date-blue-500 fixed -z-10 -left-60 -top-104"></i>
      <PrevButton />

      <div className="h-full flex flex-col">
        <Title mainTitle={'소개팅 상대를 알려주세요'} />

        {/* START:info 영역 */}
        <form className="pt-20">

          {/* Radio Group 영역 */}
          <RadioGroup 
            items={genderList} 
            defaultCheckedData={partnerInfo.gender}
            onChange={handleGenderData}
          />

          {/* Input 영역 */}
          {infoContentList.map((infoContent) => (
            <Input 
              key={infoContent.id}
              label={infoContent.label} 
              inputType={infoContent.inputType}
              text={infoContent.text} 
              placeholder={infoContent.placeHolder} 
              onChange={handleInfoContent}
            />
          ))}


        </form>
        {/* END:info 영역 */}

          <Button text={'Next'} color={'bg-date-blue-700'} onClick={handleClick} />
      </div>
    </div>
  );
};

export default PartnerInfo;
