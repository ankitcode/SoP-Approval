import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

export const Inbox = () => {

  const moment= require('moment');

  const [sopPortalData, setSopPortalData] = useState([]);
  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      const response = await fetch("/api/sop/fetchSoPData", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const json = await response.json();
      console.log(json);
      setSopPortalData(json);
    } catch (e) {
      console.log(e);
    }
  }

  const columns = [
    {
      dataField: "sopID",
      text: "Form ID",
      sort: true,
      headerStyle: (colum, colIndex) => {
        return { width: "100px", textAlign: "center" };
      },
    },
    { dataField: "description", text: "Description", sort: true },
    {
      dataField: "createdOn",
      text: "Created On",
      formatter: dateFormatter,
      sort: true,
    },
    {
      dataField: "maintenanceDate",
      text: "Maintenance Date",
      formatter: dateFormatter,
      sort: true,
    },
    {
      dataField: "shutdown.startDate",
      text: "Shutdown Start Date",
      formatter: dateFormatter,
      sort: true,
    },
    {
      dataField: "shutdown.endDate",
      text: "Shutdown End Date",
      formatter: dateFormatter,
      sort: true,
    },
  ];

  const defaultSorted = [
    {
      dataField: "sopID",
      order: "desc",
    },
  ];

  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size} Results
    </span>
  );

  function dateFormatter(cell) {
    return <span>{moment(cell).format("DD-MM-YYYY")}</span>;
  }

  const options = {
    paginationSize: 10,
    pageStartIndex: 1,
    // alwaysShowAllBtns: true, // Always show next and previous button
    // withFirstAndLast: false, // Hide the going to First and Last page button
    // hideSizePerPage: true, // Hide the sizePerPage dropdown always
    // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText: "First",
    prePageText: "Back",
    nextPageText: "Next",
    lastPageText: "Last",
    nextPageTitle: "First page",
    prePageTitle: "Pre page",
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [
      {
        text: "10",
        value: 10,
      },
      {
        text: "20",
        value: 20,
      },
      {
        text: "50",
        value: 50,
      },
      {
        text: "All",
        value: sopPortalData.length,
      },
    ], // A numeric array is also available. the purpose of above example is custom the text
  };

  return (
    <div className="content-wrapper">
    <Container>
      <BootstrapTable
        keyField="id"
        data={sopPortalData}
        columns={columns}
        pagination={paginationFactory(options)}
        striped
        hover
        condensed
        defaultSorted={defaultSorted}
      />
    </Container>
    </div>
  );
};

export default Inbox;
