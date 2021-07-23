import React from 'react'
import { FaLinkedin, FaFacebook } from 'react-icons/fa'

const SampleComponent = () => {
  return (
    <div className="p-8 mx-auto mt-10 border-2 border-gray-200 border-opacity-50 rounded-lg">
      <h1 className="mb-3 text-3xl font-light">Site Under Construction</h1>
      <p className="mb-6 leading-relaxed text-gray-600">
        If you need to contact me, feel free to click one of the link below
      </p>
      <div className="space-x-3">
        <a
          href="https://www.linkedin.com/in/junaedsiam/"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center px-2 py-2 text-white bg-indigo-600 border border-transparent rounded hover:bg-indigo-700"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://facebook.com/junaed.siam.02"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center px-2 py-2 text-white bg-indigo-600 border border-transparent rounded hover:bg-indigo-700"
        >
          <FaFacebook />
        </a>
      </div>
    </div>
  )
}

export default SampleComponent
