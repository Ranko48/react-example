import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

import DropdownList from './DropdownList'
import config_file from '../../../config.json';
import FormGroup from 'react-bootstrap/esm/FormGroup';

const ProductCreator = () => {

    const [titles, setTitles] = useState({ brand: 'brand', color: 'color', material: 'material', type: 'type' })
    const [selectedFile, setSelectedFile] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log('submit')

        const { API_URL } = config_file

        // get safe url from server to put image directly to s3 bucket
        const response_url = await fetch(`${API_URL}/products/upload`)
        const { key } = await response_url.json()
        console.log(key)

        const response_s3 = await fetch(key, {
            method: 'PUT',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: selectedFile
        })
        console.log(response_s3)

        // print url of image from s3 bucket
        console.log(key.split('?')[0])

    }

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0])
    }

    return (
        <>
            <div className='mt-3 d-flex justify-content-center'>
                <h3>Product Creator</h3>
            </div>

            <Form className='p-3 bg-light' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label >Name</Form.Label>
                    <Form.Control className='custom-border' type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group>
                    <Form.Label >Description</Form.Label>
                    <Form.Control as="textarea" className='custom-border' aria-label="With textarea" />
                </Form.Group>

                <DropdownList />

                <Form.Control variant="primary" type="file" className='mb-3' onChange={handleFileChange} />

                <FormGroup className='mb-3 d-flex align-items-center'>
                    <Form.Control type='number' defaultValue={0} className='custom-border me-2' style={{ width: '6rem' }} />
                    <h6>pieces</h6>
                </FormGroup>

                <Button variant="primary" type="submit">
                    Publish
                </Button>
            </Form>
        </>
    )
}

export default ProductCreator