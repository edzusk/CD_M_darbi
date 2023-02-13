import style from './inputs.module.scss'

type ButtonProps = {
    children?: string,
    onClick?: () => void | undefined
    isDisabled? : boolean
    type? : 'submit' | 'button'
} 

const Button = ({children, onClick, isDisabled, type='submit'} : ButtonProps) => {
    
    const handleClick= () => {
        onClick ? onClick() : console.log('click')
    }

    return(
        <button type={type} disabled={isDisabled} onClick = {() => handleClick()} className={style.btn}>{children}</button>
    )
}

export default Button