import Component from '../../app/js/base/Component';

class Form extends Component {

    serverError;
    policyError;
    policyInput;
    loader;
    submitButton;
    errors;
    inputEmailRoot;
    inputEmail;
    errorEmail;
    tipEmail;
    textarea;
    errorTextarea;
    tipTextarea;

    constructor(element) {
        super(element);

        this.root.addEventListener('submit',this.handleFormSubmit);
        this.serverError = this.getElement('server-error');
        this.policyError = this.getElement('policy-error');
        this.loader = this.root.querySelector('.loader');
        this.submitButton = this.root.querySelector('.button');
        this.inputEmailRoot = this.root.querySelector('.input-email');
        this.inputEmail = this.inputEmailRoot.querySelector('.input-email__input');
        this.errorEmail = this.inputEmailRoot.querySelector('.input-email__error');
        this.tipEmail = this.inputEmailRoot.querySelector('.input-email__svg');
        this.policyInput = this.root.querySelector('.checkbox__input');
        this.policyInput.addEventListener('change',this.handlePolicyInput);
        this.inputEmail.addEventListener('input',this.handleEmailInput);
        this.inputEmail.addEventListener('focus',this.handleEmailFocus);
        this.textarea = this.root.querySelector('.textarea__area');
        this.errorTextarea = this.root.querySelector('.textarea__error');
        this.tipTextarea = this.root.querySelector('.textarea__svg');
        this.textarea.addEventListener('input',this.handleTextareaInput);
        this.textarea.addEventListener('blur',this.handleTextareaCorrectInput);
        this.errors = new Map([
                                ['email',  false],
                                ['textarea', false],
                                ['policy', false]
                            ]);
        this.disableSubmitButton();
    }

    handleTextareaCorrectInput = (event) => {
        if (event.target.value.length >= 1 && event.target.value.length <=1000) {
            this.showCorrectTextAreaInput();
        } else {
            this.hideCorrectTextareaInput();
        }
    }

    showCorrectTextAreaInput = () => {
        this.textarea.classList.add('textarea__area_correct_input');
        this.tipTextarea.classList.remove('textarea_invisible_elem');
        this.errors.set('textarea',true);
        this.checkErrors();
    }

    hideCorrectTextareaInput = () => {
        this.textarea.classList.remove('textarea__area_correct_input');
        this.tipTextarea.classList.add('textarea_invisible_elem');
        this.errors.set('textarea',false);
        this.checkErrors();
    }

    showTextareaError = () => {
        this.errorTextarea.classList.remove('textarea_invisible_elem');
        this.textarea.classList.add('textarea_error');
        this.errors.set('textarea',false);
        this.checkErrors();
    }

    hideTextareaError = () => {
        this.errorTextarea.classList.add('textarea_invisible_elem');
        this.textarea.classList.remove('textarea_error');
        this.errors.set('textarea',true);
        this.checkErrors();
    }

    handleTextareaInput = (event) => {
        if (event.target.value.length > 1000) {
            this.showTextareaError();
        } else this.hideTextareaError();
        this.textarea.setAttribute('style', 'height:' + (event.target.scrollHeight) + 'px;overflow-y:hidden;');
        this.textarea.style.height = 'auto';
        this.textarea.style.height = event.target.scrollHeight+'px';
    }

    handleEmailInput = (event) => {
        const emailRegExp = /^([a-zA-Z\-0-9_]+|([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)+)|(".+"))@(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]{2,})$/;
        if (!emailRegExp.test(event.target.value)) {
            this.showEmailError('Введите email');
            this.hideEmailTip();
            this.errors.set('email',false);
        } else if (event.target.value.length > 255) {
            this.showEmailError('Введите значение менее 255 символов');
            this.hideEmailTip();
            this.errors.set('email',false);
        } else {
            this.hideEmailError();
            this.showEmailTip();
            this.errors.set('email',true);
        }
        this.checkErrors();
    }

    handlePolicyInput = (event) => {
        if(event.target.checked) {
            this.policyError.classList.add('form_invisible-elem');
            this.errors.set('policy',true);
        } else {
            this.errors.set('policy',false);
            this.policyError.classList.remove('form_invisible-elem');
        }
        this.checkErrors();
    }

    checkErrors = () => {
        let formIsValid = true;
        for (let value of this.errors.values()) {
            if (!value) {
                formIsValid = false;
                break;
            }
        }
        if (formIsValid) {
            this.enableSubmitButton();
        } else this.disableSubmitButton();
    }

    enableSubmitButton = () => {
        this.submitButton.classList.remove('button_disabled');
    }

    showEmailTip = () => {
        this.tipEmail.classList.remove('input-email_invisible');
    }

    hideEmailTip = () => {
        if (!this.tipEmail.classList.contains('input-email_invisible')) {
            this.tipEmail.classList.add('input-email_invisible');
        }
    }

    showEmailError = (error) =>{
        this.errorEmail.classList.remove('input-email_invisible');
        this.inputEmail.classList.add('input-email__input_error');
        const prevError = this.errorEmail.innerText;
        if (!prevError.includes(error)) {
            this.errorEmail.innerText = prevError + ' ' + error;
        }
    }

    hideEmailError = () => {
        this.errorEmail.innerText = '';
        this.errorEmail.classList.add('input-email_invisible');
        this.inputEmail.classList.remove('input-email__input_error');
    }

    handleEmailFocus = () => {
        this.hideEmailError();
    }

    hideEmailError = () => {
        this.errorEmail.innerText = '';
        this.errorEmail.classList.add('input-email_invisible');
        this.inputEmail.classList.remove('input-email__input_error');
    }

    showLoader = () => {
        this.loader.classList.remove('loader_disabled')
    }

    hideLoader = () => {
        this.loader.classList.add('loader_disabled')
    }

    disableSubmitButton = () => {
        if (!this.submitButton.classList.contains('button_disabled')) {
            this.submitButton.classList.add('button_disabled');
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(this.root);
        console.log(formData);
        if (!formData.get('policy')) {
            this.setPolicyError();
        } else {
            this.submitData({
                email: formData.get('email'),
                policy: true,
            })
        }
    }

    setError = (errorText) => {
        this.serverError.classList.remove('form_invisible-elem');
        this.serverError.textContent = errorText;
    }

    clearError = () => {
        this.serverError.textContent = '';
        this.serverError.classList.add('form_invisible-elem');
    }

    setPolicyError = () => {
        this.policyError.classList.remove('form_invisible-elem');
    }

    clearPolicyError = () => {
        this.policyError.classList.add('form_invisible-elem');
    }

    submitData = async (data) => {
        this.clearError();
        const url = 'http://localhost:3000/form';
        try {
            this.showLoader();
            const response = await fetch(url,{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body:JSON.stringify(data)
            });
            this.hideLoader();
            if (!response.ok) {
                this.setError(response.statusText);
            }
        } catch (error) {
            console.error(error);
        }
    }

}

export default Form