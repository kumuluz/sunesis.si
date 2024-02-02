import { useState } from "react";
import { mobileApplications } from "../../content/mobile-applications";

export function useAccountDeleteForm() {
    const initialApplicationValue = mobileApplications[0];
    
    const [formValue, setFormValue] = useState({
        valid: false,
        fields: {
            application: {
                value: initialApplicationValue ?? "",
                required: true,
            },
            accountName: {
                value: '',
                required: true,
                maxLength: 1000,
            },
        },
    });
    
    function validateForm(name, value, formValue, setFormValue) {
        setFormValue(prevState => {
            const {fields} = prevState;
            let valid = true;
            
            const updatedFields = Object.entries(fields).reduce((acc, [fieldName, field]) => {
                if (fieldName === name) {
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
                
                return {
                    ...acc,
                    [fieldName]: field,
                }
            }, {});
            
            return {
                valid,
                fields: updatedFields,
            };
        });
    }
    
    return {
        formValue,
        setFormValue,
        blurInput: function (e) {
            const fieldName = e.target.name;
            setFormValue(prevState => {
                const updatedFields = {
                    ...formValue.fields,
                    [fieldName]: {
                        ...formValue.fields[fieldName],
                        touched: true,
                    },
                };
                return {
                    ...prevState,
                    fields: updatedFields,
                };
            });
        },
        changeInput: function (e) {
            const name = e.target.name;
            const value = e.target.value;
            validateForm(name, value, formValue, setFormValue);
        }
    };
}
