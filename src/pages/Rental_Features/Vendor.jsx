import React, { useEffect, useState } from "react";
import { useQuery, gql,useMutation } from "@apollo/client";
import { CAR_VENDOR_RENTAL } from "../../GraphQL/rentFeatures";
import Layout from 'Layouts'
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import withAuth from '../../components/authentication';
import { Table, Space,Button,Modal,Form,Input,Image,Alert,Tag } from 'antd';
import 'antd/dist/antd.css';
import ImageUpload from '../../components/ImageUpload'
import {UPLOAD_CAR_VENDOR_RENT}  from '../../GraphQL/rentMutations';
import {DELETE_CAR_VENDOR_RENT}  from '../../GraphQL/deleteRentMutations';
import {DeleteTwoTone} from '@ant-design/icons'
function Vendor() {

  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [title, setTitle] = useState('')
  const [vendor_rent, setVendor_rent] = useState([]);
  const [imageid, setImageId] = useState(null);
  
  const [sucess, setSucess] = useState(null);
    
  const queryMultiple = () => {

    const vendorrent = useQuery(CAR_VENDOR_RENTAL);
    return [vendorrent];
  }
  
  const [
      { loading: loading7, data: data7 }
  ] = queryMultiple()

  // const { error, loading, data } = useQuery(Load_Cars);
  
  const onChange =(e)=>{
    
    setTitle(e.target.value)
  } 
  
 
  useEffect(() => {
    if(data7){
      setVendor_rent(data7.carVendorRentels);
    }

  }, [data7]);
 
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const [createCarVendor,{ data}] = useMutation(UPLOAD_CAR_VENDOR_RENT,{
    onCompleted: (data) => {
      handleCancel()
     setSucess(true)
    
    }
  });
  const uploadVendor = (title,imageid) =>{
   
    createCarVendor({
      variables: {
        title: title,
        image: imageid
      },
    }
   );

  }
  const [deleteCarVendor] = useMutation(DELETE_CAR_VENDOR_RENT,{
    onCompleted: (data) => {
     setSucess(true)
     console.log(data)
    }
  });
  const deleteVendor = (ID) =>{
   console.log(ID)
   deleteCarVendor({
      variables: {
        Id: ID
      },
    }
   );
  }
  const onSubmit = e => {
    console.log(title)
    console.log(imageid)
    if(title && imageid){
      uploadVendor(title,imageid)
    }
 
  };

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
              <Button onClick={()=>deleteVendor(id)}><DeleteTwoTone /></Button>
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
    <h2>Rent Car Vendor</h2>
   
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
               
              <Modal title="Add new vendor" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
              footer={null}
              >
      
        <Input style={{marginBottom: 5}} value={title} onChange={onChange} placeholder="Title" name="Title" required={true}/>

  

  <div>
        <Button type="primary" onClick={onSubmit} style={{float: "right",borderRadius: 5,margin: 3}}>
          Submit
        </Button>
    </div>
       {imageid && <div>{imageid}</div>}
       <ImageUpload ImageID={setImageId}/>
     
  
      </Modal>
           
               <Table columns={columns} size="middle" dataSource={vendor_rent} />
         
               </Col>
           </Row>
           
      {" "}
    </Layout>
  );
}

export default withAuth(Vendor);
