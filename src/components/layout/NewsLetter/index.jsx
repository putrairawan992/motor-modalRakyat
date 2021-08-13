import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import style from './style.module.scss';

const Index = () => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        NEWSLETTER SIGNUP
      </header>

      <div className={style.information}>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>

        <Form.Control type="text" placeholder="Name" className="mb-2" />
        <Form.Control type="text" placeholder="Email" className="mb-3" />

        <Form.Check
          type="checkbox"
          label="Receive special offers"
          className="mb-3"
        />

        <div className="d-flex justify-content-center">
          <Button variant="danger">
            SIGNUP
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
