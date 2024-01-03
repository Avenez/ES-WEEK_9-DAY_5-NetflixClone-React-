import React from "react";
import { Container, Dropdown, ButtonGroup } from "react-bootstrap";

const TvShowsHeader = () => {
  return (
    <Container fluid className="bg-dark d-flex justify-content-between">
      <div className="d-flex justify-content-center align-items-center ps-2">
        <h1 className="text-white me-5">TV Shows</h1>
        <Dropdown as={ButtonGroup}>
          <Dropdown.Toggle variant="dark" className="fw-bold border border-white border-1">
            Genres
          </Dropdown.Toggle>
          <Dropdown.Menu variant="dark">
            <Dropdown.Item active href="#">
              Si-Fi
            </Dropdown.Item>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Horror</Dropdown.Item>
            <Dropdown.Item href="#">Drama</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="d-flex align-items-center">
        <div className="btn btn-dark btn-light border border-dark border-1 rounded-0 py-1 px-3 d-none d-md-flex ">
          <i class="bi bi-list"></i>
        </div>
        <div className="btn btn-dark btn-light border border-dark border-1 rounded-0 py-1 px-3 d-none d-md-flex">
          <i class="bi bi-grid"></i>
        </div>
      </div>
    </Container>
  );
};

export default TvShowsHeader;
