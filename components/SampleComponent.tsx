import React from 'react'
import { FaLinkedin, FaFacebook } from 'react-icons/fa'

const SampleComponent = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-xl border-2 border-gray-200 border-opacity-50 mx-auto p-8 rounded-lg">
        <h1 className="text-3xl font-light mb-3">Site Under Construction</h1>
        <p className="leading-relaxed text-gray-600 mb-6">
          If you need to contact me, feel free to click one of the link below
        </p>
        <div className="space-x-3">
          <a
            href="https://www.linkedin.com/in/junaedsiam/"
            target="_blank"
            rel="noreferrer noopener"
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-2 border border-transparent rounded inline-flex items-center"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://facebook.com/junaed.siam.02"
            target="_blank"
            rel="noreferrer noopener"
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-2 border border-transparent rounded inline-flex items-center"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SampleComponent
