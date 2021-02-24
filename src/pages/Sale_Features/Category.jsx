import React, { useEffect, useState } from "react";
import { useQuery, useMutation} from "@apollo/client";
import { CAR_CATEGORY_SALES } from "../../GraphQL/saleFeatures";
import Layout from 'Layouts'
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import withAuth from '../../components/authentication'
import { Table, Space,Button ,Modal,Form,Input,Upload,Image,Alert,Tag} from 'antd';
import {DeleteTwoTone} from '@ant-design/icons'
import {UPLOAD_CAR_CATEGORY_SALE}  from '../../GraphQL/saleMutations';
import {DELETE_CAR_CATEGORY_SALE}  from '../../GraphQL/DeleteSaleMutations';

import ImageUpload from '../../components/ImageUpload'
import 'antd/dist/antd.css';

function Category() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [title, setTitle] = useState('')
  const [category_sale, setCategory_sale] = useState([]);
  const [imageid, setImageId] = useState(null);
  
  const [sucess, setSucess] = useState(null);

  const queryMultiple = () => {
    const category_sale = useQuery(CAR_CATEGORY_SALES);
    
    return [category_sale];
  }
  
  const [
      { loading: loading1, data: data1 },
  ] = queryMultiple()


  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
 
  const onChange =(e)=>{
    
    setTitle(e.target.value)
  }  
     

 const [createCarCategory] = useMutation(UPLOAD_CAR_CATEGORY_SALE,{
   onCompleted: (data) => {
     
     handleCancel()
    setSucess(true)
    console.log(data)
   }
 });
 const uploadCategory = (title,imageid) =>{
  
   createCarCategory({
     variables: {
       title: title,
       image: imageid
     },
   }
  );

 }

 const [deleteCarCategory] = useMutation(DELETE_CAR_CATEGORY_SALE,{
   onCompleted: (data) => {
    setSucess(true)
    console.log(data)
   }
 });
 const deleteCategory = (ID) =>{
  console.log(ID)
   deleteCarCategory({
     variables: {
       Id: ID
     },
   }
  );
 }
 const onSubmit = e => {

  if(title && imageid){
    uploadCategory(title,imageid)
  }
};
  useEffect(() => {
    if(data1){
      setCategory_sale(data1.carCategories);
    }
  }, [data1]);
 
  
    const columns = [
      {
        title: "Image",
        dataIndex: "image",  // this is the value that is parsed from the DB / server side
        render: image => {
          const name = "http://localhost:1337"+image.url
        return(
          <Image
      width={100}
      src={name}
    />
        )} 
  },
        {
          title: 'Title English',
          dataIndex: 'title_eng',
          key: 'title_eng',
          render: text => <Tag color="green">{text}</Tag>,
        },
        {
          title: 'Title Arabic',
          dataIndex: 'title_arabic',
          key: 'title_arabic',
          render: text => <Tag color="green">{text}</Tag>,
        },
        
        {
          title: 'Action',
          dataIndex: 'id',
          key: 'id',
          render: id => (
            <Space size="middle">
              <Button onClick={()=>deleteCategory(id)}><DeleteTwoTone /></Button>
            </Space>
          ),
        },
      ];
      
  
  return (
    
    <Layout>
       {sucess &&   <Alert
      message="Success"
      type="success"
      showIcon
      closable
    />}
    <Row>
    <Col breakPoint={{ xs: 6, lg: 6 }}>
    <h2>Sale Car Category</h2>
   
    </Col>
    <Col breakPoint={{ xs: 6, lg: 6 }}>
    <Button 
               type="primary" 
               style={{float: "right", borderRadius: "5px"}}
               onClick={showModal}
               >+ Add new</Button>
    </Col>
    </Row>
    
           <Row>
               <Col breakPoint={{ xs: 12, lg: 12 }}>
              
              <Modal title="Add new category" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
              footer={null}
              >
               
                  
       <Input style={{marginBottom: 5,borderRadius: "3px"}} 
        value={title} 
        onChange={onChange} 
        placeholder="Title" name="Title" required={true}/>

  <div>
        <Button type="primary" 
        onClick={onSubmit} 
        style={{float: "right",borderRadius: 5,marginBottom: "5px"}}>
          Submit
        </Button>
    </div>
       {imageid && <div>{imageid}</div>}
       <ImageUpload ImageID={setImageId}/>
     
      
      </Modal>
               <Table columns={columns} size="middle" dataSource={category_sale} />
         
               </Col>
           </Row>
           
      {" "}
    </Layout>
  );
}

export default withAuth(Category);
