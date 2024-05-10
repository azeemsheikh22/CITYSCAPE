import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../components/Cta';
import LoginRegister from '../components/LoginRegister';
import PageTitle from '../common/PageTitle';

const Register = () => {
    return (
        <>
        <PageTitle title="CityScape - Registration" />

        <main className="body-bg">
            
            {/* Header */}
            <Header 
                headerClass="dark-header has-border" 
                logoBlack={false}
                logoWhite={true}
                headerMenusClass="mx-auto"
                btnClass="btn btn-outline-main btn-outline-main-dark d-lg-block d-none"
                btnLink="/add-new-listing"
                btnText="Add Listing"
                spanClass="icon-right text-gradient" 
                showHeaderBtn={true}
                showOffCanvasBtn={false}
                offCanvasBtnClass=""
                showContactNumber={false}
            />

            {/* BreadCrumb */}
            <Breadcrumb 
                pageTitle="Register"
                pageName="Register"
            />

            {/* Register Section */}
            <LoginRegister
                titleText="Sign up"
                firstNameCol="col-sm-6 col-xs-6" 
                showFirstName={true}
                lastNameCol="col-sm-6 col-xs-6" 
                showLastName={true}
                passwordCol="col-sm-6 col-xs-6" 
                showConfirm={true}
                btnText="Register"
                showForgotRemember={false}
                showTermCondition={true}
                haveAccountText = "Already Have An Account? "
                haveAccountLinkText = "Login"
                haveAccountLink = "/login"
            />

            {/* Cta */}
            <Cta ctaClass=""/>

            {/* Footer */}
            <Footer/>

        </main>   
        </>
    );
};

export default Register;