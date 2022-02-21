import {useRef, useState} from "react";
import isEmail from "validator/lib/isEmail";
import {PhoneNumberUtil} from "google-libphonenumber";

export function useContactForm() {
    const phoneUtil = useRef(PhoneNumberUtil.getInstance());
    
    const [formValue, setFormValue] = useState({
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
            phoneNumber: {
                value: '',
                phone: true
            },
            message: {
                value: '',
                required: true,
                maxLength: 1000
            }
        }
    });
    
    function validateForm(name, value, formValue, setFormValue) {
        setFormValue(prevState => {
            const {fields} = prevState;
            let valid = true;
            
            const updatedFields = Object.keys(fields).map(n => {
                const field = fields[n];
                
                if (n === name) {
                    field.value = value;
                }
                
                if (field.required) {
                    if (field.value == null || field.value === '' || field.value.length === 0) {
                        field.error = 'required';
                        valid = false;
                    } else {
                        field.error = null;
                    }
                }
                
                if (field.email && field.error !== 'required') {
                    if (!isEmail(field.value)) {
                        field.error = 'email';
                        valid = false;
                    } else {
                        field.error = null;
                    }
                }
                if (field.phone && field.error !== 'required') {
                    try {
                        const num = phoneUtil.current.parse(field.value, '');
                        const isPhoneValid = phoneUtil.current.isValidNumber(num);
                        if (isPhoneValid) {
                            field.error = null;
                        } else {
                            field.error = 'phone';
                            valid = false;
                        }
                    } catch (err) {
                        field.error = 'phone';
                        valid = false;
                    }
                }
                
                return field;
            });
            
            return {
                valid,
                fields: updatedFields,
            };
        });
    }
    
    return {
        formValue,
        setFormValue,
        blurInput: function(e) {
            setFormValue(prevState => {
                const updatedFields = {
                    ...formValue.fields,
                    [e.target.name]: {
                        ...formValue.fields[e.target.name],
                        touched: true,
                    },
                };
                return {
                    ...prevState,
                    fields: updatedFields,
                };
            });
        },
        changeInput: function(e) {
            const name = e.target.name;
            const value = e.target.value;
            validateForm(name, value, formValue, setFormValue);
        }
    };
}
