import React, {useState} from 'react'

import {
    Form,
    Card,
    Row,
    Col,
    Input
} from 'antd'

export default function SideComponent() {

    const [fieldsNode, setFieldsNode] = useState([])

    return (
        <Card>
            <Form
                layout='vertical'
                fields={fieldsNode}
                onFieldsChange={( _ , allFields) => {
                    console.log(allFields);
                    setFieldsNode(allFields)

                    /* let elementToModify = {...e}
                    console.log(allFields);
                    allFields.forEach((field) => {
                        elementToModify.data[field.name] = field.value
                    })
                    setElements((oldElements) => {
                        oldElements[index] = {...elementToModify}
                        return(oldElements)
                    })
                    setFieldsNode(allFields) */
                }}
            >
                <Row gutter={[5, 10]}>
                    <Col span={24}>
                        <Form.Item 
                            name={'nome'} // mesmo nome no objeto de elementos
                            label={'Título'}
                            initialValue={e.data.label}
                            >
                            <Input placeholder={'Título'} />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item 
                            name={'descricao'} // mesmo nome no objeto de elementos
                            label={'Descrição'}
                            initialValue={e.data.descricao}
                            >
                            <Input.TextArea placeholder={'Descrição'} />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Card>
    )
}
