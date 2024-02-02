import React from "react";
import { Button, Col, Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import { mobileApplications } from "../../content/mobile-applications";
import { useAccountDeleteForm } from "./form.hook";


export function AccountDeleteForm() {
    const errors = {
        "required": "Field is required.",
    };
    
    const {formValue, changeInput, blurInput} = useAccountDeleteForm();
    
    const {valid, fields} = formValue;
    const {accountName, application} = fields;
    
    return (
        <div className={`contact-form light`}>
            <Form className="row col pr-0" method="POST" action="/thanks/"
                  name="account-delete-request-form" data-netlify="true" data-netlify-honeypot="itsatrap">
                <input type="hidden" name="form-name" value="account-delete-request-form"/>
                <input type="hidden" name="itsatrap"/>
                
                <Col xs={12}>
                    <FormGroup row>
                        <Label for="application" xs={12}>
                            Application
                        </Label>
                        <Input
                            id="application"
                            name="application"
                            type="select"
                            value={application?.value}
                            invalid={application?.touched && !!application?.error}
                            onBlur={blurInput}
                            onChange={changeInput}>
                            {mobileApplications.map(app => (
                                <option value={app} key={app}>
                                    {app}
                                </option>
                            ))}
                        </Input>
                        {application?.error &&
                            <FormFeedback>{errors[accountName?.error]}</FormFeedback>}
                    </FormGroup>
                </Col>
                
                <Col xs="12">
                    <FormGroup row>
                        <Label for="accountName" xs="12">
                            Account name
                        </Label>
                        <Input
                            type="text"
                            name="accountName"
                            id="accountName"
                            placeholder="Your account name"
                            value={accountName?.value ?? ""}
                            maxLength={accountName?.maxLength}
                            onChange={changeInput}
                            onBlur={blurInput}
                            invalid={accountName?.touched && !!accountName?.error}
                        />
                        {accountName?.error &&
                            <FormFeedback>{errors[accountName?.error]}</FormFeedback>}
                    </FormGroup>
                </Col>
                <Button color="primary" className="mt-3" disabled={!valid}>
                    Send request
                </Button>
            </Form>
        </div>
    );
}
