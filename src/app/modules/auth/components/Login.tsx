/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import {getUserByToken, login} from '../core/_requests'
// import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {useAuth} from '../core/Auth'

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .email('Wrong username format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('username is required'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
})

const initialValues = {
  // username: 'admin@demo.com',
  // password: 'demo',
  username: 'admin@polygon.com',
  password: 'admin',
}

/*
  Formik+YUP+Typescript:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
  https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
*/

export function Login() {
  const [loading, setLoading] = useState(false)
  const {saveAuth, setCurrentUser} = useAuth()

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    // onSubmit: async (values, {setStatus, setSubmitting}) => {
    //   setLoading(true)
    //   try {
    //     const {data: auth} = await login(values.username, values.password)
    //     saveAuth(auth)
    //     // let resp = await login(values.username, values.password)

    //     //afficher au console le token
    //     console.log('token', auth.data.access_token)
    //     //const {data: user} = await getUserByToken(auth.data.access_token)
    //     // setCurrentUser(user)

    //   } catch (error) {
    //     console.error(error)
    //     saveAuth(undefined)
    //     setStatus('The login detail is incorrect ***')
    //     setSubmitting(false)
    //     setLoading(false)
    //   }
    // },
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      // try {
      //   const {data: auth} = await login(values.username, values.password)  
      //   // Sauvegarde du token
      //   console.log('🔐 AUTH RESPONSE:', auth)
      //   saveAuth(auth)
    
      //   // Ici, tu peux stocker l'utilisateur connecté dans le contexte
      //   setCurrentUser({
      //     ...auth.user,
      //     role: auth.roles[0], // ou `roles.find(r => ...)` si plusieurs rôles
      //   })
    
      // } catch (error) {
      //   console.error(error)
      //   saveAuth(undefined)
      //   setStatus('The login detail is incorrect')
      //   setSubmitting(false)
      //   setLoading(false)
      // }
      try {
        const auth = await login(values.username, values.password);
      
        // Log pour vérifier la forme réelle de la réponse
        console.log('🔐 AUTH RESPONSE:', auth);
      
        // Sauvegarde le token (auth contient déjà tout)
        saveAuth(auth);
      
        // Mapping de l'utilisateur pour correspondre au UserModel attendu
        const mappedUser = {
          id: auth.data.id,
          role: auth.data.roles[0],
          username: auth.data.username,          // 🔁 conversion
          password: undefined,                   // 🔒 par sécurité
          email: auth.data.email,
          first_name: auth.data.firstName,       // 🔁 conversion
          last_name: auth.data.lastName,         // 🔁 conversion
          phone: auth.data.telephone,
        };
        console.log('🔐 MAPPED USER:', mappedUser);
      
        setCurrentUser(mappedUser);
      
        // Redirection ou autre logique après connexion...
      } catch (error) {
        console.error('❌ Login error:', error);
      }
      
    }
  })

  

  return (
    <form
      className='form w-100'
      onSubmit={formik.handleSubmit}
      noValidate
      id='kt_login_signin_form'
    >
      {/* begin::Heading */}
      <div className='text-center mb-10'>
        <h1 className='text-dark mb-3'>Se connecter +</h1>
        <div className='text-gray-400 fw-bold fs-4'>
          Vous êtes nouveau ?{' '}
          <Link to='/auth/registration' className='link-primary fw-bolder'>
            Créer un compte
          </Link>
        </div>
      </div>
      {/* begin::Heading */}

      {formik.status ? (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>{formik.status}</div>
        </div>
      ) : (
        <div className='mb-10 bg-light-info p-8 rounded'>
          <div className='text-info'>
            Utilisez le compte :<strong>admin@demo.com</strong> et le mot de passe : <strong>demo</strong> pour continuer.
          </div>
        </div>
      )}

      {/* begin::Form group */}
      <div className='fv-row mb-10'>
        <label className='form-label fs-6 fw-bolder text-dark'>username</label>
        <input
          placeholder='username'
          {...formik.getFieldProps('username')}
          className={clsx(
            'form-control form-control-lg form-control-solid',
            {'is-invalid': formik.touched.username && formik.errors.username},
            {
              'is-valid': formik.touched.username && !formik.errors.username,
            }
          )}
          type='username'
          name='username'
          autoComplete='off'
        />
        {formik.touched.username && formik.errors.username && (
          <div className='fv-plugins-message-container'>
            <span role='alert'>{formik.errors.username}</span>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='fv-row mb-10'>
        <div className='d-flex justify-content-between mt-n5'>
          <div className='d-flex flex-stack mb-2'>
            {/* begin::Label */}
            <label className='form-label fw-bolder text-dark fs-6 mb-0'>Mot de passe</label>
            {/* end::Label */}
            {/* begin::Link */}
            <Link
              to='/auth/forgot-password'
              className='link-primary fs-6 fw-bolder'
              style={{marginLeft: '5px'}}
            >
              Mot de passe oublié ?
            </Link>
            {/* end::Link */}
          </div>
        </div>
        <input
          type='password'
          autoComplete='off'
          {...formik.getFieldProps('password')}
          className={clsx(
            'form-control form-control-lg form-control-solid',
            {
              'is-invalid': formik.touched.password && formik.errors.password,
            },
            {
              'is-valid': formik.touched.password && !formik.errors.password,
            }
          )}
        />
        {formik.touched.password && formik.errors.password && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.password}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Action */}
      <div className='text-center'>
        <button
          type='submit'
          id='kt_sign_in_submit'
          className='btn btn-lg btn-primary w-100 mb-5'
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading && <span className='indicator-label'>Se connecter</span>}
          {loading && (
            <span className='indicator-progress' style={{display: 'block'}}>
              Patienter...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>

        {/* begin::Separator */}
        {/* <div className='text-center text-muted text-uppercase fw-bolder mb-5'>or</div> */}
        {/* end::Separator */}

        {/* begin::Google link */}
        {/* <a href='#' className='btn btn-flex flex-center btn-light btn-lg w-100 mb-5'>
          <img
            alt='Logo'
            src={toAbsoluteUrl('/media/svg/brand-logos/google-icon.svg')}
            className='h-20px me-3'
          />
          Continue with Google
        </a> */}
        {/* end::Google link */}

        {/* begin::Google link */}
        {/* <a href='#' className='btn btn-flex flex-center btn-light btn-lg w-100 mb-5'>
          <img
            alt='Logo'
            src={toAbsoluteUrl('/media/svg/brand-logos/facebook-4.svg')}
            className='h-20px me-3'
          />
          Continue with Facebook
        </a> */}
        {/* end::Google link */}

        {/* begin::Google link */}
        {/* <a href='#' className='btn btn-flex flex-center btn-light btn-lg w-100'>
          <img
            alt='Logo'
            src={toAbsoluteUrl('/media/svg/brand-logos/apple-black.svg')}
            className='h-20px me-3'
          />
          Continue with Apple
        </a> */}
        {/* end::Google link */}
      </div>
      {/* end::Action */}
    </form>
  )
}
