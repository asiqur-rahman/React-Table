import React from 'react';
import { Row, Col, Card, CardBody, Input, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import PageTitle from '../../components/PageTitle';
const records = [
    {
        id: 1,
        age: 32,
        name: 'Burt',
        company: 'Kaggle',
        phone: '+1 (823) 532-2427',
    },
    {
        id: 2,
        age: 23,
        name: 'Long',
        company: 'Magmina',
        phone: '+1 (813) 583-2089',
    },
    {
        id: 3,
        age: 31,
        name: 'Alvarado',
        company: 'Translink',
        phone: '+1 (975) 468-3875',
    },
    {
        id: 4,
        age: 24,
        name: 'Lilia',
        company: 'Digitalus',
        phone: '+1 (891) 537-3461',
    },
    {
        id: 5,
        age: 25,
        name: 'Amanda',
        company: 'Bunga',
        phone: '+1 (916) 522-3747',
    },
    {
        id: 6,
        age: 20,
        name: 'Alexandra',
        company: 'Conjurica',
        phone: '+1 (876) 492-3181',
    },
    {
        id: 7,
        age: 27,
        name: 'Diana',
        company: 'Extragen',
        phone: '+1 (977) 417-3038',
    },
    {
        id: 8,
        age: 26,
        name: 'Goodman',
        company: 'Aquamate',
        phone: '+1 (930) 545-2289',
    },
    {
        id: 9,
        age: 26,
        name: 'Edith',
        company: 'Pyrami',
        phone: '+1 (854) 506-3468',
    },
    {
        id: 10,
        age: 29,
        name: 'Juana',
        company: 'Singavera',
        phone: '+1 (872) 560-2324',
    }
];
const GetActionFormat = (cell, row) => {
    return (
      <div>
          <button
          type="button"
          className="btn btn-outline-primary btn-sm ts-buttom "
          size="sm"
          data={cell}
          onClick={handleModelEdit}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-outline-primary btn-sm ts-buttom"
          size="sm"
          data={cell}
          onClick={handleModelDelete}
        >
          Delete
        </button>
      </div>
    );
  };

  const handleModelEdit = (...props) => {
    console.log("Edit Clicked "+props.cell);
  };
  const handleModelDelete = (id) => {
    console.log("Delete Clicked "+id);
  };

const columns = [
    {
        dataField: 'name',
        text: 'Name',
        sort: true,
    },
    {
        dataField: 'phone',
        text: 'Phone Number',
        sort: false,
    },
    {
        dataField: 'age',
        text: 'Age',
        sort: true,
    },
    {
        dataField: 'company',
        text: 'Company',
        sort: false,
    },
    {
        dataField: 'id',
        text: 'Action',
        formatter: GetActionFormat,
        sort: false,
    },
];

const sizePerPageRenderer = ({ options, currSizePerPage, onSizePerPageChange }) => (
    <React.Fragment>
        <label className="d-inline mr-1">Show</label>
        <Input type="select" name="select" id="no-entries" className="custom-select custom-select-sm d-inline col-1"
            defaultValue={currSizePerPage}
            onChange={(e) => onSizePerPageChange(e.target.value)}>
            {options.map((option, idx) => {
                return <option key={idx}>{option.text}</option>
            })}
        </Input>
        <label className="d-inline ml-1">entries</label>
    </React.Fragment>
);


const TableWithColumnToggle = () => {
    return (
        <Card>
            <CardBody>

                <ToolkitProvider 
                    keyField="id" 
                    data={records} 
                    columns={columns} 
                    columnToggle
                    search
                    >
                    {props => (
                        <div>
                            <BootstrapTable
                                {...props.baseProps}
                                bordered={false}
                                pagination={paginationFactory({ sizePerPage: 5, sizePerPageRenderer: sizePerPageRenderer, sizePerPageList: [{ text: '5', value: 5, }, { text: '10', value: 10 }, { text: '25', value: 25 }, { text: 'All', value: records.length }] })}
                                wrapperClasses="table-responsive"
                            />
                        </div>
                    )}
                </ToolkitProvider>
            </CardBody>
        </Card>
    );
};

const Tables = () => {
    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Tables', path: '/tables/advanced' },
                            { label: 'Advanced Tables', path: '/tables/advanced', active: true },
                        ]}
                        title={'Advanced Tables'}
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    <TableWithColumnToggle />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Tables;
