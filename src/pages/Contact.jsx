import React, { Suspense, useState } from 'react'
import emailjs from "@emailjs/browser";
import Fox from '../models/Fox';
import { Canvas } from '@react-three/fiber';
import Loader from './Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {

  const [loading, setLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const {alert, showAlert, hideAlert} = useAlert();

  const [form, setform] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setform(
      (f) => ({...f,[name]: value})
    )
  }

  const handleFocus = () =>{setCurrentAnimation('walk')}

  const handleBlur = ()=>{setCurrentAnimation('idle')}

  const onSubmitForm = (e)=>{
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation('hit')
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Chandu',
        from_email: form.email,
        to_email: 'chanduthalati@gmail.com',
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then( ()=> {
      setLoading(false);
      showAlert({
        show:true,
        text: 'Thank you for your messgae 😊',
        type: 'success'
      })
      setTimeout(()=> {
        setCurrentAnimation('idle')
        hideAlert();
        setform({name: '',email: '',message: ''})
      },[2500])
    }).catch((error) => {
      setLoading(false);
      console.log(error);
      showAlert({
        show: true,
        text: "I didn't receive your message 😢",
        type: "danger",
      });
    })
  }

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show && <Alert {...alert} />}
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Lets Connect</h1>
        <form className='w-full flex flex-col gap-7 mt-14' onSubmit={onSubmitForm}>
          <label className='text-black-500 font-semibold'>
            Name
            <input className='input' type="text" name='name' placeholder='Your name'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input className='input' type="email" name='email' placeholder='xxx@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Message
            <textarea className='textarea' type="text" name='message' placeholder='Feel free to express thoughts...'
              rows = {4}
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button type='submit' disabled={loading} className='btn' onFocus={handleFocus} onBlur={handleBlur}>
            {loading ? 'Sending' : 'Send Message'}
          </button>
        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
          >
            <directionalLight position={[0, 0, 1]} intensity={2.5} />
            <ambientLight intensity={1} />
            <pointLight position={[5, 10, 0]} intensity={2} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />

            <Suspense fallback = {<Loader />}>
              <Fox
                currentAnimation={currentAnimation}
                position={[0.5, 0.35, 0]}
                rotation={[12.629, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
              />
            </Suspense>
          </Canvas>
      </div>
    </section>
  );
};

export default Contact