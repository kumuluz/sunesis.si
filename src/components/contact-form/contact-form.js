import React from 'react';
import * as PropTypes from 'prop-types';
import {Col, Form, FormGroup, Label, Input, Button, FormFeedback, FormText} from 'reactstrap';

import './contact-form.scss';
import {useContactForm} from "./contact-form.hooks";
import {useI18next} from "gatsby-plugin-react-i18next";

export function ContactForm({light, smallTitle}) {
    const {t} = useI18next();
    
    const {formValue, changeInput, blurInput} = useContactForm();
    
    const {valid, fields} = formValue;
    const {fullName, company, email, phoneNumber, message} = fields;
    
    return (
        <div className={`contact-form ${light && 'light'}`}>
            {(!smallTitle && <h3 className="blue">{t('contact.title')}</h3>) ||
                <h4>{t('contact.title')}</h4>}
            <Form className="row col pr-0" method="POST" action="/thanks/"
                name="contact-form" data-netlify="true" data-netlify-honeypot="itsatrap">
                <input type="hidden" name="form-name" value="contact-form"/>
                <input type="hidden" name="itsatrap"/>
                <Col xs="6" className="pr-5">
                    <FormGroup row>
                        <Label for="fullName" xs="12">
                            {t('contact.form.name')}
                        </Label>
                        <Input
                            type="text"
                            name="fullName"
                            id="fullName"
                            placeholder={t('contact.form.namePlaceholder')}
                            value={fullName.value}
                            maxLength={fullName.maxLength}
                            onChange={changeInput}
                            onBlur={blurInput}
                            invalid={fullName.touched && fullName.error}
                        />
                        {fullName.error &&
                            <FormFeedback>{t(`contact.form.errors.${fullName.error}`)}</FormFeedback>}
                    </FormGroup>
                </Col>
                <Col xs="6" className="pr-5">
                    <FormGroup row>
                        <Label for="company" xs="12">
                            {t('contact.form.company')}
                        </Label>
                        <Input
                            type="text"
                            name="company"
                            id="company"
                            placeholder={t('contact.form.companyPlaceholder')}
                            value={company.value}
                            maxLength={company.maxLength}
                            onChange={changeInput}
                            onBlur={blurInput}
                            invalid={company.touched && company.error}
                        />
                        {company.error &&
                            <FormFeedback>{t(`contact.form.errors.${company.error}`)}</FormFeedback>}
                    </FormGroup>
                </Col>
                <Col xs="6" className="pr-5">
                    <FormGroup row>
                        <Label for="email" xs="12">
                            {t('contact.form.email')}
                        </Label>
                        <Input
                            type="text"
                            name="email"
                            id="email"
                            placeholder={t('contact.form.emailPlaceholder')}
                            value={email.value}
                            onChange={changeInput}
                            onBlur={blurInput}
                            invalid={email.touched && email.error}
                        />
                        {email.error &&
                            <FormFeedback>{t(`contact.form.errors.${email.error}`)}</FormFeedback>}
                    </FormGroup>
                </Col>
                <Col xs="6" className="pr-5">
                    <FormGroup row>
                        <Label for="phoneNumber" xs="12">
                            {t('contact.form.phone')}
                        </Label>
                        <Input
                            type="text"
                            name="phoneNumber"
                            id="phoneNumber"
                            placeholder={t('contact.form.phonePlaceholder')}
                            value={phoneNumber.value}
                            onChange={changeInput}
                            onBlur={blurInput}
                            invalid={phoneNumber.touched && phoneNumber.error}
                        />
                        {phoneNumber.error &&
                            <FormFeedback>{t(`contact.form.errors.${phoneNumber.error}`)}</FormFeedback>}
                    </FormGroup>
                </Col>
                <Col xs="12" className="mt-3 pr-5">
                    <FormGroup row>
                        <Label for="message" xs="12">
                            {t('contact.form.message')}
                        </Label>
                        <Input
                            type="textarea"
                            name="message"
                            id="message"
                            placeholder={t('contact.form.messagePlaceholder')}
                            value={message.value}
                            maxLength={message.maxLength}
                            onChange={changeInput}
                            onBlur={blurInput}
                            invalid={message.touched && message.error}
                        />
                        <FormText className="ml-auto">
                            {t(`contact.form.messageHelp`)}: {message.maxLength - message.value.length}
                        </FormText>
                        {message.error &&
                            <FormFeedback>{t(`contact.form.errors.${message.error}`)}</FormFeedback>}
                    </FormGroup>
                </Col>
                <Button color="primary" className="mt-3" disabled={!valid}>
                    {t('contact.form.send')}
                </Button>
            </Form>
        </div>
    );
}

ContactForm.propTypes = {
    light: PropTypes.bool,
    smallTitle: PropTypes.bool
};
