import { LeftDiv, RightDiv, Section, StyleSubTitulo } from "../StylePages/Home";
import React, { useEffect, useState } from "react";

import Cards from "../../components/organisms/Cards";
import Form from "../../components/molecules/Form";
import FormCadClient from "../../components/organisms/FormCadClient";
import FormCadFranchisee from "../../components/organisms/FormCadFranchisee";
import FormCadProduct from "../../components/organisms/FormCadProduct";
import Header from "../../components/organisms/Header";
import Modal from "../../components/molecules/Modal";
import SubTitulo from "../../components/atoms/SubTitle";

type initialStateProps = {
  FormCadFranchisee: boolean;
  FormCadClient: boolean;
  FormCadProduct: boolean;
};

const Admin = () => {
  const initialState = {
    FormCadFranchisee: false,
    FormCadClient: false,
    FormCadProduct: false,
  };

  const [info, setInfo] = useState<initialStateProps>(initialState);

  useEffect(() => {
    setInfo({ ...initialState, FormCadFranchisee: false });
  }, []);
  const handleClickFranc = () => {
    setInfo({ ...initialState, FormCadFranchisee: true });
  };

  const handleClickClient = () => {
    setInfo({ ...initialState, FormCadClient: true });
  };
  const handleClickProduct = () => {
    setInfo({ ...initialState, FormCadProduct: true });
  };

  return (
    <>
    <Modal showModal={true} handleClose={function (): void {
        throw new Error("Function not implemented.");
      } }></Modal>
      <Header />
      <Section>
        <LeftDiv>
          <StyleSubTitulo>
            <SubTitulo titulo={"Cadastros"} />
          </StyleSubTitulo>
          <Cards
            title={"Cadastrar Franqueados"}
            image={""}
            description={""}
            onClick={handleClickFranc}
          />
          <Cards
            title={"Cadastrar Clientes"}
            image={""}
            description={""}
            onClick={handleClickClient}
          />
          <Cards
            title={"Cadastrar Produtos"}
            image={""}
            description={""}
            onClick={handleClickProduct}
          />
        </LeftDiv>
        <RightDiv>
          {info.FormCadFranchisee && <FormCadFranchisee />}
          {info.FormCadClient && <FormCadClient />}
          {info.FormCadProduct && <FormCadProduct />}
        </RightDiv>
      </Section>
    </>
  );
};

export default Admin;