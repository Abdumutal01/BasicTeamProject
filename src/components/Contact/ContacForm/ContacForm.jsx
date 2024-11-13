import React from 'react'
import './ContacForm.css'

export default function ContacForm({ t }) {
    return (
        <form className='contactForm form'>
            <h2 className="form__title">
                {t("contactTitle2")}
            </h2>

            <input
                type="text"
                className='form__input'
                placeholder={t("contactPls1")}
            />
            <input
                type="tel"
                className='form__input'
                placeholder={t("contactPls2")}
            />
            <input
                type="email"
                className='form__input'
                placeholder={t("contactPls3")}
            />
            <label htmlFor="">
                <input
                    type="file"
                    className='form__input'
                    placeholder={t("contactPls4")}
                />
            </label>
            <input
                type="text"
                className='form__input'
                placeholder={t("contactPls5")}
            />
            <input
                type="submit"
                className='form__subBtn'
                value={t("contactBtn")}
            />
        </form>
    )
}
