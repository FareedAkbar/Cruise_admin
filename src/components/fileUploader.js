import React, { useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import {UPLOAD_FILE_CRUISE} from '../GraphQL/Mutations'
import { useMutation  } from "@apollo/client";


const ImageUpload =  ({data, getFile}) => {
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);
  

//   const [Upload,{ data}] =  useMutation (UPLOAD_FILE_CRUISE,{
//     onCompleted: (data) => {
//      if(data){
//      console.log(data)
//      }
//      else{
//        console.log('wrong passwrod')
//      }
//     }
//   });

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async file => {
      console.log('yuii')
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
 
  const check =  e =>{
    //   if(e.file){
    //     console.log(e)
    //     Upload({
    //         variables: {
    //           file: e
    //         },
    //       }
    //      );
    //   }else{
    //       console.log(e)
    //   }
    // getFile(e)
    console.log(e)
  }

  return (
   
      <Upload
      accept =".png"
       // action="http://localhost:1337/graphql"
    //    action = {check}
    //     listType="picture-card"
    //     fileList={fileList}
    //     onChange={onChange}
    //     onPreview={onPreview}
    // accept=".txt, .csv"
    showUploadList={false}
    beforeUpload={async file => {
        const reader = new FileReader();

        reader.onload =  e => {
            console.log(e.target.result);
        };
        const t = await reader.readAsDataURL(file);
        console.log(t)
     
        getFile(t)
        // Prevent upload
        return true;
    }}

      >
        {fileList.length < 5 && '+ Upload'}
      </Upload>
    
  );
};
export default ImageUpload