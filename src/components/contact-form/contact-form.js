import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { Col, Form, FormGroup, Label, Input, Button, FormFeedback, FormText } from 'reactstrap';
import isEmail from 'validator/lib/isEmail';
import { PhoneNumberUtil, PhoneNumberFormat } from 'google-libphonenumber';

import './contact-form.scss';
import {TranslationUtil} from "../../utils/translation.util";

export class ContactForm extends Component {
  static propTypes = {
    light: PropTypes.bool,
    smallTitle: PropTypes.bool,
    locale: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      form: {
        valid: false,

        fields: {
          fullName: {
            value: '',
            required: true,
            maxLength: 50
          },
          company: {
            value: '',
            required: true,
            maxLength: 50
          },
          email: {
            value: '',
            required: true,
            email: true
          },
          companySize: {
            value: '',
            required: true
          },
          phoneNumber: {
            value: '',
            phone: true
          },
          partnership: {
            value: '',
            required: true
          },
          message: {
            value: '',
            required: true,
            maxLength: 1000
          }
        }
      }
    };

    this.phoneUtil = PhoneNumberUtil.getInstance();
  }

  changeInput(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.validateForm(name, value);
  }

  blurInput(e) {
    const fields = this.state.form.fields;
    fields[e.target.name].touched = true;

    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        fields: {
          ...this.state.form.fields
        }
      }
    });
  }

  validateForm(name, value) {
    const { fields } = this.state.form;
    let valid = true;

    Object.keys(fields).forEach(n => {
      const f = fields[n];
      if (n === name) {
        f.value = value;
      }

      if (f.required) {
        if (f.value == null || f.value === '' || f.value.length === 0) {
          f.error = 'required';
          valid = false;
        } else {
          f.error = null;
        }
      }
      if (f.email && f.error !== 'required') {
        if (!isEmail(f.value)) {
          f.error = 'email';
          valid = false;
        } else {
          f.error = null;
        }
      }
      if (f.phone && f.error !== 'required') {
        try {
          const num = this.phoneUtil.parse(f.value, '');
          const isPhoneValid = this.phoneUtil.isValidNumber(num, PhoneNumberFormat.E164);
          if (isPhoneValid) {
            f.error = null;
          } else {
            f.error = 'phone';
            valid = false;
          }
        } catch (err) {
          f.error = 'phone';
          valid = false;
        }
      }
    });

    this.setState({
      ...this.state,
      form: {
        valid,
        fields
      }
    });
  }

  submitForm(e) {
    e.preventDefault();
    // TODO Handle submission
    return false;
  }

  render() {
    const { light, smallTitle, locale } = this.props;
    const { valid } = this.state.form;
    const { fullName, company, email, companySize, phoneNumber, partnership, message } = this.state.form.fields;

    return (
      <div className={`contact-form ${light && 'light'}`}>
        {(!smallTitle && <h3 className="blue">{TranslationUtil.translate(locale, 'contact.title')}</h3>) || <h4>{TranslationUtil.translate(locale, 'contact.title')}</h4>}
        <Form className="row col pr-0" onSubmit={e => this.submitForm(e)}>
          <Col xs="6" className="pr-5">
            <FormGroup row>
              <Label for="fullName" xs="12">
                {TranslationUtil.translate(locale, 'contact.form.name')}
              </Label>
              <Input
                type="text"
                name="fullName"
                id="fullName"
                placeholder={TranslationUtil.translate(locale, 'contact.form.namePlaceholder')}
                value={fullName.value}
                maxLength={fullName.maxLength}
                onChange={e => this.changeInput(e)}
                onBlur={e => this.blurInput(e)}
                invalid={fullName.touched && fullName.error}
              />
              {fullName.error && <FormFeedback>{TranslationUtil.translate(locale, `contact.form.errors.${fullName.error}`)}</FormFeedback>}
            </FormGroup>
          </Col>
          <Col xs="6" className="pr-5">
            <FormGroup row>
              <Label for="company" xs="12">
                {TranslationUtil.translate(locale, 'contact.form.company')}
              </Label>
              <Input
                type="text"
                name="company"
                id="company"
                placeholder={TranslationUtil.translate(locale, 'contact.form.companyPlaceholder')}
                value={company.value}
                maxLength={company.maxLength}
                onChange={e => this.changeInput(e)}
                onBlur={e => this.blurInput(e)}
                invalid={company.touched && company.error}
              />
              {company.error && <FormFeedback>{TranslationUtil.translate(locale, `contact.form.errors.${company.error}`)}</FormFeedback>}
            </FormGroup>
          </Col>
          <Col xs="6" className="pr-5">
            <FormGroup row>
              <Label for="email" xs="12">
                {TranslationUtil.translate(locale, 'contact.form.email')}
              </Label>
              <Input
                type="text"
                name="email"
                id="email"
                placeholder={TranslationUtil.translate(locale, 'contact.form.emailPlaceholder')}
                value={email.value}
                onChange={e => this.changeInput(e)}
                onBlur={e => this.blurInput(e)}
                invalid={email.touched && email.error}
              />
              {email.error && <FormFeedback>{TranslationUtil.translate(locale, `contact.form.errors.${email.error}`)}</FormFeedback>}
            </FormGroup>
          </Col>
          <Col xs="6" className="pr-5">
            <FormGroup row>
              <Label for="companySize" xs="12">
                {TranslationUtil.translate(locale, 'contact.form.companySize')}
              </Label>
              <Input
                type="select"
                name="companySize"
                id="companySize"
                value={companySize.value}
                onChange={e => this.changeInput(e)}
                onBlur={e => this.blurInput(e)}
                invalid={companySize.touched && companySize.error}
              >
                <option disabled />
                {['micro', 'small', 'medium', 'large'].map((opt, k) => (
                  <option key={k}>{TranslationUtil.translate(locale, `contact.form.companySizeOptions.${opt}`)}</option>
                ))}
              </Input>
              {companySize.error && <FormFeedback>{TranslationUtil.translate(locale, `contact.form.errors.${companySize.error}`)}</FormFeedback>}
            </FormGroup>
          </Col>
          <Col xs="6" className="pr-5">
            <FormGroup row>
              <Label for="phoneNumber" xs="12">
                {TranslationUtil.translate(locale, 'contact.form.phone')}
              </Label>
              <Input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder={TranslationUtil.translate(locale, 'contact.form.phonePlaceholder')}
                value={phoneNumber.value}
                onChange={e => this.changeInput(e)}
                onBlur={e => this.blurInput(e)}
                invalid={phoneNumber.touched && phoneNumber.error}
              />
              {phoneNumber.error && <FormFeedback>{TranslationUtil.translate(locale, `contact.form.errors.${phoneNumber.error}`)}</FormFeedback>}
            </FormGroup>
          </Col>
          <Col xs="6" className="pr-5">
            <FormGroup row>
              <Label for="partnership" xs="12">
                {TranslationUtil.translate(locale, 'contact.form.partnership')}
              </Label>
              <Input
                type="select"
                name="partnership"
                id="partnership"
                value={partnership.value}
                onChange={e => this.changeInput(e)}
                onBlur={e => this.blurInput(e)}
                invalid={partnership.touched && partnership.error}
              >
                <option disabled />
                {['customer', 'integration', 'developer'].map((opt, k) => (
                  <option key={k}>{TranslationUtil.translate(locale, `contact.form.partnershipOptions.${opt}`)}</option>
                ))}
              </Input>
              {partnership.error && <FormFeedback>{TranslationUtil.translate(locale, `contact.form.errors.${partnership.error}`)}</FormFeedback>}
            </FormGroup>
          </Col>
          <Col xs="12" className="mt-3 pr-5">
            <FormGroup row>
              <Label for="message" xs="12">
                {TranslationUtil.translate(locale, 'contact.form.message')}
              </Label>
              <Input
                type="textarea"
                name="message"
                id="message"
                placeholder={TranslationUtil.translate(locale, 'contact.form.messagePlaceholder')}
                value={message.value}
                maxLength={message.maxLength}
                onChange={e => this.changeInput(e)}
                onBlur={e => this.blurInput(e)}
                invalid={message.touched && message.error}
              />
              <FormText className="ml-auto">
                {TranslationUtil.translate(locale, `contact.form.messageHelp`)}: {message.maxLength - message.value.length}
              </FormText>
              {message.error && <FormFeedback>{TranslationUtil.translate(locale, `contact.form.errors.${message.error}`)}</FormFeedback>}
            </FormGroup>
          </Col>
          <Button color="primary" className="mt-3" disabled={!valid}>
            {TranslationUtil.translate(locale, 'contact.form.send')}
          </Button>
        </Form>
      </div>
    );
  }
}
